import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { sajuCharacters, mbtiCharacters } from '../data/characterData';
import '../styles/saju-page.css'; // sharing custom popup styles

interface CharacterCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  dayMasterStem: string;
  estimatedMBTI: string;
  clientName: string;
  lang?: 'ko' | 'en';
}

export default function CharacterCardModal({
  isOpen,
  onClose,
  dayMasterStem,
  estimatedMBTI,
  clientName,
  lang = 'ko',
}: CharacterCardModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen) return null;

  // Retrieve Saju character data safely
  const stemKey = dayMasterStem || '갑';
  const sajuData = sajuCharacters[stemKey] || sajuCharacters['갑'];

  // Retrieve MBTI character data safely
  const mbtiKey = (estimatedMBTI || 'INTJ').toUpperCase();
  const mbtiData = mbtiCharacters[mbtiKey] || mbtiCharacters['INTJ'];

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setIsSaving(true);

    try {
      // Small delay to ensure styles render nicely
      await new Promise((resolve) => setTimeout(resolve, 100));

      const canvas = await html2canvas(cardRef.current, {
        scale: 2, // high quality
        useCORS: true,
        logging: false,
        backgroundColor: '#0f0c1b', // dark mystical theme
      });

      const image = canvas.toDataURL('image/png');
      const blob = await (await fetch(image)).blob();

      // Attempt to use file picker API for premium saving experience
      try {
        if ('showSaveFilePicker' in window) {
          const handle = await (window as unknown as Record<string, (opts: unknown) => Promise<FileSystemFileHandle>>).showSaveFilePicker({
            suggestedName: `fately-character-${clientName || 'result'}.png`,
            types: [{
              description: 'PNG Image',
              accept: { 'image/png': ['.png'] },
            }],
          });
          const writable = await handle.createWritable();
          await writable.write(blob);
          await writable.close();
          return;
        }
      } catch (e: unknown) {
        if (e && typeof e === 'object' && 'name' in e && (e as { name: string }).name === 'AbortError') return;
        console.warn('File system picker failed, using backup anchor link...', e);
      }

      // Backup anchor download
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `fately-character-${clientName || 'result'}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    } catch (err) {
      console.error('Save card failed:', err);
      alert(lang === 'ko' ? '이미지 저장에 실패했습니다.' : 'Failed to save card image.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="char-modal-overlay" onClick={onClose}>
      <div 
        className="char-modal-container" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className="char-modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {/* Integrated Card to Capture */}
        <div className="char-integrated-card" ref={cardRef}>
          {/* Spiritual Card Glow/Decoration */}
          <div className="card-bg-decoration"></div>
          
          <header className="card-header">
            <span className="card-brand">FATELY AI</span>
            <h2 className="card-main-title">
              {lang === 'ko' 
                ? `${clientName || '의뢰인'}님의 성격 & MBTI 통합 분석` 
                : `${clientName || 'Client'}'s Saju & MBTI Map`}
            </h2>
            <div className="card-header-divider"></div>
          </header>

          <div className="card-columns">
            {/* Left: Saju Day Master */}
            <div className="card-col left-col">
              <div className="col-header-label">{lang === 'ko' ? '사주 성격 (일간)' : 'Saju Day Master'}</div>
              <div className="char-visual-container" style={{ borderColor: sajuData.themeColor }}>
                {sajuData.icon}
              </div>
              <h3 className="char-name" style={{ color: sajuData.themeColor }}>
                {sajuData.name}
              </h3>
              <h4 className="char-subname">{sajuData.subName}</h4>
              
              <div className="chip-list">
                {sajuData.keywords.map((kw) => (
                  <span key={kw} className="char-chip" style={{ backgroundColor: `${sajuData.themeColor}1a`, color: sajuData.themeColor }}>
                    #{kw}
                  </span>
                ))}
              </div>
              
              <p className="char-desc">{sajuData.description}</p>
            </div>

            {/* Column Divider */}
            <div className="card-col-divider"></div>

            {/* Right: MBTI Animal */}
            <div className="card-col right-col">
              <div className="col-header-label">{lang === 'ko' ? '종합 분석 MBTI' : 'Estimated MBTI'}</div>
              <div className="char-visual-container" style={{ borderColor: mbtiData.themeColor }}>
                {mbtiData.icon}
              </div>
              <h3 className="char-name" style={{ color: mbtiData.themeColor }}>
                {mbtiData.name}
              </h3>
              <h4 className="char-subname">{mbtiData.subName}</h4>
              
              <div className="chip-list">
                {mbtiData.keywords.map((kw) => (
                  <span key={kw} className="char-chip" style={{ backgroundColor: `${mbtiData.themeColor}1a`, color: mbtiData.themeColor }}>
                    #{kw}
                  </span>
                ))}
              </div>
              
              <p className="char-desc">{mbtiData.description}</p>
            </div>
          </div>

          <footer className="card-footer">
            <p className="card-footer-info">
              {lang === 'ko' 
                ? '명리학의 오행 기운과 혈액형·별자리를 동적 연산하여 추정한 분석 카드입니다.' 
                : 'Calculated dynamically through Saju elements, blood type and zodiac traits.'}
            </p>
            <span className="card-watermark">fately.me</span>
          </footer>
        </div>

        {/* Modal Buttons */}
        <div className="char-modal-actions">
          <button 
            onClick={handleDownload} 
            disabled={isSaving} 
            className={`btn-save-card ${isSaving ? 'saving' : ''}`}
          >
            {isSaving 
              ? (lang === 'ko' ? '📸 카드 저장 중...' : '📸 Saving Card...') 
              : (lang === 'ko' ? '🖼️ 통합 카드 이미지로 저장' : '🖼️ Save Card as Image')}
          </button>
          <button onClick={onClose} className="btn-close-modal">
            {lang === 'ko' ? '닫기' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
