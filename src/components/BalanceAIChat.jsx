import { useEffect, useRef, useState } from 'react';

const CHAT_URL = 'https://balanceai.asuscomm.com/';

export default function BalanceAIChat() {
  const frameWrapRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    const node = frameWrapRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [shouldLoad]);

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
          ref={frameWrapRef}
          style={{
            background: '#fff',
            borderRadius: 14,
            border: '1px solid var(--paper-3)',
            overflow: 'hidden',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            position: 'relative',
            height: 830,
          }}
        >
          {shouldLoad ? (
            <iframe
              src={CHAT_URL}
              title="BalanceAI 챗봇"
              allow="clipboard-write; microphone"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                background: '#fff',
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ink-3)',
                fontSize: 14,
              }}
            >
              챗봇 불러오는 중…
            </div>
          )}
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
