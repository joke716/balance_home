import Icon from './Icon.jsx';
import { useLang } from '../i18n/LangContext.jsx';

export default function Hero({ onBookClick }) {
  const { t } = useLang();
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="hero-bg">
        <div className="hero-img" />
        <div className="hero-scrim" />
        <div className="hero-scrim-bottom" />
      </div>
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          padding: '120px 20px 100px',
          minHeight: 620,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            color: 'var(--primary)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          {t.hero.badge}
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(32px, 6vw, 52px)',
            lineHeight: 1.3,
            letterSpacing: '-0.025em',
            color: 'var(--ink)',
            margin: 0,
            maxWidth: 540,
            whiteSpace: 'pre-line',
          }}
        >
          {t.hero.h1}
        </h1>
        <p
          style={{
            marginTop: 24,
            maxWidth: 460,
            fontSize: 17,
            lineHeight: 1.7,
            color: 'var(--ink-2)',
            letterSpacing: '-0.01em',
            whiteSpace: 'pre-line',
          }}
        >
          {t.hero.p}
        </p>
        {/* 병원 소개 동영상 */}
        <div
          className="hero-video-wrap"
          style={{
            marginTop: 2,
            marginBottom: 12,
            width: '100%',
            maxWidth: 480,
            borderRadius: 14,
            overflow: 'hidden',
            position: 'relative',
            paddingTop: 'calc(min(480px, 100%) * 9 / 16)',
            boxShadow: '0 8px 28px rgba(28,30,29,0.18)',
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/wHpvI1MQfJs?rel=0"
            title="밸런스치과병원 소개"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
          <button className="btn btn-primary btn-lg" onClick={onBookClick}>
            <Icon name="calendar" size={18} /> {t.hero.cta}
          </button>
          <button className="btn btn-secondary btn-lg">
            <Icon name="phone" size={18} /> {t.hero.phone}
          </button>
        </div>
      </div>
    </section>
  );
}
