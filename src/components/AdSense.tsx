import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSenseProps {
  client: string;
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: 'true' | 'false';
  style?: React.CSSProperties;
  className?: string;
}

/**
 * Reusable Google AdSense component for React.
 */
export default function AdSense({
  client,
  slot,
  format = 'auto',
  responsive = 'true',
  style,
  className = '',
}: AdSenseProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`} style={{ minHeight: '50px', margin: '8px 0', ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
