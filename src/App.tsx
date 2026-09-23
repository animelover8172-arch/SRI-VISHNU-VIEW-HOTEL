import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Rooms from './components/Rooms';
import Experience from './components/Experience';
import GayaGuide from './components/GayaGuide';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import BookingSection from './components/BookingSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedRoom, setPreselectedRoom] = useState('Deluxe Heritage King Room');

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const handleSelectRoomForBooking = (roomName: string) => {
    setPreselectedRoom(roomName);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080807] text-[#F7F3EA] flex flex-col selection:bg-[#D4AF37] selection:text-[#080807] overflow-x-hidden">
      {/* Floating Main Luxury Navigation */}
      <Navbar onOpenBooking={handleOpenBookingModal} />

      {/* Main Experience Flow */}
      <main className="flex-1">
        {/* Fullscreen Hero: Cinematic Hotel Arrival */}
        <Hero onOpenBooking={handleOpenBookingModal} />

        {/* Section 01: Hotel Introduction (Magazine-Style Editorial) */}
        <Introduction onOpenBooking={handleOpenBookingModal} />

        {/* Section 02: The Stay (Horizontal Storytelling & Accommodations) */}
        <Rooms onSelectRoomForBooking={handleSelectRoomForBooking} />

        {/* Section 03: Signature Hotel Experience (Alternating Luxury Features) */}
        <Experience onOpenBooking={handleOpenBookingModal} />

        {/* Section 04: Gaya Experience (Immersive Destination Guide) */}
        <GayaGuide />

        {/* Section 05: Architectural Gallery (Editorial Masonry & Lightbox) */}
        <Gallery />

        {/* Section 06: Guest Impressions (Google Reviews & Verified Ratings) */}
        <Reviews />

        {/* Section 07: Booking Experience (Luxury Reservation Concierge & WhatsApp) */}
        <BookingSection initialRoom={preselectedRoom} />

        {/* Section 08: Location (Split-Screen Address & Map) */}
        <LocationSection />

        {/* Section 09: Contact (Minimal Luxury Contact) */}
        <ContactSection />
      </main>

      {/* Architectural Luxury Footer */}
      <Footer onOpenBooking={handleOpenBookingModal} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        preselectedRoom={preselectedRoom}
      />

      {/* Floating Concierge WhatsApp, Scroll Progress & Back-to-Top */}
      <FloatingActions onOpenBooking={handleOpenBookingModal} />
    </div>
  );
}
