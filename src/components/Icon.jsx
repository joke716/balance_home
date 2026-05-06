import React from 'react';

const PATHS = {
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
  'chevron-left': <path d="M15 18l-6-6 6-6" />,
  'chevron-right': <path d="M9 6l6 6-6 6" />,
  'map-pin': (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),

  /* ── FAQ 카테고리 아이콘 (Streamline Regular 스타일) ── */

  // 임플란트 — 치아(molar) 형태: 왕관 + 두 개의 치근
  'faq-tooth': (
    <path d="M12 3C9.5 3 7 4.5 7 7c0 1.8 1 3.2 2.5 4L9.5 16c0 2.5.5 5 1.5 5 .3 0 .7-.5 1-.5.3 0 .7.5 1 .5 1 0 1.5-2.5 1.5-5V11c1.5-.8 2.5-2.2 2.5-4 0-2.5-2.5-4-5-4z" />
  ),

  // 교정 — 스마일 얼굴: 원 + 곡선 입꼬리 + 눈
  'faq-smile': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5c.9 1.8 5.1 1.8 7 0" />
      <circle cx="9.5" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="10" r="1" fill="currentColor" stroke="none" />
    </>
  ),

  // 심미치료 — 스파클(방사선 + 중심 원)
  'faq-sparkle': (
    <>
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M15.6 8.4l2.8-2.8M5.6 18.4l2.8-2.8" />
    </>
  ),

  // 수면·진정치료 — 초승달
  'faq-moon': (
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  ),

  // 치주·잇몸 — 방패 + 십자(의료)
  'faq-shield': (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12h6M12 9v6" />
    </>
  ),

  // 이용 안내 — 정보 원형
  'faq-info': (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 17v-5" />
      <circle cx="12" cy="8" r=".5" fill="currentColor" />
    </>
  ),
};

export default function Icon({ name, size = 20 }) {
  return (
    <svg className="ic" width={size} height={size} viewBox="0 0 24 24">
      {PATHS[name]}
    </svg>
  );
}
