export default function DirectorMessage() {
  return (
    <section className="section" style={{ background: 'var(--paper-2)' }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <h2 className="section-title" style={{ marginBottom: 28 }}>
          치과는 무서운 곳이 아니라
          <br />
          오래도록 건강을 지키는 곳이어야 합니다.
        </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            fontSize: 16,
            lineHeight: 1.85,
            color: 'var(--ink-2)',
            letterSpacing: '-0.01em',
          }}
        >
          <p style={{ margin: 0 }}>
            밸런스치과병원는 환자분의 불안을 먼저 살피는 것에서 시작합니다.
            진료 이전에 충분한 대화와 정확한 진단을 원칙으로 하며, 환자분의 생활·예산·시간을 함께 고려해
            최선의 선택지를 함께 정해 나갑니다.
          </p>
          <p style={{ margin: 0 }}>
            과잉 진료 없이 필요한 치료만을 권해드리고, 치료 이후의 관리까지 밸런스치과병원은 함께합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
