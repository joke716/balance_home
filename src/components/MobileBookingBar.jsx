import { useState, useEffect } from 'react';
import Icon from './Icon.jsx';

export default function MobileBookingBar({ onBookClick }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      style={{
        position: 'fixed',
        right: 20,
        bottom: 20,
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'all 280ms var(--ease-emphasis)',
      }}
    >
      <button
        onClick={onBookClick}
        aria-label="예약"
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          border: 'none',
          background: 'var(--primary)',
          color: '#fff',
          boxShadow: '0 16px 40px rgba(28,30,29,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <Icon name="calendar" size={22} />
      </button>
      <button
        aria-label="전화"
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          border: 'none',
          background: '#fff',
          color: 'var(--ink)',
          boxShadow: '0 8px 24px rgba(28,30,29,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <Icon name="phone" size={20} />
      </button>
    </div>
  );
}
