import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/saju" className="site-logo">Fately AI</Link>
        <nav className="header-nav">
          <Link to="/saju">홈</Link>
          <Link to="/about">서비스 소개</Link>
          <Link to="/privacy">개인정보처리방침</Link>
          <Link to="/terms">이용약관</Link>
        </nav>
      </div>
    </header>
  );
}
