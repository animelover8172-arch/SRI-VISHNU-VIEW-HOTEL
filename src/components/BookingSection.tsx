import { useState } from 'react';
import { MessageCircle, Calendar, Users, Phone, User, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';

interface BookingSectionProps {
  initialRoom?: string;
}

export default function BookingSection({ initialRoom }: BookingSectionProps) {
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [selectedRoom, setSelectedRoom] = useState(initialRoom || 'Deluxe Heritage King Room');
  const [specialRequest, setSpecialRequest] = useState('');
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  // Generate clean WhatsApp pre-filled link
  const generateWhatsAppLink = () => {
    const text = `Namaste Sri Vishnu View Hotel,

I would like to reserve a stay with you. Here are my booking details:

• Hotel: ${HOTEL_INFO.name} (${HOTEL_INFO.nameHindi})
• Location: Chand Chaura, Vishnupad Rd, Gaya, Bihar
• Guest Name: ${guestName.trim() || 'Guest'}
• Phone: ${phone.trim() || 'Not specified'}
• Preferred Room: ${selectedRoom}
• Check-in Date: ${checkIn || 'To be confirmed'}
• Check-out Date: ${checkOut || 'To be confirmed'}
• Number of Guests: ${guests}
• Special Requests: ${specialRequest.trim() || 'None / Pilgrim darshan assistance'}

Kindly confirm room availability and current best direct tariff. Thank you!`;

    return `https://wa.me/${HOTEL_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() && !phone.trim()) {
      setSubmittedStatus('Please provide your name or phone number so we can address you properly.');
      return;
    }
    const url = generateWhatsAppLink();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn) {
      setSubmittedStatus('Please select your preferred check-in date.');
      return;
    }
    setSubmittedStatus('redirecting');
    const url = generateWhatsAppLink();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="booking"
      className="py-28 sm:py-36 bg-[#0D0D0B] text-[#F7F3EA] luxury-dark-grain relative overflow-hidden"
    >
      {/* Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              RESERVATIONS &bull; GAYA
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2
            id="booking-main-heading"
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#F7F3EA] font-normal leading-tight tracking-[0.02em] mb-6"
          >
            Your Stay{' '}
            <span className="italic font-cormorant text-[#E1BE4A]">
              Begins Here.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A7A49C] leading-relaxed font-sans font-light max-w-2xl mx-auto">
            Direct reservation guarantees you personalized attention, authentic pilgrim
            guidance, and transparent tariffs with no hidden third-party fees.
          </p>
        </div>

        {/* Luxury Booking Panel Card (Deep Dark Luxury Container) */}
        <div className="max-w-4xl mx-auto bg-[#080807] text-[#F7F3EA] border border-[#D4AF37]/35 rounded-sm p-8 sm:p-12 shadow-2xl relative">
          
          {/* Subtle Top Gold Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-[#E1BE4A] to-[#D4AF37]" />

          {submittedStatus && submittedStatus !== 'redirecting' && (
            <div className="mb-6 p-4 bg-[#1A1916] border border-[#D4AF37]/40 rounded-sm flex items-center space-x-3 text-xs text-[#E1BE4A]">
              <AlertCircle className="w-4 h-4 shrink-0 text-[#D4AF37]" />
              <span>{submittedStatus}</span>
            </div>
          )}

          <form onSubmit={handleCheckAvailability} className="space-y-6">
            
            {/* Top Row: Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              
              {/* Check-in */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-semibold flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Check-in Date</span>
                </label>
                <input
                  type="date"
                  id="booking-checkin"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#12110F] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F7F3EA] px-4 py-3 text-xs rounded-sm focus:outline-none transition-colors"
                />
              </div>

              {/* Check-out */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-semibold flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Check-out Date</span>
                </label>
                <input
                  type="date"
                  id="booking-checkout"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#12110F] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F7F3EA] px-4 py-3 text-xs rounded-sm focus:outline-none transition-colors"
                />
              </div>

              {/* Guests */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-semibold flex items-center space-x-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Number of Guests</span>
                </label>
                <select
                  id="booking-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#12110F] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F7F3EA] px-4 py-3 text-xs rounded-sm focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests (Couple / Pair)</option>
                  <option value="3 Guests">3 Guests</option>
                  <option value="4 Guests (Family)">4 Guests (Family Suite)</option>
                  <option value="5+ Guests (Group)">5+ Guests (Pilgrim Group)</option>
                </select>
              </div>

            </div>

            {/* Middle Row: Room Category, Name, Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              
              {/* Room Category */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-semibold">
                  Preferred Room Category
                </label>
                <select
                  id="booking-room-type"
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full bg-[#12110F] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F7F3EA] px-4 py-3 text-xs rounded-sm focus:outline-none transition-colors cursor-pointer"
                >
                  {ROOMS_DATA.map((r) => (
                    <option key={r.id} value={r.name}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Guest Full Name */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-semibold flex items-center space-x-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  id="booking-guest-name"
                  placeholder="e.g., Rajeshwar Sharma"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-[#12110F] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F7F3EA] placeholder-[#A7A49C]/50 px-4 py-3 text-xs rounded-sm focus:outline-none transition-colors"
                />
              </div>

              {/* Contact Phone */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-semibold flex items-center space-x-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Phone / Mobile</span>
                </label>
                <input
                  type="tel"
                  id="booking-phone"
                  placeholder="e.g., 070915 90500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#12110F] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F7F3EA] placeholder-[#A7A49C]/50 px-4 py-3 text-xs rounded-sm focus:outline-none transition-colors"
                />
              </div>

            </div>

            {/* Special Request */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-semibold flex items-center space-x-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Special Request (Optional)</span>
              </label>
              <textarea
                id="booking-special-request"
                rows={2}
                placeholder="E.g., Early morning arrival for Vishnupad darshan, ground floor room for senior citizens, pure satvik meals..."
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                className="w-full bg-[#12110F] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F7F3EA] placeholder-[#A7A49C]/50 px-4 py-2.5 text-xs rounded-sm focus:outline-none transition-colors"
              />
            </div>

            {/* Transparent Note */}
            <div className="pt-2 flex items-center space-x-2 text-[11px] text-[#A7A49C] font-sans">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>
                Direct reservations are assisted by hotel reception via WhatsApp ({HOTEL_INFO.phoneDisplay}) or direct phone call.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Check Availability */}
              <button
                type="submit"
                id="booking-check-avail-btn"
                className="bg-[#D4AF37] hover:bg-[#E1BE4A] text-[#080807] text-xs font-bold uppercase tracking-[0.22em] py-4 px-6 rounded-full transition-all duration-300 text-center shadow-lg shadow-[#D4AF37]/25 active:scale-98 cursor-pointer"
              >
                CHECK AVAILABILITY
              </button>

              {/* WhatsApp Booking Direct */}
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                id="booking-whatsapp-btn"
                className="bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/60 text-[#F7F3EA] text-xs font-semibold uppercase tracking-[0.22em] py-4 px-6 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WHATSAPP BOOKING</span>
              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
