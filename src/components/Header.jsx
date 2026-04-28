import { useState, useEffect } from 'react';

const NAV_ITEMS = ['진료안내', '의료진', '오시는 길', '상담후기'];

export default function Header({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeAnd = (fn) => () => {
    setMenuOpen(false);
    fn?.();
  };

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
          {NAV_ITEMS.map((l) => (
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
          className="btn btn-primary hide-mobile"
          style={{ padding: '10px 18px', fontSize: 14, borderRadius: 8, whiteSpace: 'nowrap' }}
          onClick={onBookClick}
        >
          AI 상담
        </button>
        <button
          className="hide-desktop"
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            background: 'none',
            border: 'none',
            padding: 8,
            cursor: 'pointer',
            color: 'var(--ink)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          className="hide-desktop"
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            top: scrolled ? 56 : 72,
            background: 'rgba(28,30,29,0.32)',
            zIndex: 49,
          }}
        />
      )}
      <nav
        className="hide-desktop"
        aria-hidden={!menuOpen}
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: '#fff',
          borderBottom: '1px solid var(--paper-3)',
          boxShadow: '0 12px 24px rgba(28,30,29,0.08)',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 200ms var(--ease-standard), transform 200ms var(--ease-standard)',
          zIndex: 50,
        }}
      >
        <div className="container" style={{ padding: '12px 20px 20px' }}>
          {NAV_ITEMS.map((l) => (
            <a
              key={l}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '14px 4px',
                fontSize: 16,
                fontWeight: 500,
                color: 'var(--ink)',
                letterSpacing: '-0.01em',
                borderBottom: '1px solid var(--paper-3)',
                cursor: 'pointer',
              }}
            >
              {l}
            </a>
          ))}
          <button
            className="btn btn-primary"
            style={{
              marginTop: 16,
              width: '100%',
              padding: '14px 18px',
              fontSize: 15,
              borderRadius: 10,
            }}
            onClick={closeAnd(onBookClick)}
          >
            AI 상담
          </button>
        </div>
      </nav>
    </header>
  );
}
