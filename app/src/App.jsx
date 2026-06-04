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

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`app-container ${theme}-theme`}>
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div>
          {/* Logo */}
          <div className="sidebar-logo">
            <div className="sidebar-logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
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
              Início
            </button>
            <button 
              className={`nav-item ${page === 'm1' ? 'active' : ''}`}
              onClick={() => setPage('m1')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Anonimizador (M1)
            </button>
          </nav>
        </div>

        {/* Footer actions */}
        <div className="sidebar-footer">
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === 'dark' ? (
              <>
                <span className="theme-toggle-icon">☀️</span>
                <span>Modo Claro</span>
              </>
            ) : (
              <>
                <span className="theme-toggle-icon">🌙</span>
                <span>Modo Escuro</span>
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
          <Home onNavigate={setPage} />
        ) : (
          <Anonymizer />
        )}
      </main>
    </div>
  );
}

export default App;
