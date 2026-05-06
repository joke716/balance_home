import { useState } from 'react';
import { LangProvider } from './i18n/LangContext.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TreatmentGrid from './components/TreatmentGrid.jsx';
import DirectorMessage from './components/DirectorMessage.jsx';
import DoctorsGrid from './components/DoctorsGrid.jsx';
import ClinicPhilosophy from './components/ClinicPhilosophy.jsx';
import FAQ from './components/FAQ.jsx';
import BalanceAIChat from './components/BalanceAIChat.jsx';
import LocationMap from './components/LocationMap.jsx';
import BookingCTA from './components/BookingCTA.jsx';
import Footer from './components/Footer.jsx';
import TreatmentModal from './components/TreatmentModal.jsx';

export default function App() {
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  };
  const scrollToId = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const scrollToBooking = () => scrollToId('booking');
  const scrollToBalanceAI = () => scrollToId('balance-ai');

  return (
    <LangProvider>
    <>
      <div data-screen-label="Home">
        <Header onBookClick={scrollToBalanceAI} onConsultClick={scrollToBooking} />
        <Hero onBookClick={scrollToBalanceAI} />
        <TreatmentGrid onSelect={(it) => setModal(it)} />
        <DirectorMessage />
        <DoctorsGrid />
        <ClinicPhilosophy />
        <FAQ />
        <BalanceAIChat />
        <LocationMap />
        <BookingCTA onSubmit={showToast} />
        <Footer />

        <TreatmentModal
          item={modal}
          onClose={() => setModal(null)}
          onBook={() => {
            setModal(null);
            scrollToBalanceAI();
          }}
        />
        {toast && <div className="toast">✓ {toast}</div>}
      </div>
    </>
    </LangProvider>
  );
}
