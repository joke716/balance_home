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
    detail: {
      intro: '치아를 상실했거나 오래된 치아를 더 이상 보존하기 어려운 경우, 임플란트 치료를 고려할 수 있습니다.',
      body: [
        '임플란트는 빠진 치아 부위에 인공치근을 식립하고, 그 위에 보철물을 연결해 씹는 기능과 심미성을 회복하는 치료입니다. 무조건 수술부터가 아니라, 먼저 치아를 살릴 수 있는지 확인한 뒤 치료 방향을 결정합니다.',
        '치료는 진단·CT 촬영 → 치료계획 수립 → 임플란트 식립 → 치유기간 → 보철물 제작 및 장착 → 정기관리 순서로 진행됩니다. 뼈가 부족한 경우에는 골이식을 함께 고려할 수 있으며, 필요한 경우에만 판단합니다.',
        '뼈 상태, 잇몸 상태, 전신질환, 복용약, 흡연 여부 등에 따라 치료 방법과 기간이 달라질 수 있습니다. 개인차 있음.',
      ],
      targets: ['치아가 빠진 부위가 있는 분', '발치 예정 치아가 있는 분', '오래된 브릿지·크라운이 불편하신 분', '뼈 부족으로 임플란트를 고민 중인 분'],
      cautions: ['CT 촬영 및 구강검진 필요', '복용 약·전신질환 사전 확인', '당일 무리한 운동·음주·흡연 피하기', '정기검진·스케일링으로 장기 관리 필요'],
    },
  },
  {
    tag: '교정',
    title: '성인도 편안하게,\n눈에 띄지 않는 교정',
    desc: '투명교정 · 설측교정 · 부분교정까지 — 직장 생활과 일상에 지장이 없도록 섬세하게 설계합니다.',
    image: '/assets/treatment-ortho.png',
    detail: {
      intro: '치아교정은 단순히 치아를 가지런하게 만드는 치료가 아니라, 치열·교합·위생관리·심미성을 함께 고려하는 치료입니다.',
      body: [
        '삐뚤어진 치아, 덧니, 돌출입, 벌어진 치아, 반대교합, 씹는 불편감 등을 개선하기 위해 치아를 서서히 이동시키는 치료입니다. 발치 여부는 공간 부족 정도, 돌출 정도, 교합 상태를 종합적으로 확인한 뒤 결정하며, 모든 경우에 발치가 필요한 것은 아닙니다.',
        '치료는 상담·진단 → 구강검사·스캔·방사선 촬영 → 치료계획 설명 → 장치 부착 → 정기 조정 → 유지관리 순서로 진행됩니다. 투명교정·설측교정·부분교정·재교정 가능 여부는 현재 상태를 확인한 뒤 상담드립니다.',
        '치아 이동 속도와 치료 기간은 치아 상태·잇몸 상태·골격 형태·장치 착용 시간 등에 따라 달라질 수 있습니다. 교정 후에도 치아는 평생 조금씩 이동할 수 있어 유지장치 관리가 중요합니다. 개인차 있음.',
      ],
      targets: ['치열이 불규칙하거나 덧니가 있는 분', '돌출입·안모 변화를 고민 중인 분', '씹기 불편하거나 교합이 맞지 않는 분', '예전 교정 후 재이동을 느끼시는 분'],
      cautions: ['정기 내원 및 장치 관리 필요', '딱딱하거나 끈적한 음식 주의', '투명교정은 하루 착용시간 준수 중요', '치료 후 유지장치 착용 지속 필요'],
    },
  },
  {
    tag: '무삭제 라미네이트',
    title: '자연치를 지키면서,\n미소 라인을 바꾸는 방법',
    desc: '치아를 깎지 않고 얇은 세라믹을 덧붙여 자연스러운 색과 형태를 완성, 원래 치아로 돌아갈 수 있습니다.',
    image: '/assets/treatment-laminate.png',
    detail: {
      intro: '앞니의 모양·색·배열을 보다 자연스럽고 심미적으로 개선하기 위해 라미네이트 치료를 고려할 수 있습니다.',
      body: [
        '라미네이트는 치아 앞면에 얇은 세라믹 보철물을 부착해 색상·형태·비율·미세한 배열을 개선하는 심미 보철 치료입니다. 단순히 하얗게 만드는 것이 아니라 얼굴·입술·미소라인의 조화까지 함께 고려해 디자인합니다.',
        '밸런스치과병원은 치아 상태에 따라 무삭제 또는 최소삭제 방향을 우선 고려합니다. 다만 치아 배열·돌출 정도·교합·기존 보철 상태에 따라 일부 삭제가 필요할 수 있으며, 돌출 정도에 따라 교정치료를 함께 검토하는 경우도 있습니다.',
        '치아 상태·교합 습관·이갈이 여부 등에 따라 유지기간과 적응 정도가 달라질 수 있습니다. 개인차 있음.',
      ],
      targets: ['앞니 색상·모양·비율이 고민인 분', '치아 삭제를 최소화하고 싶은 분', '교정보다 비교적 빠른 심미 개선을 원하는 분', '자연스러운 미소라인을 원하는 분'],
      cautions: ['매우 딱딱한 음식·강한 충격 주의', '이갈이·이악물기 습관 관리 필요', '초기 시리거나 어색함은 일시적일 수 있음', '정기검진 및 장기 유지관리 권장'],
    },
  },
  {
    tag: '원데이 치료',
    title: '하루 안에 마무리하는\n충치 · 보철 치료',
    desc: '당일 스캔부터 제작·장착까지 한 번의 방문으로 끝냅니다. 바쁜 일정에도 치료 시기를 놓치지 마세요.',
    image: '/assets/treatment-oneday.png',
    detail: {
      intro: '여러 번 내원하기 어려운 경우, 상태에 따라 하루 집중 진료(원데이 진료)를 고려할 수 있습니다.',
      body: [
        '원데이 진료는 검사·진단·치료·보철 제작 등을 하루 또는 최소 내원 횟수로 진행할 수 있도록 계획하는 집중 진료 시스템입니다. 일부 보철은 디지털 스캔과 세렉 시스템을 통해 당일 제작·장착이 가능한 경우가 있습니다.',
        '바쁜 직장인, 지방·해외 거주 환자, 다수 치아 집중 치료가 필요한 분들께 상담을 진행합니다. 긴 시간 치료가 부담되는 경우 진정요법과 함께 고려하기도 합니다.',
        '다만 모든 치료가 하루에 가능한 것은 아니며, 치아 상태·염증·신경치료 여부·잇몸 상태에 따라 치료 횟수와 기간은 달라질 수 있습니다. 무조건 빠르게보다 안정성과 적응까지 함께 고려합니다. 개인차 있음.',
      ],
      targets: ['여러 번 내원이 어려운 바쁜 직장인', '지방·해외에서 방문하시는 분', '당일 보철 치료를 희망하는 분', '다수 치아를 집중적으로 치료하려는 분'],
      cautions: ['사전 예약 및 일정 조율 필요', 'CT·스캔·구강검사 사전 확인 필요', '치료 후 교합 적응 기간 필요 가능', '추가 조정·내원이 필요할 수 있음'],
    },
  },
  {
    tag: '턱관절치료',
    title: '턱의 통증과 소리를\n근본부터 다스립니다',
    desc: '턱 근육과 교합, 생활 습관까지 종합 진단해 스플린트 · 물리치료 · 교합 조정으로 단계별 관리합니다.',
    image: '/assets/tmj-treatment.png',
    detail: {
      intro: '입을 벌릴 때 불편하거나, 턱에서 소리가 나거나, 턱 주변이 자주 뻐근하다면 턱관절 상태를 확인해볼 필요가 있습니다.',
      body: [
        '턱관절은 턱뼈·근육·인대·교합이 함께 움직이는 구조로, 이갈이·이악물기·스트레스·교합 불균형·생활습관 등에 영향을 받을 수 있습니다. 증상은 입 벌릴 때 소리, 턱 통증, 개구 제한, 씹기 불편, 두통·관자놀이 통증, 목·어깨 긴장감 등으로 나타날 수 있습니다.',
        '턱관절 치료는 단순히 소리만 없애는 치료가 아니라, 현재 턱 상태와 생활습관·근육 긴장·교합 상태를 함께 확인하며 관리 방향을 계획합니다. 스플린트·물리치료·교합 조정 등을 상태에 따라 단계별로 진행합니다.',
        '턱 소리가 있다고 모두 심각한 상태를 의미하는 것은 아닙니다. 생활습관과 근육 긴장 관리가 치료만큼 중요할 수 있습니다. 개인차 있음.',
      ],
      targets: ['입 벌릴 때 턱 소리가 나는 분', '턱 주변이 자주 뻐근하거나 피곤한 분', '이갈이·이악물기 습관이 있는 분', '두통·목·어깨 긴장이 동반되는 분'],
      cautions: ['질기고 딱딱한 음식 주의', '이를 꽉 무는 습관·턱 괴기 주의', '스트레스·근육 긴장 관리 중요', '정기적인 상태 확인 권장'],
    },
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
