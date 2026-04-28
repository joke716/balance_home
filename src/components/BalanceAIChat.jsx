const CHAT_URL = 'https://mpegs-examined-loving-brooks.trycloudflare.com/';

export default function BalanceAIChat() {
  return (
    <section id="balance-ai" className="section" style={{ background: 'var(--paper)' }}>
      <div className="container" style={{ maxWidth: 880 }}>
        <div className="section-label">BalanceAI 챗봇</div>
        <h2 className="section-title">
          궁금한 점은
          <br />
          Balance AI에게 바로 물어보세요
        </h2>
        <div
          style={{
            background: '#fff',
            borderRadius: 14,
            border: '1px solid var(--paper-3)',
            overflow: 'hidden',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            position: 'relative',
          }}
        >
          <iframe
            src={CHAT_URL}
            title="BalanceAI 챗봇"
            allow="clipboard-write; microphone"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              width: '100%',
              height: 640,
              border: 'none',
              display: 'block',
              background: '#fff',
            }}
          />
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 13,
            color: 'var(--ink-3)',
            textAlign: 'center',
          }}
        >
          챗봇이 보이지 않으시나요?{' '}
          <a
            href={CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--primary)', textDecoration: 'underline' }}
          >
            새 창에서 열기
          </a>
        </div>
      </div>
    </section>
  );
}
