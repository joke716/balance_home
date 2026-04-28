const CHAT_URL = 'https://mpegs-examined-loving-brooks.trycloudflare.com/';

export default function BalanceAIChat() {
  return (
    <section className="section" style={{ background: 'var(--paper)' }}>
      <div className="container" style={{ maxWidth: 880 }}>
        <div className="section-label">BalanceAI 챗봇</div>
        <h2 className="section-title">
          궁금한 점은
          <br />
          AI에게 바로 물어보세요
        </h2>
        <div
          style={{
            background: '#fff',
            borderRadius: 14,
            border: '1px solid var(--paper-3)',
            overflow: 'hidden',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          }}
        >
          <iframe
            src={CHAT_URL}
            title="BalanceAI 챗봇"
            loading="lazy"
            allow="clipboard-write; microphone"
            style={{
              width: '100%',
              height: 640,
              border: 'none',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  );
}
