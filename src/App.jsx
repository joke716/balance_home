import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TreatmentGrid from './components/TreatmentGrid.jsx';
import DirectorMessage from './components/DirectorMessage.jsx';
import DoctorsGrid from './components/DoctorsGrid.jsx';
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
  const scrollToBooking = () => {
    document
      .getElementById('booking')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div data-screen-label="Home">
        <Header onBookClick={scrollToBooking} />
        <Hero onBookClick={scrollToBooking} />
        <TreatmentGrid onSelect={(it) => setModal(it)} />
        <DirectorMessage />
        <DoctorsGrid />
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
            scrollToBooking();
          }}
        />
        {toast && <div className="toast">✓ {toast}</div>}
      </div>
    </>
  );
}
