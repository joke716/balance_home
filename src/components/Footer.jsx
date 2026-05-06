import { useLang } from '../i18n/LangContext.jsx';

function FooterHeading({ children }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 600, color: '#fff', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
      {children}
    </div>
  );
}
function FooterLine({ children, style }) {
  return (
    <div style={{ fontSize: 13, lineHeight: '24px', color: '#9AA09C', letterSpacing: '-0.01em', ...style }}>
      {children}
    </div>
  );
}

const SNS_LINKS = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@balancedental',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/balance_dental',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Naver Blog',
    href: 'https://blog.naver.com/balance_dental',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.3 12.9L7.4 0H0v24h7.7V11.1L16.6 24H24V0h-7.7z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer style={{ background: 'var(--ink)', color: '#D8DAD7', padding: '56px 0 40px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.03em', color: '#fff', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ width: 12, height: 12, border: '2px solid #6FA8A1', borderRadius: '50%' }} />
            밸런스치과병원
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.75, color: '#9AA09C', letterSpacing: '-0.01em', marginBottom: 16 }}>
            Balance Dental Hospital<br />{f.tagline}
          </div>
          {/* SNS 아이콘 */}
          <div style={{ display: 'flex', gap: 10 }}>
            {SNS_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36, borderRadius: 8,
                  background: 'rgba(255,255,255,0.07)',
                  color: '#9AA09C',
                  transition: 'background 180ms ease, color 180ms ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = '#9AA09C'; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <FooterHeading>{f.hoursLabel}</FooterHeading>
          <FooterLine>{f.weekday}</FooterLine>
          <FooterLine>{f.weekend}</FooterLine>
          <FooterLine style={{ marginTop: 8, color: '#B07A56' }}>{f.lunch}</FooterLine>
        </div>
        <div>
          <FooterHeading>{f.locationLabel}</FooterHeading>
          <FooterLine>{f.addressLine1}</FooterLine>
          <FooterLine>{f.addressLine2}</FooterLine>
          <FooterLine style={{ marginTop: 8 }}>{f.addressLine3}</FooterLine>
        </div>
        <div>
          <FooterHeading>{f.contactLabel}</FooterHeading>
          <FooterLine>TEL 031-622-7528 / 031-8039-7527</FooterLine>
          <FooterLine>FAX 031-622-7531</FooterLine>
          <FooterLine>hello@balance-dental.kr</FooterLine>
          <FooterLine style={{ marginTop: 8 }}>
            <a href="https://www.mediqr.io/admin/question" target="_blank" rel="noopener noreferrer" style={{ color: '#6FA8A1', fontWeight: 600 }}>
              {f.kakao}
            </a>
          </FooterLine>
        </div>
      </div>
      <div className="container" style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 11, color: '#6B6E6B', letterSpacing: '-0.01em' }}>
        <div>{f.copyright}</div>
        <div style={{ display: 'flex', gap: 18 }}>
          <a style={{ cursor: 'pointer' }}>{f.privacy}</a>
          <a style={{ cursor: 'pointer' }}>{f.terms}</a>
          <a style={{ cursor: 'pointer' }}>{f.fees}</a>
        </div>
      </div>
    </footer>
  );
}
