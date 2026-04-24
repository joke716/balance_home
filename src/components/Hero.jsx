import Icon from './Icon.jsx';

export default function Hero({ onBookClick }) {
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
          padding: '120px 20px 140px',
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
          Balance Dental Hospital
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
          }}
        >
          불안을 낮추고
          <br />
          치료는 정확하게
        </h1>
        <p
          style={{
            marginTop: 24,
            maxWidth: 460,
            fontSize: 17,
            lineHeight: 1.7,
            color: 'var(--ink-2)',
            letterSpacing: '-0.01em',
          }}
        >
          환자분께 맞는 계획을 함께 정합니다.
          <br />
          밸런스치과병원는 정확한 진단과 충분한 상담을 원칙으로 합니다.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
          <button className="btn btn-primary btn-lg" onClick={onBookClick}>
            <Icon name="calendar" size={18} /> Balance AI 상담
          </button>
          <button className="btn btn-secondary btn-lg">
            <Icon name="phone" size={18} /> 031-622-7528
          </button>
        </div>
      </div>
    </section>
  );
}
