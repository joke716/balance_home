import { useState, useEffect } from 'react';
import { useLang, LANG_OPTIONS } from '../i18n/LangContext.jsx';

const NAV_IDS = [
  { key: 'treatments', id: 'treatments' },
  { key: 'doctors', id: 'doctors' },
  { key: 'philosophy', id: 'philosophy' },
  { key: 'faq', id: 'faq' },
  { key: 'location', id: 'location' },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Header({ onBookClick, onConsultClick }) {
  const { t, lang, setLang } = useLang();
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

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const closeAnd = (fn) => () => {
    setMenuOpen(false);
    fn?.();
  };

  return (
    <>
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
          <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }} className="hide-mobile">
            {NAV_IDS.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(it.id);
                }}
                style={{
                  color: 'var(--ink-2)',
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {t.nav[it.key]}
              </a>
            ))}
            <button
              className="btn btn-primary"
              style={{ padding: '8px 16px', fontSize: 13, borderRadius: 8, whiteSpace: 'nowrap' }}
              onClick={onConsultClick}
            >
              {t.nav.consult}
            </button>
            {/* 언어 전환 */}
            <div style={{ display: 'flex', gap: 2 }}>
              {LANG_OPTIONS.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => setLang(opt.code)}
                  style={{
                    padding: '4px 8px',
                    fontSize: 12,
                    fontWeight: lang === opt.code ? 700 : 400,
                    border: 'none',
                    borderRadius: 6,
                    cursor: 'pointer',
                    background: lang === opt.code ? 'var(--primary-softer)' : 'transparent',
                    color: lang === opt.code ? 'var(--primary)' : 'var(--ink-4)',
                    transition: 'all 150ms ease',
                    letterSpacing: '0.01em',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </nav>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="hide-desktop"
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(28,30,29,0.45)',
            zIndex: 60,
          }}
        />
      )}

      <aside
        className="hide-desktop"
        {...(!menuOpen ? { inert: '' } : {})}
        role="dialog"
        aria-modal="true"
        aria-label="내비게이션 메뉴"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(320px, 86vw)',
          background: '#ffffff',
          boxShadow: '-12px 0 32px rgba(28,30,29,0.16)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 240ms var(--ease-emphasis)',
          zIndex: 70,
          display: 'flex',
          flexDirection: 'column',
          visibility: menuOpen ? 'visible' : 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            borderBottom: '1px solid var(--paper-3)',
            minHeight: 56,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                border: '2px solid var(--primary)',
                borderRadius: '50%',
              }}
            />
            밸런스치과병원
          </span>
          <button
            aria-label="메뉴 닫기"
            onClick={() => setMenuOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              padding: 6,
              cursor: 'pointer',
              color: 'var(--ink)',
              display: 'flex',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
          {NAV_IDS.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                setTimeout(() => scrollToId(it.id), 260);
              }}
              style={{
                display: 'block',
                padding: '16px 24px',
                fontSize: 16,
                fontWeight: 500,
                color: 'var(--ink)',
                letterSpacing: '-0.01em',
                cursor: 'pointer',
                borderBottom: '1px solid var(--paper-2)',
                textDecoration: 'none',
              }}
            >
              {t.nav[it.key]}
            </a>
          ))}
          {/* 모바일 언어 전환 */}
          <div style={{ display: 'flex', gap: 6, padding: '16px 24px', borderBottom: '1px solid var(--paper-2)' }}>
            {LANG_OPTIONS.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLang(opt.code)}
                style={{
                  padding: '6px 12px',
                  fontSize: 13,
                  fontWeight: lang === opt.code ? 700 : 400,
                  border: '1px solid',
                  borderColor: lang === opt.code ? 'var(--primary)' : 'var(--paper-3)',
                  borderRadius: 8,
                  cursor: 'pointer',
                  background: lang === opt.code ? 'var(--primary-softer)' : '#fff',
                  color: lang === opt.code ? 'var(--primary)' : 'var(--ink-3)',
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </nav>

        <div style={{ padding: 20, borderTop: '1px solid var(--paper-3)' }}>
          <button
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '14px 18px',
              fontSize: 15,
              borderRadius: 10,
            }}
            onClick={closeAnd(onBookClick)}
          >
            {t.nav.consult}
          </button>
        </div>
      </aside>
    </>
  );
}
