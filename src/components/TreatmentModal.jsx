export default function TreatmentModal({ item, onClose, onBook }) {
  if (!item) return null;
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
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: 16,
          padding: 32,
          maxWidth: 480,
          width: '100%',
          boxShadow: '0 16px 40px rgba(28,30,29,0.18)',
        }}
      >
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
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 24,
            lineHeight: '34px',
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            margin: '0 0 12px',
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: 'var(--ink-2)',
            letterSpacing: '-0.01em',
          }}
        >
          {item.desc} 상세 페이지는 준비 중입니다.
        </p>
        <div
          style={{
            display: 'flex',
            gap: 10,
            marginTop: 24,
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
