import { useLang } from '../i18n/LangContext.jsx';

export default function ClinicPhilosophy() {
  const { t } = useLang();
  const { sectionLabel, title, desc, pillars, tags } = t.philosophy;

  return (
    <section id="philosophy" className="section" style={{ background: 'var(--paper-2)' }}>
      <div className="container" style={{ maxWidth: 1240 }}>
        <div className="section-label">{sectionLabel}</div>
        <h2 className="section-title">{title}</h2>
        <p
          style={{
            fontSize: 15,
            color: 'var(--ink-3)',
            maxWidth: 672,
            margin: '-16px 0 48px',
            letterSpacing: '-0.01em',
            lineHeight: 1.7,
          }}
        >
          {desc}
        </p>

        {/* 3개 기둥 카드 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 16,
            marginBottom: 48,
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.number}
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: '28px 24px 32px',
                boxShadow: '0 2px 6px rgba(28,30,29,0.05), 0 1px 2px rgba(28,30,29,0.04)',
                transition: 'transform 220ms var(--ease-standard), box-shadow 220ms var(--ease-standard)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(28,30,29,0.08), 0 2px 6px rgba(28,30,29,0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(28,30,29,0.05), 0 1px 2px rgba(28,30,29,0.04)';
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 12,
                  fontWeight: 700,
                  color: 'var(--primary)',
                  letterSpacing: '0.08em',
                  marginBottom: 14,
                }}
              >
                {p.number}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: 1.5,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                  marginBottom: 10,
                }}
              >
                {p.title}
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--ink-3)', letterSpacing: '-0.01em', margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 하단 태그 */}
        <div
          style={{
            paddingTop: 32,
            borderTop: '1px solid var(--paper-3)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px 28px',
            alignItems: 'center',
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 13,
                color: 'var(--ink-3)',
                letterSpacing: '-0.01em',
                display: 'flex',
                alignItems: 'center',
                gap: 7,
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  flexShrink: 0,
                }}
              />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
