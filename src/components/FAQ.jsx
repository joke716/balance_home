import { useState } from 'react';
import Icon from './Icon.jsx';

const CATEGORIES = [
  {
    label: '임플란트',
    icon: 'faq-tooth',
    items: [
      {
        q: '임플란트 치료 기간은 얼마나 걸리나요?',
        a: '개인 구강 상태와 뼈 밀도에 따라 다르지만 일반적으로 3~6개월이 소요됩니다. 뼈이식이 필요한 경우 6~9개월까지 걸릴 수 있으며, 정밀 진단 후 개인별 일정을 안내드립니다.',
      },
      {
        q: '임플란트 건강보험 적용이 되나요?',
        a: '만 65세 이상이라면 평생 2개까지 건강보험이 적용됩니다. 보험 적용 시 본인 부담금이 크게 줄어들며, 자세한 내용은 상담 시 안내드립니다.',
      },
      {
        q: '뼈가 부족해도 임플란트가 가능한가요?',
        a: '뼈가 부족하더라도 뼈이식(골이식술)을 통해 임플란트 식립이 가능합니다. 3D CT 정밀 진단으로 뼈 상태를 정확히 파악한 후 최적의 방법을 제안해 드립니다.',
      },
      {
        q: '임플란트 수술 후 통증이 심한가요?',
        a: '수술 직후 약간의 붓기와 통증이 있을 수 있으나, 처방된 진통제로 충분히 조절됩니다. 대부분 3~5일 이내에 일상생활이 가능하며, 수면진정치료를 함께 이용하시면 더욱 편안하게 받으실 수 있습니다.',
      },
      {
        q: '임플란트 수명은 얼마나 되나요?',
        a: '관리가 잘 될 경우 10~20년 이상 사용할 수 있으며, 정기 검진과 올바른 구강 관리를 통해 자연치처럼 오래 사용하실 수 있습니다. 흡연, 당뇨 등의 전신 질환이 있다면 담당 전문의와 충분히 상의하세요.',
      },
      {
        q: '임플란트 시술 전 주의사항이 있나요?',
        a: '복용 중인 약(혈액 희석제, 당뇨약 등)이 있다면 반드시 사전에 알려주세요. 수술 당일은 가벼운 식사 후 내원해 주시고, 흡연은 가급적 자제하시면 회복에 도움이 됩니다.',
      },
    ],
  },
  {
    label: '교정',
    icon: 'faq-smile',
    items: [
      {
        q: '교정 치료 기간은 얼마나 걸리나요?',
        a: '치아 배열 상태에 따라 다르지만 일반적으로 1.5~3년 정도 소요됩니다. 경미한 경우 1년 이내에 완료되기도 하며, 교정과 전문의 상담 후 정확한 기간을 안내드립니다.',
      },
      {
        q: '투명교정과 일반 교정 중 어느 것이 더 좋나요?',
        a: '투명교정(클리어얼라이너)은 심미적으로 눈에 띄지 않아 직장인과 성인에게 적합하고, 착탈이 자유로워 식사와 구강 위생 관리가 용이합니다. 다만 치아 상태에 따라 적합한 방법이 다르므로, 교정과 전문의 진단 후 결정하는 것이 좋습니다.',
      },
      {
        q: '성인도 교정 치료가 가능한가요?',
        a: '나이와 관계없이 잇몸과 치아 건강이 양호하다면 교정 치료가 가능합니다. 성인 교정은 심미성을 중시한 투명교정이나 설측교정으로 많이 진행하며, 치료 결과도 우수합니다.',
      },
      {
        q: '교정 치료 중 음식 제한이 있나요?',
        a: '일반 브라켓 교정의 경우 딱딱하거나 끈적한 음식(사탕, 껌, 견과류 등)은 주의가 필요합니다. 투명교정은 장치를 빼고 식사할 수 있어 식이 제한이 거의 없습니다.',
      },
      {
        q: '교정 후 유지 장치는 얼마나 착용해야 하나요?',
        a: '교정 완료 후 치아가 원래 위치로 돌아가지 않도록 유지 장치를 착용해야 합니다. 처음 1~2년은 가급적 항시 착용하고, 이후에는 취침 시에만 착용하는 형태로 전환됩니다.',
      },
      {
        q: '교정 치료에 건강보험이 적용되나요?',
        a: '일반적인 성인 심미 교정은 비급여 항목으로 건강보험 적용이 되지 않습니다. 다만 악골 기형 등 의학적으로 필요한 경우 일부 급여 혜택이 있을 수 있으니 상담 시 문의해 주세요.',
      },
    ],
  },
  {
    label: '심미치료',
    icon: 'faq-sparkle',
    items: [
      {
        q: '무삭제 라미네이트가 무엇인가요?',
        a: '자연치를 거의 삭제하지 않고 얇은 세라믹 조각을 치아 앞면에 붙이는 심미 치료입니다. 변색된 치아, 작은 치아, 치아 간격 등을 개선할 수 있으며, 자연치를 최대한 보존한다는 것이 가장 큰 장점입니다.',
      },
      {
        q: '라미네이트 시술 후 원래 치아로 돌아갈 수 있나요?',
        a: '무삭제·최소삭제 라미네이트의 경우 자연치 손상이 거의 없어 다시 제거하더라도 원래 치아 상태로 돌아갈 수 있습니다. 시술 전 충분한 상담을 통해 삭제 범위를 확인하시기 바랍니다.',
      },
      {
        q: '원데이 치료는 어떤 경우에 가능한가요?',
        a: '충치 치료, 인레이·온레이, 단일 크라운 보철 등이 원데이 치료 대상입니다. 당일 3D 구강 스캔 후 디지털 가공으로 제작하여 같은 날 장착까지 완료합니다. 복잡한 케이스는 2회 방문이 필요할 수 있습니다.',
      },
      {
        q: '라미네이트 수명은 얼마나 되나요?',
        a: '적절한 관리 시 10~15년 이상 사용 가능합니다. 딱딱한 음식을 직접 깨물거나 이갈이가 있는 경우 수명이 단축될 수 있으므로 정기 검진을 권장합니다.',
      },
      {
        q: '크라운과 라미네이트의 차이는 무엇인가요?',
        a: '크라운은 치아 전체를 씌우는 방식으로 삭제량이 많은 반면, 라미네이트는 치아 앞면에만 얇게 붙이는 방식으로 치아 보존에 유리합니다. 치아 손상 정도와 심미적 목적에 따라 적합한 방법이 다릅니다.',
      },
      {
        q: '치아 미백과 라미네이트 중 어느 것이 더 효과적인가요?',
        a: '치아 미백은 치아 변색을 개선하는 데 효과적이지만, 모양·크기·배열까지 개선하려면 라미네이트가 더 적합합니다. 두 치료를 병행하면 더욱 자연스럽고 아름다운 결과를 얻을 수 있습니다.',
      },
    ],
  },
  {
    label: '수면·진정치료',
    icon: 'faq-moon',
    items: [
      {
        q: '수면 치료(의식하진정)가 무엇인가요?',
        a: '수면내시경과 유사한 방식으로, 진정 약물을 이용해 의식은 유지하되 긴장과 불안, 통증에 대한 기억을 최소화하는 치료 방법입니다. 치과 공포증이 있는 분들이나 복잡한 시술을 한 번에 받고 싶은 분들에게 적합합니다.',
      },
      {
        q: '수면 치료 중 의식이 완전히 없어지나요?',
        a: '완전한 전신마취와 달리 의식하진정은 의식이 남아 있는 상태에서 진행됩니다. 치료 중 의료진의 지시에 반응할 수 있으며, 치료 후에는 기억이 흐릿하게 남는 경우가 많습니다.',
      },
      {
        q: '수면 치료는 안전한가요?',
        a: '전문 의료진이 활력징후를 지속적으로 모니터링하며 진행하므로 안전합니다. 시술 전 건강 상태 확인 및 복용 약물 등을 충분히 검토하여 개인에게 맞는 진정 용량을 결정합니다.',
      },
      {
        q: '수면 치료 후 바로 운전이 가능한가요?',
        a: '진정 효과가 수 시간 지속될 수 있어 당일 운전은 절대 금물입니다. 보호자와 함께 내원하시거나 대중교통을 이용하시기 바랍니다.',
      },
      {
        q: '어떤 치료에 수면 진정이 적용되나요?',
        a: '임플란트, 사랑니 발치, 다수 치아 치료, 스케일링, 교정 장치 부착 등 대부분의 치과 치료에 수면 진정을 적용할 수 있습니다. 치료 전 상담을 통해 적용 가능 여부를 확인해 드립니다.',
      },
      {
        q: '수면 치료 비용이 별도로 추가되나요?',
        a: '의식하진정 시술은 본 치료 비용과 별도로 진정 처치 비용이 추가됩니다. 비용은 진정 시간과 처치 범위에 따라 달라지므로, 상담 시 사전에 안내드립니다.',
      },
    ],
  },
  {
    label: '치주·잇몸',
    icon: 'faq-shield',
    items: [
      {
        q: '잇몸이 붓고 피가 나면 어떻게 해야 하나요?',
        a: '잇몸 출혈과 붓기는 치주염(잇몸병)의 초기 증상일 수 있습니다. 증상이 반복된다면 빠른 시일 내 치주과 전문의 진단을 받아보시길 권장합니다. 방치할 경우 치주 조직 손상이 심해질 수 있습니다.',
      },
      {
        q: '스케일링은 얼마나 자주 해야 하나요?',
        a: '건강보험이 적용되는 연 1회 스케일링을 기본으로 권장합니다. 잇몸 상태나 치석 누적 정도에 따라 6개월마다 받으시는 것이 이상적이며, 정기 검진 시 담당 전문의가 적절한 주기를 안내해 드립니다.',
      },
      {
        q: '치주염 치료 후 재발 가능성이 있나요?',
        a: '치주염은 치료 후에도 꾸준한 관리가 이루어지지 않으면 재발할 수 있습니다. 정기적인 유지 치료(SPT)와 올바른 칫솔질 습관, 정기 검진이 재발 예방의 핵심입니다.',
      },
      {
        q: '잇몸 치료와 임플란트를 동시에 받을 수 있나요?',
        a: '일반적으로 잇몸 치료를 먼저 완료하고 잇몸이 안정된 이후에 임플란트 시술을 진행합니다. 잇몸 건강이 임플란트의 장기적인 성공을 좌우하기 때문에, 치주 상태를 충분히 개선한 후 진행합니다.',
      },
      {
        q: '잇몸 수술이 꼭 필요한 경우가 있나요?',
        a: '치주염이 심하게 진행되어 스케일링과 잇몸 연조직 치료만으로 개선이 어려운 경우 잇몸 수술(치주 수술)이 필요할 수 있습니다. 수술이 필요한지 여부는 X-ray 및 치주 검사를 통해 판단합니다.',
      },
      {
        q: '잇몸 치료에 건강보험이 적용되나요?',
        a: '스케일링, 치석 제거, 치근활택술 등 기본적인 치주 치료는 건강보험이 적용됩니다. 치주 수술 등 일부 치료는 상태에 따라 급여·비급여 여부가 달라지므로, 상담 시 구체적으로 안내드립니다.',
      },
    ],
  },
  {
    label: '이용 안내',
    icon: 'faq-info',
    items: [
      {
        q: '진료 예약은 어떻게 하나요?',
        a: '전화(031-622-7528) 또는 홈페이지 Balance AI 상담 예약으로 가능합니다. 원하시는 날짜와 시간대를 함께 알려주시면 빠르게 안내드리겠습니다.',
      },
      {
        q: '주차는 가능한가요?',
        a: '그레이츠 판교 건물 지하 주차장을 무료로 이용하실 수 있습니다. 주차 후 데스크에서 주차 도장을 받으시면 됩니다.',
      },
      {
        q: '진료 시간이 어떻게 되나요?',
        a: '평일 오전 10시~오후 7시, 토요일·일요일·공휴일 오전 10시~오후 2시 운영합니다. 점심 시간(오후 1시 30분~2시 30분)에는 진료가 제한됩니다.',
      },
      {
        q: '치료비 카드 결제와 할부가 가능한가요?',
        a: '모든 카드 결제와 무이자 할부가 가능합니다. 치료 시작 전 상세한 견적과 치료 계획을 투명하게 안내드리며, 분납 상담도 가능합니다.',
      },
      {
        q: '처음 방문 시 무엇을 준비해야 하나요?',
        a: '신분증과 건강보험증을 지참하시면 됩니다. 복용 중인 약이 있거나 전신 질환이 있으신 경우 사전에 알려주시면 더 안전하고 정확한 진료가 가능합니다.',
      },
      {
        q: '자연치를 최대한 보존하는 치료를 받을 수 있나요?',
        a: '밸런스치과병원은 가능한 한 자연치를 보존하는 방향으로 치료를 설계합니다. 각 분야 전문의 협진으로 발치를 최소화하고, 다양한 대안을 함께 검토해 드립니다.',
      },
    ],
  },
];

export default function FAQ() {
  const [activeCat, setActiveCat] = useState(0);
  const [open, setOpen] = useState(0);

  const items = CATEGORIES[activeCat].items;

  const handleCatChange = (idx) => {
    setActiveCat(idx);
    setOpen(0);
  };

  return (
    <section id="faq" className="section" style={{ background: 'var(--paper)' }}>
      <style>{`
        .faq-wrap {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .faq-sidebar {
          flex: 0 0 160px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          position: sticky;
          top: 96px;
        }
        .faq-cat-btn {
          width: 100%;
          background: none;
          border: none;
          border-radius: 10px;
          padding: 11px 14px;
          text-align: left;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 9px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--ink-3);
          transition: background 150ms ease, color 150ms ease;
        }
        .faq-cat-btn:hover {
          background: var(--paper-2);
          color: var(--ink);
        }
        .faq-cat-btn.active {
          background: var(--primary-softer);
          color: var(--primary);
          font-weight: 700;
        }
        .faq-cat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 16px;
          height: 16px;
        }
        .faq-content {
          flex: 1;
          min-width: 0;
        }
        .faq-panel {
          background: #fff;
          border-radius: 14px;
          border: 1px solid var(--paper-3);
          overflow: hidden;
        }
        .faq-item-enter {
          animation: faqFadeIn 180ms ease both;
        }
        @keyframes faqFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* 모바일: 카테고리 수평 스크롤 탭 */
        @media (max-width: 700px) {
          .faq-wrap {
            flex-direction: column;
            gap: 16px;
          }
          .faq-sidebar {
            flex: none;
            flex-direction: row;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            gap: 6px;
            position: static;
            padding-bottom: 4px;
          }
          .faq-sidebar::-webkit-scrollbar { display: none; }
          .faq-cat-btn {
            flex: 0 0 auto;
            width: auto;
            white-space: nowrap;
            padding: 8px 14px;
            border-radius: 20px;
            font-size: 13px;
            border: 1px solid var(--paper-3);
          }
          .faq-cat-btn.active {
            border-color: transparent;
          }
          .faq-content {
            width: 100%;
          }
        }
      `}</style>

      <div className="container" style={{ maxWidth: 960 }}>
        <div className="section-label">자주 묻는 질문</div>
        <h2 className="section-title" style={{ marginBottom: 32 }}>
          궁금한 점은
          <br />
          먼저 여쭤봐 주세요
        </h2>

        <div className="faq-wrap">
          {/* 좌측 카테고리 */}
          <nav className="faq-sidebar" aria-label="FAQ 카테고리">
            {CATEGORIES.map((cat, i) => (
              <button
                key={i}
                className={`faq-cat-btn${activeCat === i ? ' active' : ''}`}
                onClick={() => handleCatChange(i)}
              >
                <span className="faq-cat-icon">
                  <Icon name={cat.icon} size={16} />
                </span>
                {cat.label}
              </button>
            ))}
          </nav>

          {/* 우측 아코디언 */}
          <div className="faq-content">
            <div className="faq-panel" key={activeCat}>
              {items.map((it, i) => (
                <div
                  key={i}
                  className="faq-item-enter"
                  style={{
                    borderBottom: i < items.length - 1 ? '1px solid var(--paper-3)' : 'none',
                    animationDelay: `${i * 30}ms`,
                  }}
                >
                  <button
                    onClick={() => setOpen(open === i ? -1 : i)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      padding: '18px 22px',
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
                        fontSize: 14,
                        fontWeight: 600,
                        color: open === i ? 'var(--primary)' : 'var(--ink)',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.55,
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          marginRight: 8,
                          fontSize: 12,
                          fontWeight: 700,
                          color: open === i ? 'var(--primary)' : 'var(--ink-4)',
                        }}
                      >
                        Q{i + 1}.
                      </span>
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
                        padding: '0 22px 20px 22px',
                        fontSize: 13,
                        lineHeight: 1.8,
                        color: 'var(--ink-2)',
                        letterSpacing: '-0.01em',
                        borderLeft: '3px solid var(--primary)',
                        marginLeft: 22,
                        marginRight: 22,
                        marginBottom: 4,
                        paddingLeft: 14,
                        paddingTop: 0,
                      }}
                    >
                      {it.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
