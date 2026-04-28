const FooterHeading = ({ children }) => (
  <div
    style={{
      fontSize: 11,
      fontWeight: 600,
      color: '#fff',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      marginBottom: 12,
    }}
  >
    {children}
  </div>
);
const FooterLine = ({ children, style }) => (
  <div
    style={{
      fontSize: 13,
      lineHeight: '24px',
      color: '#9AA09C',
      letterSpacing: '-0.01em',
      ...style,
    }}
  >
    {children}
  </div>
);

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: '#D8DAD7', padding: '56px 0 40px' }}>
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 32,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 22,
              letterSpacing: '-0.03em',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                border: '2px solid #6FA8A1',
                borderRadius: '50%',
              }}
            />
            밸런스치과병원
          </div>
          <div
            style={{
              fontSize: 13,
              lineHeight: 1.75,
              color: '#9AA09C',
              letterSpacing: '-0.01em',
            }}
          >
            Balance Dental Hospital
            <br />
            오래도록 건강을 지키는 치과
          </div>
        </div>
        <div>
          <FooterHeading>진료 시간</FooterHeading>
          <FooterLine>평일 10:00 — 19:00</FooterLine>
          <FooterLine>토요일 · 일요일 10:00 — 14:00</FooterLine>
          <FooterLine style={{ marginTop: 8, color: '#B07A56' }}>
            점심시간 13:30 — 14:30
          </FooterLine>
        </div>
        <div>
          <FooterHeading>오시는 길</FooterHeading>
          <FooterLine>경기도 성남시 분당구 백현동 535</FooterLine>
          <FooterLine>그레이츠 판교(전 크래프톤타워) 3층</FooterLine>
          <FooterLine style={{ marginTop: 8 }}>신분당선 판교역 2번 출구 바로 앞</FooterLine>
        </div>
        <div>
          <FooterHeading>문의</FooterHeading>
          <FooterLine>031-622-7528</FooterLine>
          <FooterLine>hello@balance-dental.kr</FooterLine>
          <FooterLine style={{ marginTop: 8, color: '#6FA8A1', fontWeight: 600 }}>
            카카오톡 상담 →
          </FooterLine>
        </div>
      </div>
      <div
        className="container"
        style={{
          marginTop: 40,
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          fontSize: 11,
          color: '#6B6E6B',
          letterSpacing: '-0.01em',
        }}
      >
        <div>© 2026 Balance Dental Hospital · 사업자등록번호 123-45-67890</div>
        <div style={{ display: 'flex', gap: 18 }}>
          <a>개인정보처리방침</a>
          <a>이용약관</a>
          <a>비급여 진료비</a>
        </div>
      </div>
    </footer>
  );
}
