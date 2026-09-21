import hotelFacadeImg from '../assets/images/sri_vishnu_view_facade_1789987125126.jpg';
import deluxeRoomImg from '../assets/images/regenerated_image_1789987718637.jpg';
import expComfortImg from '../assets/images/regenerated_image_1789987720811.jpg';
import expHospitalityImg from '../assets/images/regenerated_image_1789987722482.jpg';
import expDiningImg from '../assets/images/regenerated_image_1789987725748.jpg';

export interface Room {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  occupancy: string;
  bedType: string;
  amenities: string[];
  priceNote: string;
  image: string;
  fallbackColor: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  image: string;
  badge: string;
}

export interface GayaHighlight {
  id: string;
  title: string;
  hindiTitle: string;
  category: string;
  description: string;
  significance: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  span: string; // Tailwind grid span
  aspect: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  purpose: string;
}

export const HOTEL_INFO = {
  name: "SRI VISHNU VIEW HOTEL",
  nameHindi: "श्री विष्णु व्यू होटल",
  tagline: "Stay Above the Ordinary.",
  subTagline: "A refined stay in the heart of Gaya, where comfort, heritage and warm Indian hospitality come together.",
  address: "Sri Vishnu View Restaurant, Vishnupad Rd, Chand Chaura, Gaya, Bihar 823001",
  landmark: "On Vishnupad Road, Chand Chaura, minutes from Vishnupad Temple Sanctuary & Falgu Ghats",
  phone: "070915 90500",
  phoneDisplay: "+91 70915 90500",
  phoneTel: "tel:07091590500",
  whatsappNumber: "+917091590500",
  whatsappRaw: "917091590500",
  googleRating: "4.4",
  reviewsCount: "720+",
  totalStars: 5,
  checkInTime: "12:00 PM",
  checkOutTime: "11:00 AM",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sri+Vishnu+View+Restaurant+Vishnupad+Rd+Chand+Chaura+Gaya+Bihar+823001",
  developerCredit: {
    name: "RoadsideDeveloper",
    whatsapp: "+91 7654224826",
    call: "+91 8405918172",
  }
};

export const ROOMS_DATA: Room[] = [
  {
    id: "deluxe-heritage",
    name: "Deluxe Heritage King Room",
    category: "Signature Stay",
    tagline: "Spacious tranquility crafted with warm walnut finishes.",
    description: "Designed for discerning pilgrims and leisure travelers seeking supreme comfort. Features a plush king-sized bed, ambient warm lighting, custom wooden millwork, and sound-dampened double glazing for serene rest after temple visits.",
    occupancy: "2 Adults (Extra bed on request)",
    bedType: "1 King Bed",
    amenities: [
      "Individually Controlled AC",
      "High-speed Wi-Fi",
      "Private Modern En-suite",
      "24/7 Hot Water Facility",
      "Room Service & Housekeeping",
      "Direct Pilgrim Ritual Assistance"
    ],
    priceNote: "Contact hotel for current best direct tariff & availability",
    image: deluxeRoomImg,
    fallbackColor: "#5A4030"
  },
  {
    id: "executive-family",
    name: "Executive Family Suite",
    category: "Family & Pilgrimage",
    tagline: "Generous space thoughtfully designed for visiting families.",
    description: "Tailored specially for families arriving in Gaya for holy darshan and Pinda Daan rituals. Generously proportioned with twin double beds, comfortable seating area, spacious luggage storage, and personalized care.",
    occupancy: "4 Adults / Family",
    bedType: "2 Queen/Double Beds",
    amenities: [
      "Double Bed Arrangement",
      "Split Air Conditioning",
      "Spacious Wardrobe & Luggage Area",
      "In-room Pure Dining Service",
      "Complimentary Tea & Coffee Station",
      "Express Laundry & Sanitization"
    ],
    priceNote: "Contact hotel for current best direct tariff & availability",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    fallbackColor: "#211C18"
  },
  {
    id: "premium-comfort",
    name: "Premium Double Room",
    category: "Refined Living",
    tagline: "Understated elegance with essential modern amenities.",
    description: "An inviting retreat offering restful balance with clean architectural lines, refined sandstone tones, premium bedding, and a peaceful atmosphere amidst the spiritual heart of Chand Chaura.",
    occupancy: "2 Guests",
    bedType: "1 Queen Bed or Twin Beds",
    amenities: [
      "Efficient Climate Control",
      "High-Definition Television",
      "Seamless High-Speed Wi-Fi",
      "Modern Shower & Fresh Toiletries",
      "Daily Morning Housekeeping",
      "24-Hour Reception Desk"
    ],
    priceNote: "Contact hotel for current best direct tariff & availability",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    fallbackColor: "#5A4030"
  },
  {
    id: "classic-standard",
    name: "Classic Standard Room",
    category: "Essential Comfort",
    tagline: "Pristine hygiene and practical elegance for the solo or couple traveler.",
    description: "A cozy and immaculate room offering everything you need for a restful stay in Gaya. Equipped with comfortable mattress, fresh linens, spotless private bathroom, and quick access to the in-house restaurant.",
    occupancy: "1 to 2 Guests",
    bedType: "1 Double Bed",
    amenities: [
      "Air Cooling / Air Conditioning",
      "Spotless Sanitized Linens",
      "Attached Private Bathroom",
      "Reliable In-house Dining",
      "Luggage Assistance",
      "Round-the-clock Security"
    ],
    priceNote: "Contact hotel for current best direct tariff & availability",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    fallbackColor: "#8B7B6B"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-comfort",
    title: "Spacious Interiors & Restful Comfort",
    subtitle: "Sanctuary for the Soul",
    description: "Following a day of profound rituals at Vishnupad Temple or exploration across Gaya, retreat to impeccably sanitized spaces appointed with warm walnut accents, crisp cotton linens, and quiet, climate-controlled comfort.",
    highlight: "Designed for restorative rest and quiet reflection in a bustling sacred city.",
    image: expComfortImg,
    badge: "Rest & Wellness"
  },
  {
    id: "exp-hospitality",
    title: "Warm Indian Hospitality",
    subtitle: "Atithi Devo Bhava",
    description: "Our attentive staff understands the unique needs of pilgrims and travelers visiting Gaya. From early morning assistance for temple darshan to arranging local transport and ritual guidance, we ensure you feel cared for like family.",
    highlight: "24/7 front desk assistance, temple timing guidance, and genuine local warmth.",
    image: expHospitalityImg,
    badge: "Dedicated Service"
  },
  {
    id: "exp-dining",
    title: "Sri Vishnu View Restaurant",
    subtitle: "Wholesome & Pure Dining",
    description: "Delight in nutritious, freshly prepared vegetarian meals and North Indian specialties prepared with pure ingredients. Our in-house kitchen caters attentively to satvik preferences, pilgrim dietary customs, and hearty family dinners.",
    highlight: "Fresh, hygienic, flavorful meals served in our dining hall or directly to your room.",
    image: expDiningImg,
    badge: "Culinary Heritage"
  },
  {
    id: "exp-location",
    title: "Convenient Vishnupad Road Location",
    subtitle: "Moments from Sacred Shrines",
    description: "Situated directly on Vishnupad Road in Chand Chaura, our hotel allows you to easily reach the sacred Vishnupad Temple and Falgu River Ghats on foot, sparing you from challenging traffic and long commutes.",
    highlight: "Ideal walking proximity to Chand Chaura market, temples, and pilgrimage centers.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    badge: "Prime Location"
  }
];

export const GAYA_HIGHLIGHTS: GayaHighlight[] = [
  {
    id: "gaya-vishnupad",
    title: "Vishnupad Temple Sanctuary",
    hindiTitle: "विष्णुपद मंदिर",
    category: "Sacred Footprint Shrine",
    description: "Built along the banks of Falgu River, this historic temple enshrines the 40 cm long footprint of Lord Vishnu incised into solid basalt stone, surrounded by an octagonal silver-plated basin.",
    significance: "The spiritual focal point for pilgrims from all across the world.",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gaya-falgu",
    title: "Falgu River & Sacred Ghats",
    hindiTitle: "फल्गु नदी व पवित्र घाट",
    category: "Timeless Riverbanks",
    description: "The revered river of Gaya with its mystical subsurface flow, revered since Vedic times for Shraddha rituals and peaceful morning contemplation amidst rising temple bells.",
    significance: "Site of sacred ablutions and ancient Hindu ancestor remembrance rites.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gaya-mangla",
    title: "Mangla Gauri Shaktipeeth",
    hindiTitle: "माँ मंगला गौरी शक्तिपीठ",
    category: "Ancient Hilltop Shrine",
    description: "Perched atop Bhasmakut hill, this venerable temple is counted among the 18 sacred Maha Shaktipeeths, celebrated in Padma Purana and Vayu Purana.",
    significance: "A center of divine feminine energy and spiritual pilgrimage in Gaya.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gaya-bodh",
    title: "Mahabodhi Temple & Bodh Gaya",
    hindiTitle: "महाबोधि महाविहार",
    category: "UNESCO World Heritage Site",
    description: "Located within short driving distance from Gaya city, the iconic pyramidical spire marks the sacred Bodhi Tree where Siddhartha Gautama attained enlightenment.",
    significance: "One of the world's most revered cultural and spiritual destinations.",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=900&q=80"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Sri Vishnu View Hotel & Restaurant Facade",
    category: "Architecture",
    image: hotelFacadeImg,
    span: "col-span-12 md:col-span-8 row-span-2",
    aspect: "aspect-[16/10]"
  },
  {
    id: "gal-2",
    title: "Refined Walnut Bedroom Suite",
    category: "Interiors",
    image: deluxeRoomImg,
    span: "col-span-12 md:col-span-4",
    aspect: "aspect-[4/3]"
  },
  {
    id: "gal-3",
    title: "Sri Vishnu View Dining Ambience",
    category: "Restaurant",
    image: expDiningImg,
    span: "col-span-12 md:col-span-4",
    aspect: "aspect-[4/3]"
  },
  {
    id: "gal-4",
    title: "Serene Courtyard & Heritage Lighting",
    category: "Atmosphere",
    image: expComfortImg,
    span: "col-span-12 md:col-span-4",
    aspect: "aspect-[3/4]"
  },
  {
    id: "gal-5",
    title: "Executive Family Accommodations",
    category: "Suites",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-12 md:col-span-8",
    aspect: "aspect-[16/9]"
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Rajeshwar Sharma",
    location: "Patna, Bihar",
    rating: 5,
    date: "Google Verified Review",
    comment: "Very convenient location for Vishnupad darshan in Gaya. The hotel rooms are clean, well-kept, and the staff was extremely polite and helpful during our family's religious visit. Having the restaurant on-site was a huge blessing.",
    purpose: "Family Pilgrimage"
  },
  {
    id: "rev-2",
    author: "Anand K. Verma",
    location: "Varanasi, UP",
    rating: 5,
    date: "Google Verified Review",
    comment: "Stayed here for 3 days during Pitru Paksha. Walking distance to Chand Chaura and Vishnupad temple saved us so much time and hassle. Hot water, prompt room service, and peaceful environment. Highly recommended in Gaya.",
    purpose: "Spiritual Visit"
  },
  {
    id: "rev-3",
    author: "Meenakshi Sundaram",
    location: "Bengaluru, Karnataka",
    rating: 5,
    date: "Google Verified Review",
    comment: "Clean rooms, respectful staff, and reliable food. Travelling with elderly parents can be challenging, but the staff assisted us with warmth and arranged everything we needed for temple rituals.",
    purpose: "Family Stay"
  },
  {
    id: "rev-4",
    author: "Pradeep Kumar Mishra",
    location: "Kolkata, West Bengal",
    rating: 4.5,
    date: "Google Verified Review",
    comment: "One of the best choices near Vishnupad Road. Good hygiene, comfortable beds, cooperative management, and reasonable rates. Will definitely choose Sri Vishnu View Hotel again whenever visiting Gaya.",
    purpose: "Devotional Travel"
  }
];
