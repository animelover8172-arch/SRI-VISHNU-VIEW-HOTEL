import { useState } from 'react';
import { X, MessageCircle, Calendar, Users, Phone, User, FileText, CheckCircle2 } from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoom?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedRoom = 'Deluxe Heritage King Room'
}: BookingModalProps) {
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [roomType, setRoomType] = useState(preselectedRoom);
  const [specialRequest, setSpecialRequest] = useState('');

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Namaste Sri Vishnu View Hotel,

I would like to inquire about reserving a room at your hotel in Gaya.

• Hotel: ${HOTEL_INFO.name} (${HOTEL_INFO.nameHindi})
• Guest Name: ${guestName.trim() || 'Guest'}
• Contact Phone: ${phone.trim() || 'Not specified'}
• Preferred Room: ${roomType}
• Check-in Date: ${checkIn || 'To be confirmed'}
• Check-out Date: ${checkOut || 'To be confirmed'}
• Number of Guests: ${guests}
• Special Request: ${specialRequest.trim() || 'None / Pilgrim darshan assistance'}

Please share room availability and best direct tariff. Thank you!`;

    const url = `https://wa.me/${HOTEL_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-[#080807]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="booking-modal-container"
        className="bg-[#0D0D0B] border border-[#D4AF37]/35 rounded-sm text-[#F7F3EA] w-full max-w-xl p-6 sm:p-8 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Accent */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#D4AF37] via-[#E1BE4A] to-[#D4AF37]" />

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#D4AF37]/20 mb-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.26em] text-[#D4AF37] block font-semibold">
              SRI VISHNU VIEW HOTEL &bull; GAYA
            </span>
            <h3 className="font-cinzel text-2xl text-[#F7F3EA] mt-1 font-normal">
              Direct Reservation Concierge
            </h3>
            <p className="text-xs text-[#A7A49C] mt-0.5 font-sans font-light">
              Connect directly with our front desk in Chand Chaura
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#A7A49C] hover:text-[#D4AF37] transition-colors rounded-sm hover:bg-white/5 cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppBooking} className="space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] mb-1 font-semibold flex items-center space-x-1">
                <User className="w-3.5 h-3.5" />
                <span>Full Name</span>
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full bg-[#12110F] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F7F3EA] px-3.5 py-2.5 text-xs rounded-sm focus:outline-none placeholder-[#A7A49C]/50"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] mb-1 font-semibold flex items-center space-x-1">
                <Phone className="w-3.5 h-3.5" />
                <span>Phone / Mobile</span>
              </label>
              <input
                type="tel"
                required
                placeholder="e.g., 070915 90500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#12110F] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F7F3EA] px-3.5 py-2.5 text-xs rounded-sm focus:outline-none placeholder-[#A7A49C]/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] mb-1 font-semibold">
              Selected Room Category
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full bg-[#12110F] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F7F3EA] px-3.5 py-2.5 text-xs rounded-sm focus:outline-none cursor-pointer"
            >
              {ROOMS_DATA.map((r) => (
                <option key={r.id} value={r.name}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#D4AF37] mb-1 font-semibold flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>Check-in</span>
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-[#12110F] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F7F3EA] px-2.5 py-2 text-xs rounded-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#D4AF37] mb-1 font-semibold flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>Check-out</span>
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-[#12110F] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F7F3EA] px-2.5 py-2 text-xs rounded-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#D4AF37] mb-1 font-semibold flex items-center space-x-1">
                <Users className="w-3 h-3" />
                <span>Guests</span>
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-[#12110F] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F7F3EA] px-2.5 py-2 text-xs rounded-sm focus:outline-none cursor-pointer"
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4 Guests (Family)">4 Guests</option>
                <option value="5+ (Group)">5+ Guests</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#D4AF37] mb-1 font-semibold flex items-center space-x-1">
              <FileText className="w-3.5 h-3.5" />
              <span>Special Requests</span>
            </label>
            <input
              type="text"
              placeholder="E.g., early morning Vishnupad darshan, ground floor..."
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="w-full bg-[#12110F] border border-[#D4AF37]/25 focus:border-[#D4AF37] text-[#F7F3EA] placeholder-[#A7A49C]/50 px-3.5 py-2 text-xs rounded-sm focus:outline-none"
            />
          </div>

          <div className="pt-2 text-[11px] text-[#A7A49C] flex items-center space-x-2 font-sans">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>Sends your formatted inquiry to our WhatsApp reception desk (+91 70915 90500).</span>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="submit"
              id="modal-submit-whatsapp-btn"
              className="bg-[#25D366] hover:bg-[#20ba59] text-[#FFFFFF] text-xs font-bold uppercase tracking-[0.16em] py-3.5 px-4 rounded-full transition-colors flex items-center justify-center space-x-2 shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CONFIRM VIA WHATSAPP</span>
            </button>

            <a
              href={HOTEL_INFO.phoneTel}
              className="border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-[#F7F3EA] text-xs font-semibold uppercase tracking-[0.16em] py-3.5 px-4 rounded-full transition-colors flex items-center justify-center space-x-2 text-center"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>CALL RECEPTION DIRECTLY</span>
            </a>
          </div>

        </form>
      </div>
    </div>
  );
}
