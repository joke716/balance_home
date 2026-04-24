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
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--ink-2)',
          letterSpacing: '-0.01em',
        }}
      >
        {label}
        {required && <span style={{ color: 'var(--danger)', marginLeft: 3 }}>*</span>}
      </span>
      {children}
    </label>
  );
}

export default function BookingCTA({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    treatment: '임플란트',
    notes: '',
  });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    onSubmit('Balance AI 상담 요청이 접수되었습니다.');
    setForm({ name: '', phone: '', treatment: '임플란트', notes: '' });
  };
  return (
    <section id="booking" className="section" style={{ background: 'var(--paper)' }}>
      <div className="container" style={{ maxWidth: 880 }}>
        <div
          style={{
            background: '#fff',
            borderRadius: 20,
            padding: '40px 32px',
            boxShadow:
              '0 16px 40px rgba(28,30,29,0.06), 0 4px 12px rgba(28,30,29,0.04)',
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
          <p
            style={{
              fontSize: 15,
              color: 'var(--ink-3)',
              margin: '0 0 28px 0',
              letterSpacing: '-0.01em',
            }}
          >
            평일 오전 10시부터 오후 7시까지. 토요일은 오후 2시까지 진료합니다.
          </p>
          <form
            onSubmit={submit}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 20px' }}
          >
            <Field label="이름" required>
              <input
                required
                value={form.name}
                onChange={set('name')}
                placeholder="김환자"
                style={inputStyle}
              />
            </Field>
            <Field label="연락처" required>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                placeholder="010-0000-0000"
                style={inputStyle}
              />
            </Field>
            <Field label="희망 진료">
              <select value={form.treatment} onChange={set('treatment')} style={inputStyle}>
                {['임플란트', '교정', '심미치료', '보철·보존', '기타 상담'].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field label="희망 시간대">
              <select style={inputStyle} defaultValue="평일 오전">
                {['평일 오전', '평일 오후', '평일 저녁', '토요일'].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <div style={{ gridColumn: '1 / -1' }}>
              <Field label="추가 메시지 (선택)">
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={set('notes')}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }}
                  placeholder="증상이나 궁금한 점을 자유롭게 적어주세요."
                />
              </Field>
            </div>
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
              <button type="submit" className="btn btn-primary btn-lg">
                예약 요청 보내기
              </button>
              <div
                style={{
                  fontSize: 12,
                  color: 'var(--ink-3)',
                  letterSpacing: '-0.01em',
                }}
              >
                * 개인정보는 상담 목적 외에 사용되지 않습니다.
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
