import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info text-center">
          <p className="font-bold mb-2">© 2025 Fately AI</p>
          <p className="text-sm mb-2">본 서비스는 오락 목적으로 제공됩니다. 전문 상담을 대체하지 않습니다.</p>
          <p className="text-sm">문의: jyleem78@naver.com</p>
        </div>
        <nav className="footer-nav">
          <Link to="/about">서비스 소개</Link>
          <Link to="/privacy">개인정보처리방침</Link>
          <Link to="/terms">이용약관</Link>
        </nav>
      </div>
    </footer>
  );
}
