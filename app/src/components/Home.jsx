import React from 'react';

export default function Home({ onNavigate }) {
  return (
    <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="page-header" style={{ textAlign: 'center', borderBottom: 'none', paddingBottom: 0, marginBottom: '2rem' }}>
        <span className="hero-tag" style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>Bem-vindo</span>
        <h1 className="page-title" style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>O Meu Co-Piloto Financeiro</h1>
        <p className="page-description" style={{ fontSize: '1rem', maxWidth: '550px', margin: '0 auto', lineHeight: '1.5' }}>
          Uma iniciativa pessoal para ligar Inteligência Artificial à gestão inteligente e segura das tuas finanças domésticas.
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
          <strong>Aviso de Responsabilidade (Utilização por Conta e Risco):</strong> O uso desta ferramenta local é feito por tua inteira conta e risco. Não nos responsabilizamos por falhas de privacidade. <strong>Verifica sempre</strong> se todos os dados sensíveis (especialmente nomes próprios específicos e locais) foram totalmente limpos antes de partilhares o texto com qualquer IA externa.
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
        
        <h2 className="section-title" style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Segurança local e privada</h2>
        
        <p className="section-text" style={{ fontSize: '0.95rem', maxWidth: '500px', marginBottom: '2rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
          Protege a tua privacidade ao anonimizar os teus extratos bancários localmente antes de os partilhares com qualquer Inteligência Artificial. Todos os processos ocorrem 100% no teu navegador de internet.
        </p>

        <button 
          className="btn btn-primary" 
          onClick={() => onNavigate('m1')}
          style={{ padding: '0.85rem 2rem', fontSize: '1rem', borderRadius: '12px' }}
        >
          Anonimizador de Extratos 🧹
        </button>
      </div>
    </div>
  );
}
