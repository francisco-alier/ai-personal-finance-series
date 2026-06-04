import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Anonymizer from './components/Anonymizer';

function App() {
  const [page, setPage] = useState('home');
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang');
    return saved || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLanguage = () => {
    setLang(prev => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <div className={`app-container ${theme}-theme`}>
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div>
          {/* Logo */}
          <div className="sidebar-logo">
            <div className="sidebar-logo-icon" style={{ fontSize: '1.4rem', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              €
            </div>
            <div className="sidebar-logo-details">
              <span className="sidebar-logo-text">Co-Piloto</span>
              <span className="sidebar-logo-sub">Financeiro</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="sidebar-nav">
            <button 
              className={`nav-item ${page === 'home' ? 'active' : ''}`}
              onClick={() => setPage('home')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              {lang === 'pt' ? 'Início' : 'Home'}
            </button>
            <button 
              className={`nav-item ${page === 'm1' ? 'active' : ''}`}
              onClick={() => setPage('m1')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              {lang === 'pt' ? 'Anonimizador (Artigo 1)' : 'Anonymizer (Article 1)'}
            </button>
          </nav>
        </div>

        {/* Footer actions */}
        <div className="sidebar-footer">
          {/* Language Toggle Button */}
          <button className="theme-toggle-btn" onClick={toggleLanguage} style={{ marginBottom: '0.25rem' }}>
            <span className="theme-toggle-icon">🌐</span>
            <span>{lang === 'pt' ? 'English' : 'Português'}</span>
          </button>

          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === 'dark' ? (
              <>
                <span className="theme-toggle-icon">☀️</span>
                <span>{lang === 'pt' ? 'Modo Claro' : 'Light Mode'}</span>
              </>
            ) : (
              <>
                <span className="theme-toggle-icon">🌙</span>
                <span>{lang === 'pt' ? 'Modo Escuro' : 'Dark Mode'}</span>
              </>
            )}
          </button>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'center', fontWeight: '500' }}>
            v1.0.0 • Local Only
          </div>
        </div>
      </aside>

      {/* Main Dashboard Content */}
      <main className="main-content">
        {page === 'home' ? (
          <Home lang={lang} onNavigate={setPage} />
        ) : (
          <Anonymizer lang={lang} />
        )}
      </main>
    </div>
  );
}

export default App;
