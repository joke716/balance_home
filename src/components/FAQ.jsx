import { useState } from 'react';

const ITEMS = [
  {
    q: '임플란트 치료는 얼마나 걸리나요?',
    a: '개인 구강 상태에 따라 다르지만 일반적으로 3~6개월이 소요됩니다. 정확한 일정은 첫 상담에서 안내드립니다.',
  },
  {
    q: '건강보험 적용이 되나요?',
    a: '만 65세 이상 임플란트는 평생 2개까지 건강보험이 적용됩니다. 그 외 치료는 진단 후 안내드립니다.',
  },
  {
    q: '진료 예약은 어떻게 하나요?',
    a: '전화(031-622-7528) 또는 홈페이지 상담 예약으로 가능하며, 원하시는 시간대를 함께 알려주시면 편합니다.',
  },
  {
    q: '주차는 가능한가요?',
    a: '건물 지하 주차장을 무료로 이용하실 수 있습니다. 방문 도장은 데스크에서 받아 주세요.',
  },
  {
    q: '치료비 카드 결제와 할부가 가능한가요?',
    a: '모든 카드 결제와 무이자 할부가 가능합니다. 치료 전 견적을 투명하게 안내드립니다.',
  },
  {
    q: '치아를 뽑지 않고 치료할 수 있나요?',
    a: '가능한 한 자연치를 보존하는 방향으로 치료를 설계합니다. 진단 후 대안을 함께 제시해 드립니다.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" style={{ background: 'var(--paper)' }}>
      <div className="container" style={{ maxWidth: 880 }}>
        <div className="section-label">자주 묻는 질문</div>
        <h2 className="section-title">
          궁금한 점은
          <br />
          먼저 여쭤봐 주세요
        </h2>
        <div
          style={{
            background: '#fff',
            borderRadius: 14,
            border: '1px solid var(--paper-3)',
            overflow: 'hidden',
          }}
        >
          {ITEMS.map((it, i) => (
            <div
              key={i}
              style={{
                borderBottom:
                  i < ITEMS.length - 1 ? '1px solid var(--paper-3)' : 'none',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  padding: '20px 24px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: 'var(--ink)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {it.q}
                </span>
                <span
                  style={{
                    color: open === i ? 'var(--primary)' : 'var(--ink-3)',
                    transition: 'transform 200ms var(--ease-standard)',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    fontSize: 20,
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div
                  style={{
                    padding: '0 24px 22px',
                    fontSize: 14,
                    lineHeight: '24px',
                    color: 'var(--ink-2)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {it.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
