import React from 'react';

const t = {
  pt: {
    welcome: 'Bem-vindo',
    title: 'O Meu Co-Piloto Financeiro',
    desc: 'Uma iniciativa pessoal para ligar Inteligência Artificial à gestão inteligente e segura das tuas finanças domésticas.',
    disclaimerTitle: 'Aviso de Responsabilidade (Utilização por Conta e Risco):',
    disclaimerDesc: 'O uso desta ferramenta local é feito por tua inteira conta e risco. Não nos responsabilizamos por falhas de privacidade. Verifica sempre se todos os dados sensíveis (especialmente nomes próprios específicos e locais) foram totalmente limpos antes de partilhares o texto com qualquer IA externa.',
    cardTitle: 'Segurança local e privada',
    cardDesc: 'Protege a tua privacidade ao anonimizar os teus extratos bancários localmente antes de os partilhares com qualquer Inteligência Artificial. Todos os processos ocorrem 100% no teu navegador de internet.',
    buttonText: 'Anonimizador de Extratos 🧹'
  },
  en: {
    welcome: 'Welcome',
    title: 'My Financial Co-Pilot',
    desc: 'A personal initiative to connect Artificial Intelligence with the smart and safe management of your household finances.',
    disclaimerTitle: 'Disclaimer (Use at Your Own Risk):',
    disclaimerDesc: 'The use of this local tool is done at your own risk. We are not liable for any privacy issues. Always verify that all sensitive data (especially specific names and locations) are fully masked in the output before sharing the text with any external AI.',
    cardTitle: 'Local and private security',
    cardDesc: 'Protect your privacy by anonymizing your bank statements locally before sharing them with any Artificial Intelligence. All processes run 100% in your internet browser.',
    buttonText: 'Statement Anonymizer 🧹'
  }
};

export default function Home({ lang = 'pt', onNavigate }) {
  const content = t[lang] || t.pt;

  return (
    <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="page-header" style={{ textAlign: 'center', borderBottom: 'none', paddingBottom: 0, marginBottom: '2rem' }}>
        <span className="hero-tag" style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>{content.welcome}</span>
        <h1 className="page-title" style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>{content.title}</h1>
        <p className="page-description" style={{ fontSize: '1rem', maxWidth: '550px', margin: '0 auto', lineHeight: '1.5' }}>
          {content.desc}
        </p>
      </div>

      {/* Warning Disclaimer Box */}
      <div className="alert-box" style={{ 
        background: 'rgba(245, 158, 11, 0.1)', 
        border: '1px solid rgba(245, 158, 11, 0.25)', 
        color: '#f59e0b', 
        marginBottom: '2rem',
        padding: '1.2rem',
        borderRadius: '16px',
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
        textAlign: 'left',
        fontSize: '0.9rem',
        lineHeight: '1.5'
      }}>
        <span style={{ fontSize: '1.3rem', lineHeight: '1' }}>⚠️</span>
        <div>
          <strong>{content.disclaimerTitle}</strong> {content.disclaimerDesc}
        </div>
      </div>

      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2.5rem 1.5rem', margin: '0 auto' }}>
        <div style={{ 
          width: '60px', 
          height: '60px', 
          borderRadius: '16px', 
          background: 'var(--accent-gradient)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: 'white',
          boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)',
          marginBottom: '1.5rem',
          fontSize: '1.6rem',
          fontWeight: '700'
        }}>
          €
        </div>
        
        <h2 className="section-title" style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{content.cardTitle}</h2>
        
        <p className="section-text" style={{ fontSize: '0.95rem', maxWidth: '500px', marginBottom: '2rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
          {content.cardDesc}
        </p>

        <button 
          className="btn btn-primary" 
          onClick={() => onNavigate('m1')}
          style={{ padding: '0.85rem 2rem', fontSize: '1rem', borderRadius: '12px' }}
        >
          {content.buttonText}
        </button>
      </div>
    </div>
  );
}
