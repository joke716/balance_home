import { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';

// ※ 카카오 개발자센터(https://developers.kakao.com)에서 발급받은 JavaScript 앱 키를 입력하세요.
const KAKAO_APP_KEY = 'YOUR_KAKAO_APP_KEY';

const LAT = 37.39543;
const LNG = 127.11074;
const KAKAO_MAP_LINK = `https://map.kakao.com/link/map/밸런스치과병원,${LAT},${LNG}`;

export default function LocationMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    function initMap() {
      const kakao = window.kakao;
      if (!kakao || !kakao.maps) return;

      kakao.maps.load(() => {
        const center = new kakao.maps.LatLng(LAT, LNG);
        const map = new kakao.maps.Map(mapRef.current, {
          center,
          level: 3,
        });

        // 커스텀 오버레이 마커
        const overlayContent = `
          <div style="
            background: #2f6e68;
            color: #fff;
            padding: 7px 14px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: -0.01em;
            white-space: nowrap;
            box-shadow: 0 4px 14px rgba(47,110,104,0.35);
            font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
            cursor: pointer;
          ">📍 밸런스치과병원</div>`;

        const overlay = new kakao.maps.CustomOverlay({
          position: center,
          content: overlayContent,
          yAnchor: 1.4,
        });
        overlay.setMap(map);

        // 인포윈도우
        const infoWindow = new kakao.maps.InfoWindow({
          position: center,
          content: `
            <div style="
              padding: 12px 16px;
              font-size: 13px;
              line-height: 1.7;
              color: #1c1e1d;
              font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
              min-width: 190px;
            ">
              <strong style="font-size: 14px; display:block; margin-bottom:2px;">밸런스치과병원</strong>
              경기 성남시 분당구 백현동 535<br/>그레이츠 판교 3층
            </div>`,
          removable: true,
        });

        // 오버레이 클릭 시 인포윈도우 토글
        overlay.getContent().addEventListener('click', () => {
          infoWindow.getMap() ? infoWindow.close() : infoWindow.open(map);
        });
      });
    }

    if (window.kakao && window.kakao.maps) {
      initMap();
      return;
    }

    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`;
    script.async = true;
    script.onload = initMap;
    script.onerror = () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = `
          <div style="
            display:flex; flex-direction:column; align-items:center; justify-content:center;
            height:100%; gap:12px; color:#6b6e6b; font-size:14px; text-align:center; padding:20px;
          ">
            <span style="font-size:36px;">🗺️</span>
            <strong style="color:#1c1e1d;">카카오맵 API 키 설정 필요</strong>
            <span>LocationMap.jsx 상단의 KAKAO_APP_KEY를<br/>카카오 개발자센터 JavaScript 앱 키로 교체해 주세요.</span>
          </div>`;
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <section style={{ background: 'var(--paper-2)', padding: '72px 0 0' }}>
      <div className="container" style={{ marginBottom: 36 }}>
        <div className="section-label">오시는 길</div>
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          판교역 2번 출구 바로 앞
        </h2>
      </div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'min(560px, 60vh)',
          minHeight: 420,
          overflow: 'hidden',
        }}
      >
        {/* 카카오맵 렌더링 영역 */}
        <div
          ref={mapRef}
          style={{ width: '100%', height: '100%', display: 'block' }}
        />

        {/* 정보 카드 */}
        <div
          className="map-card"
          style={{
            position: 'absolute',
            left: 'clamp(18px, 4vw, 48px)',
            bottom: 'clamp(18px, 4vw, 48px)',
            width: 'min(360px, calc(100% - 36px))',
            background: '#fff',
            borderRadius: 14,
            padding: 24,
            boxShadow:
              '0 12px 40px rgba(28,30,29,0.16), 0 2px 6px rgba(28,30,29,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: 'var(--primary)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 6,
              }}
            >
              주소
            </div>
            <div
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: 'var(--ink)',
                letterSpacing: '-0.01em',
              }}
            >
              경기도 성남시 분당구 백현동 535
              <br />
              그레이츠 판교(전 크래프톤타워) 3층
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--primary)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: 4,
                }}
              >
                지하철
              </div>
              <div
                style={{
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: 'var(--ink-2)',
                  letterSpacing: '-0.01em',
                }}
              >
                신분당선 판교역
                <br />2번 출구 앞
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--primary)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: 4,
                }}
              >
                연락처
              </div>
              <a
                href="tel:031-622-7528"
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: 'var(--ink)',
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-display)',
                  display: 'block',
                }}
              >
                031-622-7528
              </a>
            </div>
          </div>
          <a
            href={KAKAO_MAP_LINK}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-primary"
            style={{ justifyContent: 'center', textDecoration: 'none' }}
          >
            <Icon name="map-pin" size={16} /> 카카오맵에서 보기
          </a>
        </div>
      </div>
    </section>
  );
}
