import React, { useState } from 'react';

export default function Anonymizer() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState(null);

  const sampleText = `EXTRATO MENSAL DETALHADO
Caixa Geral de Depósitos - Conta POUPANÇA ACTIVA
Titular: JOÃO MANUEL SILVA PINTO
NIF: 245987123
IBAN: PT50 0035 0123 4567 8901 2345 6

Movimentos de 01/05/2026 a 31/05/2026:

Data        Descrição                        Valor       Saldo
----------------------------------------------------------------------
02/05/2026  TRF DE MARIA PEREIRA SANTOS      +150,00 EUR  1.250,00 EUR
            IBAN Origem: PT50 0018 9988 7766 5544 3
05/05/2026  COMPRA MCDONALDS LISBOA           -12,45 EUR  1.237,55 EUR
08/05/2026  DEBITO DIRETO PINGO DOCE COIMBRA  -45,30 EUR  1.192,25 EUR
12/05/2026  PAGAMENTO SERVICOS WORTEN ONLINE  -89,90 EUR  1.102,35 EUR
15/05/2026  TRANSFERENCIA P/ RUI SOUSA        -200,00 EUR   902,35 EUR
            IBAN Destino: PT50 0033 4455 6677 8899 0
18/05/2026  REVOLUT CARD TOP-UP LONDON        -50,00 EUR   852,35 EUR
22/05/2026  COMPRA CONTINENTE MATOSINHOS      -78,20 EUR   774,15 EUR
25/05/2026  LEVANTA/ATM MULTIBANCO PORTO      -20,00 EUR   754,15 EUR
28/05/2026  SUB-TOTAL DE TARIFAS DEBITO ACTIVO -2,50 EUR   751,65 EUR
29/05/2026  REFEICAO TELEPIZZA ALVALADE       -18,90 EUR   732,75 EUR

Fim do Extrato.
Para dúvidas, contacte o seu gestor pelo email joao.pinto@cgd.pt ou telefone 912345678.`;

  const handleLoadSample = () => {
    setInputText(sampleText);
    setOutputText('');
    setStats(null);
    setCopied(false);
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
    setStats(null);
    setCopied(false);
  };

  const handleAnonymize = () => {
    if (!inputText.trim()) return;

    let tempText = inputText;
    let counts = {
      ibans: 0,
      nifs: 0,
      phones: 0,
      emails: 0,
      banks: 0,
      places: 0,
      names: 0
    };

    // 1. IBAN Scrubbing (PT50 + 21 digits, standard PT IBAN)
    // Matches PT followed by 2 digits and groups of numbers (supports spaces/hyphens)
    const ibanRegex = /\bPT\d{2}(?:[\s-]?\d{4}){5}[\s-]?\d{1,2}\b/gi;
    tempText = tempText.replace(ibanRegex, (match) => {
      counts.ibans++;
      return '[IBAN_ANONIMIZADO]';
    });

    // 2. Email Scrubbing
    const emailRegex = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g;
    tempText = tempText.replace(emailRegex, (match) => {
      counts.emails++;
      return '[EMAIL_ANONIMIZADO]';
    });

    // 3. Phone Number Scrubbing (PT 9-digit patterns starting with 9 or 2, plus optional +351)
    const phoneRegex = /(?:\+351|00351)?[\s-]?\b[29]\d{2}[\s-]?\d{3}[\s-]?\d{3}\b/g;
    tempText = tempText.replace(phoneRegex, (match) => {
      // Avoid matching dates (e.g. 2026-05-15) or standard values
      if (match.length === 4 || match.includes('/') || match.includes('.')) return match;
      counts.phones++;
      return '[TELEFONE_ANONIMIZADO]';
    });

    // 4. Bank Names
    const bankNames = [
      'Caixa Geral de Depósitos', 'Caixa Geral de Depositos', 'CGD',
      'ActivoBank', 'Activo Bank', 'Activo',
      'Millennium BCP', 'MillenniumBCP', 'BCP',
      'Novo Banco', 'NovoBanco', 'BPI',
      'Santander Totta', 'SantanderTotta', 'Santander',
      'Montepio Geral', 'Montepio', 'Revolut', 'N26',
      'Deutsche Bank', 'Abanca', 'Bankinter', 'Cofidis', 'Cetelem'
    ];
    // Create escape-safe regex for banks
    const bankRegex = new RegExp(`\\b(?:${bankNames.map(b => b.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')})\\b`, 'gi');
    tempText = tempText.replace(bankRegex, (match) => {
      counts.banks++;
      return '[BANCO_ANONIMIZADO]';
    });

    // 5. Establishments & Brands
    const establishments = [
      'Telepizza', 'McDonald\'s', 'McDonalds', 'Burger King', 'BurgerKing',
      'Pizza Hut', 'KFC', 'Subway', 'Starbucks', 'Pingo Doce', 'Continente',
      'Lidl', 'Auchan', 'Intermarche', 'Intermarché', 'Minipreco', 'Minipreço',
      'Mercadona', 'El Corte Ingles', 'El Corte Inglés', 'Zara', 'H&M',
      'Decathlon', 'Worten', 'Fnac', 'Sport Zone', 'SportZone', 'IKEA',
      'Leroy Merlin', 'Uber Eats', 'UberEats', 'Glovo', 'Bolt Food', 'BoltFood',
      'Multibanco'
    ];
    const establishmentRegex = new RegExp(`\\b(?:${establishments.map(e => e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')})\\b`, 'gi');
    tempText = tempText.replace(establishmentRegex, (match) => {
      counts.places++;
      return '[ESTABELECIMENTO_ANONIMIZADO]';
    });

    // 6. Name Prefixes (Structured patterns in statements)
    // Matches labels like Titular, Beneficiário followed by names
    const namePrefixes = /\b(?:Titular|Beneficiário|Beneficiario|Destinatário|Destinatario|Remetente|Nome|De|Para)[:\s-]+([A-Za-zÀ-ÖØ-öø-ÿ]{2,20}(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ]{1,20}){0,4})\b/gi;
    const transferPrefixes = /\b(?:Trf|Transferência|Transferencia)(?:\s+mb\s?way|\s+mbway|\s+sepa|\s+internacional|\s+imediata|\s+interbancária|\s+interbancaria)?\s+(?:de|para|p\/|a|da|do)[:\s-]+([A-Za-zÀ-ÖØ-öø-ÿ]{2,20}(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ]{1,20}){0,4})\b/gi;

    const cleanName = (match, p1) => {
      const trimmedName = p1.trim();
      const lowerName = trimmedName.toLowerCase();
      // Skip replacing if the name looks like a bank, brand or contains keywords
      if (
        lowerName.includes('banco') || 
        lowerName.includes('extrato') || 
        lowerName.includes('cartao') || 
        lowerName.includes('cartão') ||
        lowerName.includes('tarifa') || 
        lowerName.includes('juros') ||
        lowerName.includes('comissão') ||
        lowerName.includes('comissao') ||
        lowerName.includes('imposto') ||
        lowerName.includes('debito') ||
        lowerName.includes('credito')
      ) {
        return match;
      }
      counts.names++;
      return match.replace(p1, ' [NOME_ANONIMIZADO]');
    };

    tempText = tempText.replace(namePrefixes, cleanName);
    tempText = tempText.replace(transferPrefixes, cleanName);

    // 7. Common First & Surnames (Standalone scrubbing)
    const ptFirstNames = [
      'joao', 'joão', 'maria', 'jose', 'josé', 'manuel', 'antonio', 'antónio',
      'francisco', 'carlos', 'ana', 'pedro', 'luis', 'luís', 'rui', 'sofia',
      'claudia', 'cláudia', 'sara', 'paulo', 'miguel', 'tiago', 'david', 'jorge',
      'fernando', 'ricardo', 'daniel', 'joana', 'catarina', 'beatriz', 'ines',
      'inês', 'filipa', 'rita', 'mariana', 'patricia', 'patrícia', 'margarida',
      'diana', 'leonor', 'madalena', 'francisca', 'alice', 'carolina', 'goncalo',
      'gonçalo', 'duarte', 'tomas', 'tomás', 'rodrigo', 'martim', 'afonso',
      'santiago', 'gabriel', 'lucas', 'mateus', 'nuno', 'bruno', 'andre', 'andré',
      'sergio', 'sérgio', 'hugo', 'vitor', 'vítor', 'luisa', 'luísa', 'helena',
      'sandra', 'vera', 'carla', 'mario', 'mário', 'eduardo', 'filipe', 'marcos',
      'marco', 'rafael', 'samuel', 'nelson', 'telmo', 'celso', 'helder', 'hélder',
      'alexandre', 'vânia', 'vania', 'catia', 'cátia', 'liliana', 'tânia', 'tania',
      'isabel', 'teresa', 'cristina', 'sílvia', 'silvia', 'elisabete', 'marta',
      'raquel', 'barbara', 'bárbara', 'solange', 'telma'
    ];
    const ptSurnames = [
      'silva', 'santos', 'ferreira', 'pereira', 'oliveira', 'costa', 'rodrigues',
      'gomes', 'pinto', 'marques', 'sousa', 'almeida', 'nunes', 'ribeiro',
      'carvalho', 'teixeira', 'moreira', 'mendes', 'neves', 'correia', 'lopes',
      'cardoso', 'pinheiro', 'cruz', 'dias', 'esteves', 'martins', 'faria',
      'borges', 'rocha', 'vieira', 'nave', 'batista', 'baptista', 'machado',
      'fonseca', 'ramos', 'coelho', 'guerreiro', 'simoes', 'simões', 'tavares',
      'valente', 'henriques', 'gaspar', 'mota', 'cabral', 'barros', 'freitas',
      'saraiva', 'cunha'
    ];

    const firstNamesPattern = new RegExp(`\\b(?:${ptFirstNames.join('|')})\\b`, 'gi');
    const surnamesPattern = new RegExp(`\\b(?:${ptSurnames.join('|')})\\b`, 'gi');

    tempText = tempText.replace(firstNamesPattern, () => {
      counts.names++;
      return '[NOME_ANONIMIZADO]';
    });
    tempText = tempText.replace(surnamesPattern, () => {
      counts.names++;
      return '[NOME_ANONIMIZADO]';
    });

    // Collapse consecutive [NOME_ANONIMIZADO] placeholders into a single one
    tempText = tempText.replace(/\[NOME_ANONIMIZADO\](?:\s+\[NOME_ANONIMIZADO\])+/g, '[NOME_ANONIMIZADO]');

    // 8. NIF Scrubbing (Standalone 9-digit numbers starting with PT NIF digits, after phones)
    // Matches 9-digit numbers that match PT NIF start range and aren't parts of IBAN/Dates
    const nifRegex = /\b[1-35-9]\d{8}\b/g;
    tempText = tempText.replace(nifRegex, (match) => {
      // Don't replace if it is inside an anonymized tag
      counts.nifs++;
      return '[NIF_ANONIMIZADO]';
    });

    setOutputText(tempText);
    setStats(counts);
    setCopied(false);
  };

  const handleCopyToClipboard = async () => {
    if (!outputText) return;
    try {
      await navigator.clipboard.writeText(outputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Falha ao copiar texto: ', err);
    }
  };

  const hasStats = stats && Object.values(stats).some(val => val > 0);

  return (
    <div className="page-container">
      <div className="page-header">
        <span className="hero-tag">Módulo 1</span>
        <h1 className="page-title">Anonimizador de Extratos</h1>
        <p className="page-description">
          Remove informações de identificação pessoal (NIF, IBAN, nomes e marcas locais) do teu extrato bancário
          com segurança local total antes de partilhares os teus dados com qualquer Inteligência Artificial.
        </p>
      </div>

      <div className="alert-box alert-box-info">
        <span className="alert-box-icon">🔒</span>
        <div>
          <strong>Processamento 100% Local:</strong> Nenhum dado introduzido sai do teu computador. As regras de substituição 
          são executadas inteiramente no teu navegador através de expressões regulares em JavaScript.
        </div>
      </div>

      {copied && (
        <div className="alert-box">
          <span className="alert-box-icon">✅</span>
          <div>Texto copiado com sucesso! Pronto para colar no teu assistente de IA.</div>
        </div>
      )}

      <div className="glass-card">
        <div className="anonymizer-workspace">
          
          {/* Input Panel */}
          <div className="workspace-panel">
            <div className="panel-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Extrato Original (Texto)
            </div>
            <div className="textarea-container">
              <textarea
                className="custom-textarea"
                placeholder="Cola aqui os movimentos do teu extrato bancário (ex: CGD, ActivoBank, BCP, Revolut)..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <span className="char-counter">
                {inputText.length} caracteres
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button 
                className="btn btn-secondary" 
                onClick={handleLoadSample}
                style={{ flexGrow: 1 }}
              >
                📥 Carregar Exemplo
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={handleClear}
                style={{ flexShrink: 0 }}
              >
                Limpar
              </button>
            </div>
          </div>

          {/* Output Panel */}
          <div className="workspace-panel">
            <div className="panel-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Extrato Higienizado (Anonimizado)
            </div>
            <div className="textarea-container">
              <textarea
                className="custom-textarea output-area"
                placeholder="O extrato limpo aparecerá aqui após clicar em 'Anonimizar Dados'..."
                value={outputText}
                readOnly
              />
              <span className="char-counter">
                {outputText.length} caracteres
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button 
                className={`btn btn-primary ${!inputText.trim() ? 'btn-disabled' : ''}`}
                onClick={handleAnonymize}
                disabled={!inputText.trim()}
                style={{ flexGrow: 1 }}
              >
                ⚡ Anonimizar Dados
              </button>
              <button 
                className={`btn btn-success ${!outputText ? 'btn-disabled' : ''}`}
                onClick={handleCopyToClipboard}
                disabled={!outputText}
                style={{ flexGrow: 1 }}
              >
                📋 Copiar Resultado
              </button>
            </div>
          </div>

        </div>

        {/* Sanitization Stats Panel */}
        {hasStats && (
          <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
            <h4 className="panel-title" style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>
              🎯 Elementos Removidos com Sucesso:
            </h4>
            <div className="stats-badge-container">
              {stats.ibans > 0 && <span className="stats-badge">IBANs: <span>{stats.ibans}</span></span>}
              {stats.nifs > 0 && <span className="stats-badge">NIFs: <span>{stats.nifs}</span></span>}
              {stats.names > 0 && <span className="stats-badge">Nomes Próprios: <span>{stats.names}</span></span>}
              {stats.banks > 0 && <span className="stats-badge">Nomes de Bancos: <span>{stats.banks}</span></span>}
              {stats.places > 0 && <span className="stats-badge">Lojas/Marcas: <span>{stats.places}</span></span>}
              {stats.phones > 0 && <span className="stats-badge">Telefones: <span>{stats.phones}</span></span>}
              {stats.emails > 0 && <span className="stats-badge">Emails: <span>{stats.emails}</span></span>}
            </div>
          </div>
        )}
      </div>

      <div className="glass-card">
        <h3 className="section-title" style={{ fontSize: '1.2rem' }}>O que acontece a seguir?</h3>
        <p className="section-text" style={{ margin: 0 }}>
          Depois de copiares os dados limpos, podes enviá-los de forma totalmente segura para o ChatGPT, Claude ou Gemini. 
          Pede para categorizar as linhas, sugerir um orçamento baseado em percentagens (ex: regra 50/30/20) ou encontrar 
          padrões de gastos que possas cortar.
        </p>
      </div>
    </div>
  );
}
