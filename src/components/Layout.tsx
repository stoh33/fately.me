import { useState, type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showCookieBanner, setShowCookieBanner] = useState(() => {
    try {
      return !localStorage.getItem('cookie-consent');
    } catch {
      return false;
    }
  });

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowCookieBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowCookieBanner(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />

      {showCookieBanner && (
        <div className="cookie-banner fixed bottom-0 left-0 right-0 bg-white border-t border-amber-200 p-4 shadow-lg z-50">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-700">
              본 사이트는 광고 제공을 위해 Google AdSense 쿠키를 사용합니다. 
              상세 내용은 <Link to="/privacy" className="underline">개인정보처리방침</Link>을 확인하세요.
            </p>
            <div className="flex gap-2">
              <button 
                onClick={acceptCookies}
                className="px-4 py-2 bg-amber-800 text-white rounded text-sm font-bold hover:bg-amber-900 transition-colors"
              >
                동의
              </button>
              <button 
                onClick={declineCookies}
                className="px-4 py-2 border border-gray-300 text-gray-600 rounded text-sm hover:bg-gray-50 transition-colors"
              >
                거부
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
