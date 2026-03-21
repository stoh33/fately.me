import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="site-logo">Fately AI</Link>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기/닫기"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={`header-nav${menuOpen ? ' open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>홈</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>서비스 소개</Link>
          <Link to="/privacy" onClick={() => setMenuOpen(false)}>개인정보처리방침</Link>
          <Link to="/terms" onClick={() => setMenuOpen(false)}>이용약관</Link>
        </nav>
      </div>
    </header>
  );
}
