import React from 'react';

export default function Home({ onNavigate }) {
  return (
    <div className="page-container">
      <div className="page-header" style={{ textAlign: 'center', borderBottom: 'none', paddingBottom: 0, marginBottom: '3rem' }}>
        <span className="hero-tag" style={{ fontSize: '0.85rem' }}>Bem-vindo</span>
        <h1 className="page-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>O Meu Co-Piloto Financeiro</h1>
        <p className="page-description" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          Uma iniciativa pessoal para ligar Inteligência Artificial à gestão inteligente e segura das tuas finanças domésticas.
        </p>
      </div>

      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '3rem 2rem', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ 
          width: '70px', 
          height: '70px', 
          borderRadius: '20px', 
          background: 'var(--accent-gradient)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: 'white',
          boxShadow: '0 8px 24px rgba(21, 119, 155, 0.3)',
          marginBottom: '2rem'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        
        <h2 className="section-title" style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Segurança local e privada</h2>
        
        <p className="section-text" style={{ fontSize: '1.05rem', maxWidth: '550px', marginBottom: '2.5rem', lineHeight: '1.6' }}>
          Protege a tua privacidade ao higienizar os teus extratos bancários localmente antes de os partilhares com qualquer Inteligência Artificial. Todos os processos ocorrem 100% no teu navegador de internet.
        </p>

        <button 
          className="btn btn-primary" 
          onClick={() => onNavigate('m1')}
          style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '14px' }}
        >
          Anonimizador de Extratos 🧹
        </button>
      </div>
    </div>
  );
}
