import Icon from './Icon.jsx';

export default function LocationMap() {
  const q = encodeURIComponent('밸런스치과병원 판교 그레이츠');
  const mapSrc = `https://www.google.com/maps?q=${q}&hl=ko&z=15&output=embed`;
  const dirHref = `https://www.google.com/maps/search/?api=1&query=${q}`;
  return (
    <section style={{ background: 'var(--paper-2)', padding: '72px 0 0' }}>
      <div className="container" style={{ marginBottom: 36 }}>
        <div className="section-label">오시는 길</div>
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          판교역 2번 출구 바로 앞
        </h2>
      </div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'min(560px, 60vh)',
          minHeight: 420,
          overflow: 'hidden',
        }}
      >
        <iframe
          src={mapSrc}
          title="밸런스치과병원 위치"
          style={{
            border: 0,
            width: '100%',
            height: '100%',
            display: 'block',
            filter: 'saturate(0.95) contrast(1.02)',
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
        <div
          className="map-card"
          style={{
            position: 'absolute',
            left: 'clamp(18px, 4vw, 48px)',
            bottom: 'clamp(18px, 4vw, 48px)',
            width: 'min(360px, calc(100% - 36px))',
            background: '#fff',
            borderRadius: 14,
            padding: 24,
            boxShadow:
              '0 12px 40px rgba(28,30,29,0.16), 0 2px 6px rgba(28,30,29,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: 'var(--primary)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 6,
              }}
            >
              주소
            </div>
            <div
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: 'var(--ink)',
                letterSpacing: '-0.01em',
              }}
            >
              경기도 성남시 분당구 백현동 535
              <br />
              그레이츠 판교(전 크래프톤타워) 3층
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--primary)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: 4,
                }}
              >
                지하철
              </div>
              <div
                style={{
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: 'var(--ink-2)',
                  letterSpacing: '-0.01em',
                }}
              >
                신분당선 판교역
                <br />2번 출구 앞
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--primary)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: 4,
                }}
              >
                연락처
              </div>
              <a
                href="tel:031-622-7528"
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: 'var(--ink)',
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-display)',
                  display: 'block',
                }}
              >
                031-622-7528
              </a>
            </div>
          </div>
          <a
            href={dirHref}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-primary"
            style={{ justifyContent: 'center', textDecoration: 'none' }}
          >
            <Icon name="map-pin" size={16} /> 구글 지도에서 보기
          </a>
        </div>
      </div>
    </section>
  );
}
