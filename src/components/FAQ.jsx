import { useState } from 'react';
import Icon from './Icon.jsx';
import { useLang } from '../i18n/LangContext.jsx';

const CATEGORY_ICONS = ['faq-tooth', 'faq-smile', 'faq-sparkle', 'faq-moon', 'faq-shield', 'faq-info'];

export default function FAQ() {
  const { t } = useLang();
  const categories = t.faq.categories;
  const [activeCat, setActiveCat] = useState(0);
  const [open, setOpen] = useState(0);

  const items = categories[activeCat].items;

  const handleCatChange = (idx) => {
    setActiveCat(idx);
    setOpen(0);
  };

  return (
    <section id="faq" className="section" style={{ background: 'var(--paper)' }}>
      <style>{`
        .faq-wrap { display: flex; gap: 24px; align-items: flex-start; }
        .faq-sidebar { flex: 0 0 160px; display: flex; flex-direction: column; gap: 4px; position: sticky; top: 96px; }
        .faq-cat-btn { width: 100%; background: none; border: none; border-radius: 10px; padding: 11px 14px; text-align: left; cursor: pointer; display: flex; align-items: center; gap: 9px; font-family: inherit; font-size: 14px; font-weight: 500; letter-spacing: -0.01em; color: var(--ink-3); transition: background 150ms ease, color 150ms ease; }
        .faq-cat-btn:hover { background: var(--paper-2); color: var(--ink); }
        .faq-cat-btn.active { background: var(--primary-softer); color: var(--primary); font-weight: 700; }
        .faq-cat-icon { display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 16px; height: 16px; }
        .faq-content { flex: 1; min-width: 0; }
        .faq-panel { background: #fff; border-radius: 14px; border: 1px solid var(--paper-3); overflow: hidden; }
        .faq-item-enter { animation: faqFadeIn 180ms ease both; }
        @keyframes faqFadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 700px) {
          .faq-wrap { flex-direction: column; gap: 16px; }
          .faq-sidebar { flex: none; flex-direction: row; width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; gap: 6px; position: static; padding-bottom: 4px; }
          .faq-sidebar::-webkit-scrollbar { display: none; }
          .faq-cat-btn { flex: 0 0 auto; width: auto; white-space: nowrap; padding: 8px 14px; border-radius: 20px; font-size: 13px; border: 1px solid var(--paper-3); }
          .faq-cat-btn.active { border-color: transparent; }
          .faq-content { width: 100%; }
        }
      `}</style>

      <div className="container" style={{ maxWidth: 1240 }}>
        <div className="section-label">{t.faq.sectionLabel}</div>
        <h2 className="section-title">{t.faq.title}</h2>
        <p style={{ fontSize: 15, color: 'var(--ink-3)', maxWidth: 672, margin: '-16px 0 32px', letterSpacing: '-0.01em', lineHeight: 1.7 }}>
          {t.faq.desc}
        </p>

        <div className="faq-wrap">
          <nav className="faq-sidebar" aria-label="FAQ">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`faq-cat-btn${activeCat === i ? ' active' : ''}`}
                onClick={() => handleCatChange(i)}
              >
                <span className="faq-cat-icon"><Icon name={CATEGORY_ICONS[i]} size={16} /></span>
                {cat.label}
              </button>
            ))}
          </nav>

          <div className="faq-content">
            <div className="faq-panel" key={activeCat}>
              {items.map((it, i) => (
                <div
                  key={i}
                  className="faq-item-enter"
                  style={{ borderBottom: i < items.length - 1 ? '1px solid var(--paper-3)' : 'none', animationDelay: `${i * 30}ms` }}
                >
                  <button
                    onClick={() => setOpen(open === i ? -1 : i)}
                    style={{ width: '100%', background: 'none', border: 'none', padding: '18px 22px', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 600, color: open === i ? 'var(--primary)' : 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1.55 }}>
                      <span style={{ display: 'inline-block', marginRight: 8, fontSize: 12, fontWeight: 700, color: open === i ? 'var(--primary)' : 'var(--ink-4)' }}>Q{i + 1}.</span>
                      {it.q}
                    </span>
                    <span style={{ color: open === i ? 'var(--primary)' : 'var(--ink-3)', transition: 'transform 200ms var(--ease-standard)', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', fontSize: 20, lineHeight: 1, flexShrink: 0 }}>+</span>
                  </button>
                  {open === i && (
                    <div style={{ padding: '0 22px 20px 22px', fontSize: 13, lineHeight: 1.8, color: 'var(--ink-2)', letterSpacing: '-0.01em', borderLeft: '3px solid var(--primary)', marginLeft: 22, marginRight: 22, marginBottom: 4, paddingLeft: 14, paddingTop: 0 }}>
                      {it.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
