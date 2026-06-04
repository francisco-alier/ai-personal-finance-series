import React from 'react';

export default function Home({ onNavigate }) {
  const roadmapItems = [
    {
      month: 'Mês 1',
      title: 'Ananimizador de Extratos (Scrubber de Dados)',
      desc: 'Limpador inteligente local para remover dados sensíveis como NIF, IBAN, nomes e detalhes de transações antes de enviar para IAs.',
      status: 'Ativo',
      isActive: true,
      navTarget: 'm1'
    },
    {
      month: 'Mês 2',
      title: 'Parsers Inteligentes de PDF Bancário',
      desc: 'Extrator inteligente focado em converter PDFs complexos dos principais bancos portugueses (CGD, Activo, BPI, etc.) em JSON estruturado.',
      status: 'Brevemente',
      isActive: false
    },
    {
      month: 'Mês 3',
      title: 'Categorizador Automático com LLMs Locais',
      desc: 'Processamento e categorização de despesas em categorias personalizadas utilizando modelos de IA leves que correm no teu computador.',
      status: 'Brevemente',
      isActive: false
    },
    {
      month: 'Mês 4',
      title: 'Agente de Insights & Orçamentos',
      desc: 'Assistente pessoal dotado de memória financeira para responder a perguntas complexas sobre as tuas despesas e poupanças históricas.',
      status: 'Brevemente',
      isActive: false
    },
    {
      month: 'Mês 5',
      title: 'Deteção de Anomalias & Subscrições',
      desc: 'Análise proativa de transações duplicadas, aumentos de tarifas de serviços e identificação automática de assinaturas ativas.',
      status: 'Brevemente',
      isActive: false
    },
    {
      month: 'Mês 6',
      title: 'Dashboard de Investimentos Assistido',
      desc: 'Agregação inteligente de múltiplos ativos, ETFs e depósitos com recomendações macroeconómicas personalizadas pela IA.',
      status: 'Brevemente',
      isActive: false
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <span className="hero-tag">Apresentação</span>
        <h1 className="page-title">O Meu Co-Piloto Financeiro</h1>
        <p className="page-description">
          Uma jornada de 6 meses para construir um ecossistema inteligente de finanças pessoais, 
          aliando a privacidade dos teus dados locais ao poder das grandes Inteligências Artificiais.
        </p>
      </div>

      <div className="glass-card">
        <h2 className="section-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sidebar-logo-icon-svg" style={{ color: 'var(--accent-color)' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Segurança e IA: O Dilema de Privacidade
        </h2>
        <p className="section-text">
          As ferramentas de IA generativa (ChatGPT, Claude, Gemini) são extraordinárias para analisar despesas, criar orçamentos e sugerir estratégias de poupança. No entanto, partilhar extratos bancários brutos expõe informações ultra-sensíveis: <strong>Nomes, IBANs, NIFs e locais de consumo habitual</strong>.
        </p>
        <p className="section-text">
          O projeto <strong>Co-Piloto Financeiro</strong> demonstra que não precisas de escolher entre inteligência e privacidade. Ao higienizar os teus dados localmente no teu browser (Mês 1) antes do processamento, podes usufruir da IA sem qualquer fuga de privacidade.
        </p>

        <h3 className="section-title" style={{ fontSize: '1.25rem', marginTop: '1.5rem' }}>Como começar?</h3>
        <div className="instruction-list">
          <div className="instruction-step">
            <span className="step-number">1</span>
            <div className="step-content">
              <div className="step-title">Higieniza os teus Extratos</div>
              <p className="roadmap-desc">Clica em "Ananimizador (M1)" no menu lateral, cola as transações copiadas do teu banco e executa o processamento local.</p>
            </div>
          </div>
          <div className="instruction-step">
            <span className="step-number">2</span>
            <div className="step-content">
              <div className="step-title">Copia os Dados Limpos</div>
              <p className="roadmap-desc">Usa o botão de cópia rápida para obter os dados já anonimizados (com termos genéricos no lugar de dados sensíveis).</p>
            </div>
          </div>
          <div className="instruction-step">
            <span className="step-number">3</span>
            <div className="step-content">
              <div className="step-title">Submete à Inteligência Artificial</div>
              <p className="roadmap-desc">Envia o texto higienizado para o ChatGPT/Claude com um prompt do género: "Analisa estas despesas anonimizadas e resume os maiores gastos."</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2.5rem' }}>
        <h2 className="section-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-color)' }}><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          Roteiro de Desenvolvimento (6 Meses)
        </h2>
        <p className="page-description" style={{ marginBottom: '1.5rem' }}>
          Descobre os módulos planeados para este projeto. O primeiro módulo já está disponível para testes imediatos.
        </p>
        
        <div className="roadmap-grid">
          {roadmapItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`roadmap-card ${item.isActive ? 'active' : 'future'}`}
              style={{ cursor: item.isActive ? 'pointer' : 'default' }}
              onClick={() => item.isActive && onNavigate(item.navTarget)}
            >
              <div>
                <div className="roadmap-top">
                  <span className="roadmap-month">{item.month}</span>
                  <span className="roadmap-badge">{item.status}</span>
                </div>
                <h3 className="roadmap-title">{item.title}</h3>
                <p className="roadmap-desc">{item.desc}</p>
              </div>
              {item.isActive && (
                <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent-color)', fontSize: '0.85rem', fontWeight: '600' }}>
                  Aceder à ferramenta 
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
