import { useLang } from '../i18n/LangContext.jsx';

export default function DirectorMessage() {
  const { t } = useLang();
  return (
    <section className="section" style={{ background: 'var(--paper-2)' }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <h2 className="section-title" style={{ marginBottom: 28, whiteSpace: 'pre-line' }}>
          {t.director.h2}
        </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            fontSize: 16,
            lineHeight: 1.85,
            color: 'var(--ink-2)',
            letterSpacing: '-0.01em',
          }}
        >
          <p style={{ margin: 0 }}>{t.director.p1}</p>
          <p style={{ margin: 0 }}>{t.director.p2}</p>
        </div>
      </div>
    </section>
  );
}
