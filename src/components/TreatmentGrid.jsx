import { useRef } from 'react';
import Icon from './Icon.jsx';

function TreatmentCard({ tag, title, desc, image, onClick }) {
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
        boxShadow:
          '0 2px 6px rgba(28,30,29,0.05), 0 1px 2px rgba(28,30,29,0.04)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        cursor: 'pointer',
        transition:
          'box-shadow 220ms var(--ease-standard), transform 220ms var(--ease-standard)',
        fontFamily: 'inherit',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          '0 10px 28px rgba(28,30,29,0.08), 0 2px 6px rgba(28,30,29,0.04)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          '0 2px 6px rgba(28,30,29,0.05), 0 1px 2px rgba(28,30,29,0.04)';
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
            background:
              'linear-gradient(180deg, rgba(28,30,29,0) 55%, rgba(28,30,29,0.25) 100%)',
          }}
        />
      </div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: 'var(--primary)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
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
        자세히 보기 <span aria-hidden="true">→</span>
      </div>
    </button>
  );
}

const TREATMENTS = [
  {
    tag: '임플란트',
    title: '잇몸 뿌리부터 단단하게,\n오래가는 임플란트',
    desc: '3D 진단과 가이드 수술로 정확도를 높이고, 환자분의 뼈와 잇몸 상태에 맞춰 단계별로 진행합니다.',
    image: '/assets/treatment-implant.png',
  },
  {
    tag: '교정',
    title: '성인도 편안하게,\n눈에 띄지 않는 교정',
    desc: '투명교정 · 설측교정 · 부분교정까지 — 직장 생활과 일상에 지장이 없도록 섬세하게 설계합니다.',
    image: '/assets/treatment-ortho.png',
  },
  {
    tag: '무삭제 라미네이트',
    title: '자연치를 지키면서,\n미소 라인을 바꾸는 방법',
    desc: '치아를 깎지 않고 얇은 세라믹을 덧붙여 자연스러운 색과 형태를 완성, 원래 치아로 돌아갈 수 있습니다.',
    image: '/assets/treatment-laminate.png',
  },
  {
    tag: '원데이 치료',
    title: '하루 안에 마무리하는\n충치 · 보철 치료',
    desc: '당일 스캔부터 제작·장착까지 한 번의 방문으로 끝냅니다. 바쁜 일정에도 치료 시기를 놓치지 마세요.',
    image: '/assets/treatment-oneday.png',
  },
  {
    tag: '턱관절치료',
    title: '턱의 통증과 소리를\n근본부터 다스립니다',
    desc: '턱 근육과 교합, 생활 습관까지 종합 진단해 스플린트 · 물리치료 · 교합 조정으로 단계별 관리합니다.',
    image: '/assets/tmj-treatment.png',
  },
];

export default function TreatmentGrid({ onSelect }) {
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
            <div className="section-label">진료 안내</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              필요한 만큼, 정확하게
            </h2>
          </div>
        </div>
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
        {TREATMENTS.map((t, i) => (
          <TreatmentCard
            key={i}
            tag={t.tag}
            title={t.title}
            desc={t.desc}
            image={t.image}
            onClick={() => onSelect(t)}
          />
        ))}
        <div style={{ flex: '0 0 4px' }} aria-hidden="true" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 16 }}>
        <button
          aria-label="이전"
          onClick={() => scrollBy(-340)}
          style={{
            width: 18,
            height: 18,
            borderRadius: '50%',
            border: 'none',
            background: '#fff',
            boxShadow: 'inset 0 0 0 1px var(--paper-3)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="chevron-left" size={10} />
        </button>
        <button
          aria-label="다음"
          onClick={() => scrollBy(340)}
          style={{
            width: 18,
            height: 18,
            borderRadius: '50%',
            border: 'none',
            background: 'var(--ink)',
            cursor: 'pointer',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="chevron-right" size={10} />
        </button>
      </div>
    </section>
  );
}
