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
    tag: '수면치료 · 진정요법',
    title: '무서워서 미루던 치료를,\n조금 더 편안하게',
    desc: '치과 공포 · 긴장 · 헛구역질이 심한 분을 위한 의식하진정요법. 편안한 상태에서 안전하게 치료를 받을 수 있도록 돕습니다.',
    image: '/assets/treatment-sedation.png',
    detail: {
      intro: '치과 치료가 많이 무섭다면, 진정요법을 함께 고려할 수 있습니다.',
      body: [
        '밸런스치과병원은 치료에 대한 긴장감과 공포가 큰 환자분들을 위해 의식하진정요법(수면치료)을 함께 진행하고 있습니다.',
        '전신마취처럼 완전히 의식을 잃는 방식이 아니라, 긴장을 낮추고 편안한 상태에서 치료를 받을 수 있도록 돕는 진정 치료입니다. 치료 중에는 의료진의 말에 반응이 가능하며, 호흡과 상태를 지속적으로 모니터링하면서 안전하게 진행합니다.',
        '임플란트 · 다수 치아 · 장시간 치료처럼 피로감이 큰 경우에도 함께 고려할 수 있습니다.',
      ],
      targets: ['치과 공포가 심하신 분', '헛구역질이 심하신 분', '긴 치료가 부담되시는 분', '긴장감이 크신 분'],
      cautions: ['보호자 동행 권장', '당일 운전 제한', '금식 안내 별도 제공', '복용 약 사전 확인 필요'],
    },
  },
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
        <p
          style={{
            fontSize: 15,
            color: 'var(--ink-3)',
            maxWidth: 560,
            margin: '-16px 0 32px',
            letterSpacing: '-0.01em',
            lineHeight: 1.7,
          }}
        >
          임플란트 · 교정 · 무삭제 라미네이트 · 원데이 치료 · 턱관절치료까지,
          환자분의 구강 상태와 라이프스타일에 맞춰 가장 적절한 치료 계획을 제안드립니다.
          과한 진료 없이, 꼭 필요한 만큼만 정확하게 진행합니다.
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
