import { useRef } from 'react';
import Icon from './Icon.jsx';
import { useLang } from '../i18n/LangContext.jsx';

const DOCTORS = [
  { name: '류성훈', image: '/assets/doctors/ryu-seonghoon.jpg', bio: ['임플란트 20,000개 이상 식립', 'New York University Implant Course 수료', '미국 Align Technology 인비절라인 인증의사'] },
  { name: '김동원', image: '/assets/doctors/kim-dongwon.jpg', bio: ['서울대학교 치의학대학원 치과보철학 박사', '서울대학교 치과병원 치과보철과 임상자문교수', '대한치과보철학회 정회원'] },
  { name: '이정현', image: '/assets/doctors/lee-junghyun.jpg', bio: ['연세대학교 치과대학원 치과교정학 석사', '보건복지부 인증 치과교정과 전문의', '세계교정치과연맹(WFO) member'] },
  { name: '전준형', image: '/assets/doctors/jeon-junhyung.jpg', bio: ['서울대학교 치의학대학원 박사과정', '아시아턱관절학회(AATMJ) 이사', '전) 분당서울대병원 턱얼굴 외상센터장'] },
  { name: '박희정', image: '/assets/doctors/park-heejung.jpg', bio: ['서울대학교 치과대학 졸업', '보건복지부 인증 통합치의학과 전문의', '고려대학교 임상치의학 대학원 교정학 석사'] },
  { name: '이중현', image: '/assets/doctors/lee-joonghyun.jpg', bio: ['연세대학교 치과대학병원 본원 수련 전문의', '치과보존과 경력 20년', 'University of Pennsylvania 근관치료과정 수료'] },
  { name: '남재우', image: '/assets/doctors/nam-jaewoo.jpg', bio: ['서울대학교 치의학대학원 치의학 박사과정', '두바이 치과의사 면허 보유 (DHA License)', '부산대학교 치의학전문대학원 석사'] },
  { name: '윤희준', image: '/assets/doctors/yoon-heejun.jpg', bio: ['부산대학교 치의학전문대학원 석사', '경희대학교 치과병원 인턴 / 경의대 치주과 레지던트', '보건복지부 인정 치주과 전문의'] },
  { name: '황현식', image: '/assets/doctors/hwang-hyunsik.jpeg', bio: ['전남대학교 치과대학 전 학장', '미국 펜실베니아 치대 치주교정 연수', '세계교정학회(WFO) 펠로우'] },
];

const TONES = [
  ['#E8E3DA', '#CFC6B5'], ['#DCE8E5', '#B8D1CC'], ['#F1E6DB', '#D9BFA3'],
  ['#EFE7D6', '#D6C9A8'], ['#E3DED3', '#C9C0B2'], ['#E2ECEA', '#BFD3CE'],
  ['#EDE6D8', '#D4C2A5'], ['#E5DED1', '#C8BA9D'],
];

export default function DoctorsGrid() {
  const { t } = useLang();
  const scrollRef = useRef(null);
  const scrollBy = (delta) => {
    const el = scrollRef.current;
    if (el) el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section id="doctors" className="section" style={{ background: 'var(--paper)' }}>
      <div className="container">
        <div className="section-label">{t.doctors.sectionLabel}</div>
        <h2 className="section-title">{t.doctors.title}</h2>
        <p style={{ fontSize: 15, color: 'var(--ink-3)', maxWidth: 672, margin: '-16px 0 32px', letterSpacing: '-0.01em', lineHeight: 1.7 }}>
          {t.doctors.desc}
        </p>
      </div>
      <div
        ref={scrollRef}
        className="treatment-scroll"
        style={{
          display: 'flex', gap: 20, overflowX: 'auto', overflowY: 'hidden',
          scrollSnapType: 'x mandatory', scrollPadding: '0 20px',
          padding: '4px 20px 20px', maxWidth: 1240, margin: '0 auto',
          scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch',
        }}
      >
        {DOCTORS.map((d, i) => { const bio = t.doctorBios[i] || d.bio; return (
          <div
            key={i}
            style={{
              flex: '0 0 240px', scrollSnapAlign: 'start', background: '#fff',
              borderRadius: 14, overflow: 'hidden',
              boxShadow: '0 2px 6px rgba(28,30,29,0.05), 0 1px 2px rgba(28,30,29,0.04)',
              transition: 'transform 220ms var(--ease-standard), box-shadow 220ms var(--ease-standard)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(28,30,29,0.08), 0 2px 6px rgba(28,30,29,0.04)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(28,30,29,0.05), 0 1px 2px rgba(28,30,29,0.04)'; }}
          >
            <div
              style={{
                aspectRatio: '4/5',
                background: `linear-gradient(160deg, ${TONES[i % TONES.length][0]} 0%, ${TONES[i % TONES.length][1]} 100%)`,
                backgroundImage: d.image ? `linear-gradient(180deg, rgba(28,30,29,0) 65%, rgba(28,30,29,0.18) 100%), url(${d.image})` : `linear-gradient(160deg, ${TONES[i % TONES.length][0]} 0%, ${TONES[i % TONES.length][1]} 100%)`,
                backgroundSize: 'cover', backgroundPosition: 'center top', position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', top: 14, right: 14, fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.78)', textShadow: '0 1px 4px rgba(28,30,29,0.25)', letterSpacing: '0.08em' }}>
                0{i + 1}
              </span>
            </div>
            <div style={{ padding: '20px 20px 22px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 6 }}>
                {d.name}
              </div>
              <div style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.5 }}>
                {t.doctorRoles[i]}
              </div>
              {bio && (
                <ul style={{ marginTop: 12, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {bio.slice(0, 3).map((line, j) => (
                    <li key={j} style={{ fontSize: 12, lineHeight: 1.55, color: 'var(--ink-3)', letterSpacing: '-0.01em', paddingLeft: 10, position: 'relative' }}>
                      <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 8, width: 3, height: 3, borderRadius: '50%', background: 'var(--primary)' }} />
                      {line}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );})}
        <div style={{ flex: '0 0 4px' }} aria-hidden="true" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 20 }}>
        <button aria-label={t.doctors.prev} onClick={() => scrollBy(-340)} style={{ width: 36, height: 36, borderRadius: '50%', border: 'none', background: 'var(--ink)', cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 180ms ease' }} onMouseEnter={e => e.currentTarget.style.background = 'var(--primary)'} onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}>
          <Icon name="chevron-left" size={20} />
        </button>
        <button aria-label={t.doctors.next} onClick={() => scrollBy(340)} style={{ width: 36, height: 36, borderRadius: '50%', border: 'none', background: 'var(--ink)', cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 180ms ease' }} onMouseEnter={e => e.currentTarget.style.background = 'var(--primary)'} onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}>
          <Icon name="chevron-right" size={20} />
        </button>
      </div>
    </section>
  );
}
