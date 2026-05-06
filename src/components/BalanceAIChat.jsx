import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LangContext.jsx';

const CHAT_URL = 'https://balanceai.asuscomm.com/';

export default function BalanceAIChat() {
  const { t } = useLang();
  const frameWrapRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    const node = frameWrapRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') { setShouldLoad(true); return; }
    const io = new IntersectionObserver(
      (entries) => { if (entries.some((e) => e.isIntersecting)) { setShouldLoad(true); io.disconnect(); } },
      { rootMargin: '300px 0px' }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [shouldLoad]);

  return (
    <section id="balance-ai" className="section" style={{ background: 'var(--paper)' }}>
      <div className="container" style={{ maxWidth: 1240 }}>
        <div className="section-label">{t.balanceai.sectionLabel}</div>
        <h2 className="section-title">{t.balanceai.title}</h2>
        <p style={{ fontSize: 15, color: 'var(--ink-3)', maxWidth: 672, margin: '-16px 0 32px', letterSpacing: '-0.01em', lineHeight: 1.7 }}>
          {t.balanceai.desc}
        </p>
        <div
          ref={frameWrapRef}
          style={{ background: '#fff', borderRadius: 14, border: '1px solid var(--paper-3)', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', position: 'relative', height: 830 }}
        >
          {shouldLoad ? (
            <iframe
              src={CHAT_URL}
              title="BalanceAI 챗봇"
              allow="clipboard-write; microphone"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: '100%', height: '100%', border: 'none', display: 'block', background: '#fff' }}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-3)', fontSize: 14 }}>
              {t.balanceai.loading}
            </div>
          )}
        </div>
        <div style={{ marginTop: 12, fontSize: 13, color: 'var(--ink-3)', textAlign: 'center' }}>
          {t.balanceai.notVisible}{' '}
          <a href={CHAT_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
            {t.balanceai.openNew}
          </a>
        </div>
      </div>
    </section>
  );
}
