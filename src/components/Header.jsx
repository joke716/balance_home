import { useState, useEffect } from 'react';
import Icon from './Icon.jsx';

export default function Header({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(250,247,242,0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--paper-3)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? 56 : 72,
          transition: 'height 200ms var(--ease-standard)',
        }}
      >
        <a
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: '-0.03em',
            color: 'var(--ink)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              border: '2px solid var(--primary)',
              borderRadius: '50%',
            }}
          />
          밸런스치과병원
        </a>
        <nav style={{ display: 'flex', gap: 28 }} className="hide-mobile">
          {['진료안내', '의료진', '오시는 길', '상담후기'].map((l) => (
            <a
              key={l}
              style={{
                color: 'var(--ink-2)',
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '-0.01em',
                cursor: 'pointer',
              }}
            >
              {l}
            </a>
          ))}
        </nav>
        <button
          className="btn btn-primary"
          style={{ padding: '10px 18px', fontSize: 14, borderRadius: 8, whiteSpace: 'nowrap' }}
          onClick={onBookClick}
        >
          AI 상담
        </button>
      </div>
    </header>
  );
}
