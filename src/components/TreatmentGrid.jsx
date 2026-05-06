import { useRef } from 'react';
import Icon from './Icon.jsx';
import { useLang } from '../i18n/LangContext.jsx';

function TreatmentCard({ tag, title, desc, image, viewMore, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: '0 0 280px',
        scrollSnapAlign: 'start',
        background: '#fff',
        borderRadius: 16,
        padding: 24,
        border: 'none',
        textAlign: 'left',
        boxShadow: '0 2px 6px rgba(28,30,29,0.05), 0 1px 2px rgba(28,30,29,0.04)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        cursor: 'pointer',
        transition: 'box-shadow 220ms var(--ease-standard), transform 220ms var(--ease-standard)',
        fontFamily: 'inherit',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 10px 28px rgba(28,30,29,0.08), 0 2px 6px rgba(28,30,29,0.04)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 6px rgba(28,30,29,0.05), 0 1px 2px rgba(28,30,29,0.04)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div
        style={{
          aspectRatio: '4/5',
          borderRadius: 10,
          backgroundColor: '#EDE8DD',
          backgroundImage: image ? `url(${image})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: 4,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(28,30,29,0) 55%, rgba(28,30,29,0.25) 100%)',
          }}
        />
      </div>
      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        {tag}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 21,
          lineHeight: 1.4,
          letterSpacing: '-0.02em',
          color: 'var(--ink)',
          minHeight: '2.8em',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          overflow: 'hidden',
          whiteSpace: 'pre-line',
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 14,
          lineHeight: 1.7,
          color: 'var(--ink-3)',
          letterSpacing: '-0.01em',
          minHeight: '3.4em',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          overflow: 'hidden',
        }}
      >
        {desc}
      </div>
      <div
        style={{
          marginTop: 'auto',
          fontSize: 13,
          color: 'var(--primary)',
          fontWeight: 600,
          letterSpacing: '-0.01em',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        {viewMore} <span aria-hidden="true">→</span>
      </div>
    </button>
  );
}

const IMAGES = [
  '/assets/treatment-sedation.png',
  '/assets/treatment-implant.png',
  '/assets/treatment-ortho.png',
  '/assets/treatment-laminate.png',
  '/assets/treatment-oneday.png',
  '/assets/tmj-treatment.png',
];

export default function TreatmentGrid({ onSelect }) {
  const { t } = useLang();
  const scrollRef = useRef(null);
  const scrollBy = (delta) => {
    const el = scrollRef.current;
    if (el) el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section id="treatments" className="section" style={{ background: 'var(--paper)' }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div>
            <div className="section-label">{t.treatments.sectionLabel}</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>{t.treatments.title}</h2>
          </div>
        </div>
        <p
          style={{
            fontSize: 15,
            color: 'var(--ink-3)',
            maxWidth: 672,
            margin: '-16px 0 32px',
            letterSpacing: '-0.01em',
            lineHeight: 1.7,
          }}
        >
          {t.treatments.desc}
        </p>
      </div>
      <div
        ref={scrollRef}
        className="treatment-scroll"
        style={{
          display: 'flex',
          gap: 16,
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          scrollPadding: '0 20px',
          padding: '4px 20px 24px',
          margin: '0 auto',
          maxWidth: 1240,
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {t.treatmentItems.map((item, i) => (
          <TreatmentCard
            key={i}
            tag={item.tag}
            title={item.title}
            desc={item.desc}
            image={IMAGES[i]}
            viewMore={t.treatments.viewMore}
            onClick={() => onSelect({ ...item, image: IMAGES[i] })}
          />
        ))}
        <div style={{ flex: '0 0 4px' }} aria-hidden="true" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 20 }}>
        <button
          aria-label={t.treatments.prev}
          onClick={() => scrollBy(-340)}
          style={{
            width: 36, height: 36, borderRadius: '50%', border: 'none',
            background: 'var(--ink)', cursor: 'pointer', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 180ms ease',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--primary)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
        >
          <Icon name="chevron-left" size={20} />
        </button>
        <button
          aria-label={t.treatments.next}
          onClick={() => scrollBy(340)}
          style={{
            width: 36, height: 36, borderRadius: '50%', border: 'none',
            background: 'var(--ink)', cursor: 'pointer', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 180ms ease',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--primary)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
        >
          <Icon name="chevron-right" size={20} />
        </button>
      </div>
    </section>
  );
}
