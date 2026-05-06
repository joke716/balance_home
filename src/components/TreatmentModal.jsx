export default function TreatmentModal({ item, onClose, onBook }) {
  if (!item) return null;
  const { detail } = item;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(28,30,29,0.55)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 60,
        padding: 20,
        overflowY: 'auto',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: 16,
          padding: 32,
          maxWidth: 520,
          width: '100%',
          boxShadow: '0 16px 40px rgba(28,30,29,0.18)',
          margin: 'auto',
        }}
      >
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
            fontSize: 24,
            lineHeight: '34px',
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            margin: '0 0 12px',
            whiteSpace: 'pre-line',
          }}
        >
          {item.title}
        </h3>

        {/* 기본 설명 */}
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: 'var(--ink-2)',
            letterSpacing: '-0.01em',
            margin: '0 0 20px',
          }}
        >
          {detail ? detail.intro : `${item.desc} 상세 페이지는 준비 중입니다.`}
        </p>

        {/* 상세 콘텐츠 (진정요법 등 detail이 있는 경우) */}
        {detail && (
          <>
            {/* 본문 단락 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                marginBottom: 24,
              }}
            >
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

            {/* 추천 대상 · 주의사항 */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                marginBottom: 24,
              }}
            >
              {/* 추천 대상 */}
              <div
                style={{
                  background: 'var(--primary-softer)',
                  borderRadius: 10,
                  padding: '14px 16px',
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: 'var(--primary)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}
                >
                  추천 대상
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {detail.targets.map((t, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: 13,
                        color: 'var(--ink)',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.5,
                        paddingLeft: 12,
                        position: 'relative',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 7,
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: 'var(--primary)',
                        }}
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 주의사항 */}
              <div
                style={{
                  background: 'var(--warning-soft)',
                  borderRadius: 10,
                  padding: '14px 16px',
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: 'var(--warning)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}
                >
                  주의사항
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {detail.cautions.map((c, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: 13,
                        color: 'var(--ink)',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.5,
                        paddingLeft: 12,
                        position: 'relative',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 7,
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: 'var(--warning)',
                        }}
                      />
                      {c}
                    </li>
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
              진정요법은 환자 상태를 확인하며 의료진 모니터링 하에 진행합니다. 병력·복용약·전신상태에 따라 적용 여부가 달라질 수 있으며, 개인별 상담을 통해 안내드립니다.
            </div>
          </>
        )}

        {/* 버튼 */}
        <div
          style={{
            display: 'flex',
            gap: 10,
            justifyContent: 'flex-end',
          }}
        >
          <button className="btn btn-secondary" onClick={onClose}>
            닫기
          </button>
          <button className="btn btn-primary" onClick={onBook}>
            이 항목으로 Balance AI 상담
          </button>
        </div>
      </div>
    </div>
  );
}
