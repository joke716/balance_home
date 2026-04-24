# 밸런스치과병원 공식 홈페이지

React + Vite로 구성된 밸런스치과병원(Balance Dental Hospital) 공식 홈페이지입니다.

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

Node.js 18+ 권장.

## 프로젝트 구조

```
react-project/
├── index.html              # Vite 엔트리 HTML (폰트 로드)
├── package.json
├── vite.config.js
├── public/
│   └── assets/             # 이미지 · 로고 (정적 자산)
│       ├── hero-tooth.png
│       ├── treatment-*.png
│       ├── tmj-treatment.png
│       ├── doctors/        # 의료진 프로필 사진
│       └── logo/
└── src/
    ├── main.jsx            # 루트 마운트
    ├── App.jsx             # 페이지 조립
    ├── styles/
    │   └── global.css      # 디자인 토큰 + 전역 스타일
    └── components/
        ├── Icon.jsx            # 인라인 SVG 아이콘
        ├── Header.jsx          # 상단 스티키 내비
        ├── Hero.jsx            # 히어로 (3D 치아 이미지)
        ├── TreatmentGrid.jsx   # 진료 카드 스크롤러
        ├── TreatmentModal.jsx  # 진료 상세 모달
        ├── DirectorMessage.jsx # 대표원장 메시지
        ├── DoctorsGrid.jsx     # 의료진 8인 카드
        ├── FAQ.jsx             # 자주 묻는 질문
        ├── LocationMap.jsx     # 구글 지도 + 약도 카드
        ├── BookingCTA.jsx      # Balance AI 상담 폼
        ├── Footer.jsx
        └── MobileBookingBar.jsx # 모바일 플로팅 CTA
```

## 디자인 시스템

모든 색상·타이포·이징은 `src/styles/global.css` 상단의 CSS 변수로 관리됩니다.

- **Primary** `#2F6E68` · **Accent** `#B07A56` · **Paper** `#FAF7F2`
- **본문** Pretendard Variable · **제목** Gowun Batang
- 이미지·폰트 교체는 `public/assets/` 파일만 바꾸면 됩니다.

## 에셋 교체 가이드

- **의료진 사진** → `public/assets/doctors/<name>.jpg` 덮어쓰기. 파일명은 `DoctorsGrid.jsx`의 `DOCTORS` 배열에서 참조.
- **히어로 이미지** → `public/assets/hero-tooth.png`
- **로고** → `public/assets/logo/`

## 배포

`npm run build`는 `dist/` 폴더에 정적 파일을 생성합니다. Vercel · Netlify · Cloudflare Pages 등 모든 정적 호스팅에 그대로 올릴 수 있습니다.

---

© 2026 Balance Dental Hospital
