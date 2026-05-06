import { useState } from 'react';

const inputStyle = {
  fontFamily: 'inherit',
  fontSize: 15,
  letterSpacing: '-0.01em',
  background: '#fff',
  border: '1px solid var(--paper-3)',
  borderRadius: 6,
  padding: '12px 14px',
  width: '100%',
  color: 'var(--ink)',
  outline: 'none',
};

function Field({ label, required, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-2)', letterSpacing: '-0.01em' }}>
        {label}
        {required && <span style={{ color: 'var(--danger)', marginLeft: 3 }}>*</span>}
      </span>
      {children}
    </label>
  );
}

const API_URL = 'https://www.mediqr.io/api/admin/question';

// 오늘 날짜 (YYYY-MM-DD)
const todayStr = new Date().toISOString().split('T')[0];

// 요일에 따라 선택 가능한 시간대 생성
// 평일: 10:00 ~ 19:00, 주말: 10:00 ~ 14:00 (30분 단위)
function getTimeSlots(dateStr) {
  if (!dateStr) return [];
  const d = new Date(dateStr + 'T12:00:00');
  const day = d.getDay(); // 0=일, 6=토
  const isWeekend = day === 0 || day === 6;
  const maxHour = isWeekend ? 14 : 19;
  const slots = [];
  for (let h = 10; h <= maxHour; h++) {
    slots.push(`${String(h).padStart(2, '0')}:00`);
    if (h < maxHour) slots.push(`${String(h).padStart(2, '0')}:30`);
  }
  return slots;
}

function formatDateKo(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T12:00:00');
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 (${days[d.getDay()]})`;
}

export default function BookingCTA({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    treatment: '임플란트',
    preferredDate: '',
    preferredTimeSlot: '',
    notes: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // 날짜 변경 시 시간 첫 번째 슬롯으로 초기화
  const handleDateChange = (e) => {
    const date = e.target.value;
    const slots = getTimeSlots(date);
    setForm((f) => ({ ...f, preferredDate: date, preferredTimeSlot: slots[0] || '' }));
  };

  const timeSlots = getTimeSlots(form.preferredDate);
  const isWeekend = form.preferredDate
    ? [0, 6].includes(new Date(form.preferredDate + 'T12:00:00').getDay())
    : false;

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const visitInfo = form.preferredDate && form.preferredTimeSlot
        ? `${formatDateKo(form.preferredDate)} ${form.preferredTimeSlot}`
        : '';
      const message = [
        visitInfo ? `희망 방문일시: ${visitInfo}` : '',
        form.notes ? `추가 메시지: ${form.notes}` : '',
      ].filter(Boolean).join('\n');

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tags: [form.treatment],
          message,
          replyMethod: '전화',
          replyContact: form.phone,
          name: form.name,
          status: 'pending',
        }),
      });

      if (!res.ok) throw new Error(`서버 오류 (${res.status})`);

      setStatus('success');
      setForm({ name: '', phone: '', treatment: '임플란트', preferredDate: '', preferredTimeSlot: '', notes: '' });
      onSubmit('예약 요청이 접수되었습니다. 빠르게 연락드리겠습니다.');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || '요청 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    }
  };

  const isLoading = status === 'loading';

  return (
    <section id="booking" className="section" style={{ background: 'var(--paper)' }}>
      <div className="container" style={{ maxWidth: 880 }}>
        <div
          style={{
            background: '#fff',
            borderRadius: 20,
            padding: '40px 32px',
            boxShadow: '0 16px 40px rgba(28,30,29,0.06), 0 4px 12px rgba(28,30,29,0.04)',
          }}
        >
          <div className="section-label">Balance AI 상담</div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 28,
              lineHeight: '40px',
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              margin: '0 0 8px 0',
            }}
          >
            편하신 시간에 연락드리겠습니다
          </h2>
          <p style={{ fontSize: 15, color: 'var(--ink-3)', margin: '0 0 28px 0', letterSpacing: '-0.01em' }}>
            평일 오전 10시 ~ 오후 7시 · 토·일 오전 10시 ~ 오후 2시
          </p>

          <form
            onSubmit={submit}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 20px' }}
          >
            {/* 이름 */}
            <Field label="이름" required>
              <input
                required
                value={form.name}
                onChange={set('name')}
                placeholder="김환자"
                style={inputStyle}
                disabled={isLoading}
              />
            </Field>

            {/* 연락처 */}
            <Field label="연락처" required>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                placeholder="010-0000-0000"
                style={inputStyle}
                disabled={isLoading}
              />
            </Field>

            {/* 희망 진료 */}
            <Field label="희망 진료">
              <select value={form.treatment} onChange={set('treatment')} style={inputStyle} disabled={isLoading}>
                {['임플란트', '교정', '심미치료', '보철·보존', '수면치료·진정요법', '기타 상담'].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>

            {/* 희망 방문일 */}
            <Field label="희망 방문일" required>
              <input
                required
                type="date"
                value={form.preferredDate}
                onChange={handleDateChange}
                min={todayStr}
                style={{ ...inputStyle, colorScheme: 'light' }}
                disabled={isLoading}
              />
            </Field>

            {/* 희망 방문시간 — 날짜 선택 후 활성화 */}
            <div style={{ gridColumn: '1 / -1' }}>
              <Field label="희망 방문시간" required>
                {!form.preferredDate ? (
                  <div
                    style={{
                      ...inputStyle,
                      color: 'var(--ink-4)',
                      background: 'var(--paper)',
                      cursor: 'not-allowed',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    날짜를 먼저 선택해 주세요
                  </div>
                ) : (
                  <>
                    {/* 안내 뱃지 */}
                    <div
                      style={{
                        marginBottom: 10,
                        fontSize: 12,
                        color: 'var(--primary)',
                        fontWeight: 600,
                        letterSpacing: '-0.01em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      <span
                        style={{
                          background: 'var(--primary-softer)',
                          borderRadius: 20,
                          padding: '2px 10px',
                        }}
                      >
                        {formatDateKo(form.preferredDate)} ·{' '}
                        {isWeekend ? '10:00 ~ 14:00' : '10:00 ~ 19:00'}
                      </span>
                    </div>

                    {/* 시간 버튼 그리드 */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 8,
                      }}
                    >
                      {timeSlots.map((slot) => {
                        const selected = form.preferredTimeSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            disabled={isLoading}
                            onClick={() => setForm((f) => ({ ...f, preferredTimeSlot: slot }))}
                            style={{
                              fontFamily: 'inherit',
                              fontSize: 13,
                              fontWeight: selected ? 700 : 500,
                              padding: '7px 14px',
                              borderRadius: 8,
                              border: selected
                                ? '1.5px solid var(--primary)'
                                : '1.5px solid var(--paper-3)',
                              background: selected ? 'var(--primary)' : '#fff',
                              color: selected ? '#fff' : 'var(--ink-2)',
                              cursor: isLoading ? 'not-allowed' : 'pointer',
                              transition: 'all 150ms ease',
                              letterSpacing: '-0.01em',
                            }}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>

                    {/* hidden input for required validation */}
                    <input
                      required
                      tabIndex={-1}
                      readOnly
                      value={form.preferredTimeSlot}
                      style={{ opacity: 0, height: 0, width: 0, position: 'absolute', pointerEvents: 'none' }}
                    />
                  </>
                )}
              </Field>
            </div>

            {/* 추가 메시지 */}
            <div style={{ gridColumn: '1 / -1' }}>
              <Field label="추가 메시지 (선택)">
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={set('notes')}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }}
                  placeholder="증상이나 궁금한 점을 자유롭게 적어주세요."
                  disabled={isLoading}
                />
              </Field>
            </div>

            {/* 오류 메시지 */}
            {status === 'error' && (
              <div
                style={{
                  gridColumn: '1 / -1',
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: 8,
                  padding: '10px 14px',
                  fontSize: 13,
                  color: 'var(--danger)',
                  letterSpacing: '-0.01em',
                }}
              >
                ⚠️ {errorMsg}
              </div>
            )}

            {/* 제출 버튼 */}
            <div
              style={{
                gridColumn: '1 / -1',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginTop: 8,
                flexWrap: 'wrap',
              }}
            >
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={isLoading}
                style={{
                  opacity: isLoading ? 0.7 : 1,
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  minWidth: 160,
                }}
              >
                {isLoading ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                      style={{ animation: 'spin 0.8s linear infinite' }}
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    전송 중…
                  </span>
                ) : '예약 요청 보내기'}
              </button>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', letterSpacing: '-0.01em' }}>
                * 개인정보는 상담 목적 외에 사용되지 않습니다.
              </div>
            </div>
          </form>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
