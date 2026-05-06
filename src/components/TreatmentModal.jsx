import { useEffect } from 'react';

function BulletItem({ text, color }) {
  return (
    <li
      style={{
        fontSize: 14,
        color: 'var(--ink)',
        letterSpacing: '-0.01em',
        lineHeight: 1.55,
        paddingLeft: 14,
        position: 'relative',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          top: 8,
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: color,
          flexShrink: 0,
        }}
      />
      {text}
    </li>
  );
}

export default function TreatmentModal({ item, onClose, onBook }) {
  const { detail } = item ?? {};

  // 모달 열릴 때 body 스크롤 잠금
  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [item]);

  if (!item) return null;

  return (
    <>
      <style>{`
        .tm-overlay {
          position: fixed;
          inset: 0;
          background: rgba(28,30,29,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 60;
          padding: 20px;
          overflow-y: auto;
        }
        .tm-sheet {
          background: #fff;
          border-radius: 16px;
          padding: 32px;
          max-width: 520px;
          width: 100%;
          box-shadow: 0 16px 40px rgba(28,30,29,0.18);
          margin: auto;
          max-height: 90vh;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        .tm-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }
        .tm-card {
          border-radius: 10px;
          padding: 14px 16px;
        }
        .tm-card-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .tm-card ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .tm-btns {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        /* 모바일: 바텀시트 스타일 */
        @media (max-width: 640px) {
          .tm-overlay {
            align-items: flex-end;
            padding: 0;
          }
          .tm-sheet {
            border-radius: 20px 20px 0 0;
            padding: 24px 20px 32px;
            max-width: 100%;
            max-height: 88vh;
            margin: 0;
          }
          /* 모바일 드래그 핸들 */
          .tm-sheet::before {
            content: '';
            display: block;
            width: 36px;
            height: 4px;
            background: var(--paper-3);
            border-radius: 2px;
            margin: 0 auto 20px;
          }
          .tm-cards {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .tm-card {
            padding: 14px 16px;
          }
          .tm-btns {
            flex-direction: column;
          }
          .tm-btns .btn {
            width: 100%;
            justify-content: center;
            min-height: 48px;
          }
        }
      `}</style>

      <div className="tm-overlay" onClick={onClose}>
        <div className="tm-sheet" onClick={(e) => e.stopPropagation()}>

          {/* 태그 */}
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: 'var(--primary)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            {item.tag}
          </div>

          {/* 제목 */}
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 22,
              lineHeight: 1.4,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              margin: '0 0 12px',
              whiteSpace: 'pre-line',
            }}
          >
            {item.title}
          </h3>

          {/* 소개 문구 */}
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.75,
              color: 'var(--ink-2)',
              letterSpacing: '-0.01em',
              margin: '0 0 18px',
            }}
          >
            {detail ? detail.intro : `${item.desc} 상세 페이지는 준비 중입니다.`}
          </p>

          {detail && (
            <>
              {/* 구분선 */}
              <div style={{ height: 1, background: 'var(--paper-3)', margin: '0 0 18px' }} />

              {/* 본문 단락 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                {detail.body.map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: 'var(--ink-2)',
                      letterSpacing: '-0.01em',
                      margin: 0,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* 추천 대상 · 주의사항 카드 */}
              <div className="tm-cards">
                {/* 추천 대상 */}
                <div className="tm-card" style={{ background: 'var(--primary-softer)' }}>
                  <div className="tm-card-label" style={{ color: 'var(--primary)' }}>
                    ✓ 추천 대상
                  </div>
                  <ul>
                    {detail.targets.map((t, i) => (
                      <BulletItem key={i} text={t} color="var(--primary)" />
                    ))}
                  </ul>
                </div>

                {/* 주의사항 */}
                <div className="tm-card" style={{ background: 'var(--warning-soft)' }}>
                  <div className="tm-card-label" style={{ color: 'var(--warning)' }}>
                    ! 주의사항
                  </div>
                  <ul>
                    {detail.cautions.map((c, i) => (
                      <BulletItem key={i} text={c} color="var(--warning)" />
                    ))}
                  </ul>
                </div>
              </div>

              {/* 안심 문구 */}
              <div
                style={{
                  background: 'var(--paper-2)',
                  borderRadius: 10,
                  padding: '12px 16px',
                  fontSize: 13,
                  color: 'var(--ink-3)',
                  lineHeight: 1.7,
                  letterSpacing: '-0.01em',
                  marginBottom: 20,
                }}
              >
                치료 방법과 기간은 개인 상태에 따라 달라질 수 있습니다. 정확한 내용은 상담을 통해 안내드립니다.
              </div>
            </>
          )}

          {/* 버튼 */}
          <div className="tm-btns">
            <button className="btn btn-secondary" onClick={onClose}>
              닫기
            </button>
            <button className="btn btn-primary" onClick={onBook}>
              Balance AI 상담 신청
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
