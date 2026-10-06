// ==========================================
// UTTAR PRADESH TOURISM - TOUR PACKAGES DATA
// ONLY destinations that have dedicated pages:
// 1. Agra (/agra)
// 2. Varanasi (/varanasi)
// 3. Ayodhya (/ayodhya)
// 4. Lucknow (/lucknow)
// ==========================================

import tajMain from "../../assets/tajmahal.jpg";
import varanasiMain from "../../assets/Varanasi.jpg";
import ayodhyaMain from "../../assets/Ayodhya.jpg";
import lucknowMain from "../../assets/Lucknow.jpg";

import tajSunrise from "../../assets/gallery/tajmahal/taj1.jpg";
import agraFortImg from "../Agra/agra-fort.webp";
import itmadUdDaulah from "../Agra/itmad-ud-daulah.webp";

import varanasiGhatImg from "../varanasi/AssiGhat.jpg";
import varanasiAartiImg from "../../assets/gallery/varanasi/varanasi4.jpg";
import varanasiVishwanath from "../varanasi/dash.jpg";

import ramMandirImg from "../ayodhya/RamkiPaidi.jpg";
import hanumanGarhiImg from "../ayodhya/Hanumangarhi.jpg";
import kanakBhawanImg from "../ayodhya/KanakBhawan.jpg";

import baraImambaraImg from "../lucknow/BaraImambara.jpg";
import rumiDarwazaImg from "../lucknow/RumiDarwaza.jpg";
import ambedkarParkImg from "../lucknow/AmbedkarPark.jpg";

export const TOUR_PACKAGES = [
  // ================= 1. AGRA (/agra) =================
  {
    id: "agra-sunrise-wonder",
    title: "Agra & Taj Mahal Sunrise Wonder Tour",
    tagline: "Witness the marble monument glow in golden morning light with guided royal heritage walk",
    destination: "Agra",
    cityRoute: "/agra",
    type: "Heritage & Architecture",
    badge: "Best Seller",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    rating: "4.9",
    reviewsCount: 184,
    image: tajSunrise,
    originalPrice: 6499,
    discountedPrice: 4499,
    discountPercentage: 30,
    highlights: [
      "Taj Mahal Sunrise VIP Guided Entry",
      "Agra Fort & Diwan-i-Khas Exploration",
      "Mehtab Bagh Sunset Reflection View",
      "Authentic Agra Petha & Mughlai Walk",
      "4-Star Heritage Hotel Stay with Breakfast",
      "Private AC Sedan with Chauffeur",
    ],
    inclusions: [
      "1 Night accommodation in 4-Star hotel",
      "Breakfast included at hotel",
      "Private AC vehicle for all transfers & sightseeing",
      "Government-approved English/Hindi speaking guide",
      "Monument entry assistance & parking charges",
    ],
    exclusions: [
      "Monument entrance tickets (paid directly)",
      "Lunches, dinners, and personal expenses",
      "Camera and drone fees",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Agra & Sunset at Mehtab Bagh",
        desc: "Pickup from Agra Cantt / Delhi. Check in to your hotel. Afternoon visit to the majestic Agra Fort and Itmad-ud-Daulah. Enjoy sunset views of Taj Mahal across Yamuna from Mehtab Bagh.",
      },
      {
        day: 2,
        title: "Taj Mahal Dawn Wonder & Local Craft Tour",
        desc: "Early morning sunrise tour of the Taj Mahal. Return to hotel for breakfast. Explore the marble inlay artisan workshops and taste authentic Agra Petha. Afternoon departure.",
      },
    ],
  },
  {
    id: "agra-fatehpur-grandeur",
    title: "Mughal Grandeur: Agra & Fatehpur Sikri Discovery",
    tagline: "Explore the deserted red-sandstone royal city of Akbar and the timeless wonders of Agra",
    destination: "Agra",
    cityRoute: "/agra",
    type: "Heritage & Architecture",
    badge: "UNESCO Special",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    rating: "4.8",
    reviewsCount: 96,
    image: agraFortImg,
    originalPrice: 9999,
    discountedPrice: 6999,
    discountPercentage: 30,
    highlights: [
      "Fatehpur Sikri & Buland Darwaza Expedition",
      "Salim Chishti Dargah Spiritual Visit",
      "Taj Mahal & Agra Fort Comprehensive Tour",
      "Akbar's Tomb at Sikandra Visit",
      "2 Nights Stay in Luxury Resort",
      "Dedicated Heritage Historian Guide",
    ],
    inclusions: [
      "2 Nights stay in premium hotel/resort",
      "Daily gourmet buffet breakfast",
      "Private AC transport for full itinerary",
      "Guided tours at all monuments",
      "Toll taxes, fuel, driver allowances",
    ],
    exclusions: [
      "Airfare / Train tickets to Agra",
      "Personal laundry and beverage bills",
    ],
    itinerary: [
      {
        day: 1,
        title: "Agra Fort & Sikandra",
        desc: "Welcome to Agra. Check-in and refresh. Tour the grand red sandstone Agra Fort and Akbar's mausoleum in Sikandra. Evening leisure at Sadar Bazaar.",
      },
      {
        day: 2,
        title: "Fatehpur Sikri Ghost City Expedition",
        desc: "Day excursion to the UNESCO World Heritage Site of Fatehpur Sikri, Jama Masjid, Buland Darwaza, and Panch Mahal. Return for a relaxing evening.",
      },
      {
        day: 3,
        title: "Taj Mahal & Departure",
        desc: "Morning Taj Mahal tour. Souvenir shopping and transfer to railway station or airport with sweet memories.",
      },
    ],
  },
  {
    id: "agra-artisan-heritage-escape",
    title: "Agra Royal Artisans & Mughal Heritage Retreat",
    tagline: "Discover delicate marble pietra dura craftsmanship, Baby Taj, and timeless Mughal garden vistas",
    destination: "Agra",
    cityRoute: "/agra",
    type: "Heritage & Architecture",
    badge: "Heritage Retreat",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    rating: "4.9",
    reviewsCount: 72,
    image: itmadUdDaulah,
    originalPrice: 5999,
    discountedPrice: 4199,
    discountPercentage: 30,
    highlights: [
      "Itmad-ud-Daulah (Baby Taj) Intricate Marble Tour",
      "Pietra Dura Inlay Artisan Demonstration",
      "Agra Fort Pearl Mosque & Sheesh Mahal",
      "Mehtab Bagh Riverfront Viewpoints",
      "Chauffeur-Driven AC Transfers",
      "Breakfast & Stay at Heritage Hotel",
    ],
    inclusions: [
      "1 Night stay in boutique heritage hotel",
      "Breakfast included",
      "All monument sightseeing by private AC car",
    ],
    exclusions: ["Monument entry fees", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        title: "Itmad-ud-Daulah & Sunset Gardens",
        desc: "Visit the jewel-box Itmad-ud-Daulah and Mehtab Bagh gardens overlooking the Taj Mahal at sunset.",
      },
      {
        day: 2,
        title: "Taj Mahal & Marble Inlay Studios",
        desc: "Morning Taj Mahal visit, artisan workshop tour, and departure.",
      },
    ],
  },

  // ================= 2. VARANASI (/varanasi) =================
  {
    id: "varanasi-spiritual-yatra",
    title: "Divine Varanasi & Kashi Vishwanath Spiritual Yatra",
    tagline: "Immerse in eternal spirituality with VIP temple darshan, holy boat ride, and mesmerizing Ganga Aarti",
    destination: "Varanasi",
    cityRoute: "/varanasi",
    type: "Spiritual & Pilgrimage",
    badge: "Top Rated",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    rating: "4.9",
    reviewsCount: 310,
    image: varanasiAartiImg,
    originalPrice: 8499,
    discountedPrice: 5999,
    discountPercentage: 29,
    highlights: [
      "Kashi Vishwanath Corridor VIP Darshan Assistance",
      "Private Sunrise Boat Cruise along 84 Ghats",
      "Reserved Front-Row Boat for Dashashwamedh Maha Aarti",
      "Assi Ghat Morning Ganga Aarti & Vedic Chanting",
      "Banarasi Silk Weaving Masterclass & Chaat Walk",
      "Hotel near Ghats with AC Transfers",
    ],
    inclusions: [
      "2 Nights accommodation in riverfront / premium hotel",
      "Daily breakfast included",
      "Exclusive morning & evening private boat rides on Ganges",
      "Kashi Vishwanath temple entry assistance",
      "Airport/Railway station pickup and drop by AC vehicle",
    ],
    exclusions: [
      "Special VIP pooja receipts (if personalized)",
      "Lunch, dinner, and personal shopping",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kashi & Grand Evening Ganga Aarti",
        desc: "Arrival pickup. Check in to hotel. Head to Dashashwamedh Ghat for the world-famous evening Ganga Aarti from a reserved boat. Walk through vibrant Vishwanath Gali.",
      },
      {
        day: 2,
        title: "Subah-e-Banaras & Kashi Vishwanath Temple",
        desc: "Witness magical sunrise at Assi Ghat. Private boat cruise past historic ghats. Sacred darshan at Shri Kashi Vishwanath Temple and Annapurna Mandir. Banarasi culinary trail in the evening.",
      },
      {
        day: 3,
        title: "Sankat Mochan, BHU & Departure",
        desc: "Morning visit to Sankat Mochan Hanuman Temple, Durga Kund, and New Vishwanath Temple (BHU). Departure transfers.",
      },
    ],
  },
  {
    id: "varanasi-sarnath-buddhist",
    title: "Sacred Ganges & Sarnath Buddhist Heritage Trail",
    tagline: "Discover Buddha's first sermon site at Sarnath alongside ancient spiritual ghats of Kashi",
    destination: "Varanasi",
    cityRoute: "/varanasi",
    type: "Spiritual & Pilgrimage",
    badge: "Cultural Heritage",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    rating: "4.8",
    reviewsCount: 142,
    image: varanasiGhatImg,
    originalPrice: 10999,
    discountedPrice: 7499,
    discountPercentage: 32,
    highlights: [
      "Full Day Sarnath Dhamek Stupa & Archaeological Museum",
      "Mulagandha Kuti Vihara & Ashoka Pillar Tour",
      "Ramnagar Fort Heritage Museum across the River",
      "Manikarnika & Harishchandra Ghat Walking Heritage Trail",
      "Sunrise & Sunset Ganga River Excursions",
      "3 Nights Stay in Boutique Hotel",
    ],
    inclusions: [
      "3 Nights stay with breakfast",
      "All transfers & sightseeing in private AC cab",
      "Sarnath archaeological expert guide",
      "Private boat cruise on the Ganges",
    ],
    exclusions: [
      "Airfare / Train tickets",
      "Camera fees and personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Kashi & Evening Aarti",
        desc: "Arrival in Varanasi, check-in, relax, and attend the grand Dashashwamedh Aarti.",
      },
      {
        day: 2,
        title: "Sarnath Buddhist Circuit",
        desc: "Visit Sarnath where Lord Buddha gave his first sermon. Tour Dhamek Stupa, Chaukhandi Stupa, Archaeological Museum, and Japanese Temple.",
      },
      {
        day: 3,
        title: "Ghats Walking Tour & Ramnagar Fort",
        desc: "Heritage walking tour through old city alleyways, Manikarnika Ghat, and visit 18th-century Ramnagar Fort.",
      },
      {
        day: 4,
        title: "Subah-e-Banaras & Departure",
        desc: "Early morning boat ride, shopping for Banarasi sarees, and departure.",
      },
    ],
  },
  {
    id: "varanasi-mystic-ghats",
    title: "Subah-e-Banaras Mystic Ghats & Temple Pilgrimage",
    tagline: "Experience the dawn soul of Varanasi, sacred dip at Panchganga, and holy chants across ancient ghats",
    destination: "Varanasi",
    cityRoute: "/varanasi",
    type: "Spiritual & Pilgrimage",
    badge: "Soul of Kashi",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    rating: "4.9",
    reviewsCount: 118,
    image: varanasiVishwanath,
    originalPrice: 5499,
    discountedPrice: 3899,
    discountPercentage: 29,
    highlights: [
      "Subah-e-Banaras Sunrise Rituals at Assi Ghat",
      "Private Wooden Hand-Rowed Boat along Historic Ghats",
      "Kashi Vishwanath Corridor & Kal Bhairav Temple",
      "Kachori-Jalebi Breakfast & Banarasi Paan Experience",
      "AC Pickup and Drop Included",
      "Deluxe Riverfront Stay",
    ],
    inclusions: [
      "1 Night accommodation in hotel near ghats",
      "Sunrise boat ride on Ganges",
      "Breakfast included",
      "Station pickup and drop",
    ],
    exclusions: ["Personal offerings", "Dinner"],
    itinerary: [
      {
        day: 1,
        title: "Dashashwamedh Aarti & Kashi Vishwanath",
        desc: "Arrive in Kashi. Visit Vishwanath Corridor and attend the magical evening Ganga Aarti.",
      },
      {
        day: 2,
        title: "Subah-e-Banaras & Kal Bhairav",
        desc: "Dawn boat ride from Assi to Manikarnika Ghat. Visit Kal Bhairav and departure.",
      },
    ],
  },

  // ================= 3. AYODHYA (/ayodhya) =================
  {
    id: "ayodhya-ram-mandir-darshan",
    title: "Ayodhya Ram Mandir & Saryu Aarti Darshan Yatra",
    tagline: "Experience the divine sanctity of Shri Ram Janmabhoomi, ancient shrines, and holy Saryu riverfront",
    destination: "Ayodhya",
    cityRoute: "/ayodhya",
    type: "Spiritual & Pilgrimage",
    badge: "Trending Yatra",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    rating: "4.9",
    reviewsCount: 420,
    image: ramMandirImg,
    originalPrice: 5999,
    discountedPrice: 4299,
    discountPercentage: 28,
    highlights: [
      "Shri Ram Janmabhoomi Mandir Darshan Assistance",
      "Hanuman Garhi Fort Temple Blessings",
      "Divine Saryu Ghat Evening Maha Aarti",
      "Ram Ki Paidi Laser & Light Show",
      "Kanak Bhawan & Dashrath Mahal Tour",
      "Dedicated AC Vehicle & Hotel Stay",
    ],
    inclusions: [
      "1 Night accommodation in top-rated hotel in Ayodhya",
      "Daily breakfast included",
      "All temple visits & sightseeing in private AC car",
      "Pickup & drop from Ayodhya Cantt / Airport / Lucknow",
      "Local spiritual coordinator assistance",
    ],
    exclusions: [
      "Special VIP pooja booking charges",
      "Lunch, dinner, and personal shopping",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Ayodhya & Holy Saryu Aarti",
        desc: "Pickup from Ayodhya Airport/Station. Check-in to hotel. Visit Hanuman Garhi and Kanak Bhawan. Evening attend majestic Maha Aarti at Saryu Ghat followed by Ram Ki Paidi illumination.",
      },
      {
        day: 2,
        title: "Shri Ram Janmabhoomi Darshan & Departure",
        desc: "Morning darshan at the magnificent Shri Ram Janmabhoomi Temple complex. Visit Dashrath Mahal and Nageshwarnath Temple. Afternoon drop-off.",
      },
    ],
  },
  {
    id: "ayodhya-sacred-circuit",
    title: "Divine Ayodhya Complete Teerth & Holy Circuit",
    tagline: "A comprehensive sacred journey covering Ayodhya Dham shrines, Saryu boat ride, and Surya Kund",
    destination: "Ayodhya",
    cityRoute: "/ayodhya",
    type: "Spiritual & Pilgrimage",
    badge: "Sacred Circuit",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    rating: "4.8",
    reviewsCount: 88,
    image: hanumanGarhiImg,
    originalPrice: 9499,
    discountedPrice: 6899,
    discountPercentage: 27,
    highlights: [
      "Complete Ayodhya Dham Shrines & Parikrama",
      "Surya Kund & Guptar Ghat Sunset Boat Ride",
      "Valmiki Ramayan Bhawan Visit",
      "Saryu Holy Snan Experience",
      "2 Nights Stay in Deluxe Pilgrimage Hotel",
      "All Sightseeing by Dedicated AC Vehicle",
    ],
    inclusions: [
      "2 Nights stay with breakfast",
      "Full AC transport throughout the tour",
      "Sightseeing as per itinerary",
      "Boat ride on Saryu river",
    ],
    exclusions: [
      "Meals other than specified",
      "Personal offerings at temples",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Saryu Evening",
        desc: "Arrival in Ayodhya, check in, visit Guptar Ghat and attend evening Saryu Aarti.",
      },
      {
        day: 2,
        title: "Grand Ram Mandir & Sacred Shrines",
        desc: "Full day dedicated to Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, and Surya Kund.",
      },
      {
        day: 3,
        title: "Mani Parbat, Choti Chhavani & Departure",
        desc: "Morning visits to holy shrines and transfer for onward journey.",
      },
    ],
  },
  {
    id: "ayodhya-kanak-bhawan-splendor",
    title: "Ayodhya Heritage & Golden Kanak Bhawan Yatra",
    tagline: "Discover the golden palace of Sita-Ram, Hanuman Garhi, and historic Ghats of holy Saryu",
    destination: "Ayodhya",
    cityRoute: "/ayodhya",
    type: "Spiritual & Pilgrimage",
    badge: "Devotional",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    rating: "4.9",
    reviewsCount: 94,
    image: kanakBhawanImg,
    originalPrice: 5699,
    discountedPrice: 3999,
    discountPercentage: 30,
    highlights: [
      "Kanak Bhawan Golden Shrine Darshan",
      "Hanuman Garhi Fort Steps & Blessings",
      "Ram Lalla Sanctum Sanctorum Darshan",
      "Ram Ki Paidi Ghats Promenade",
      "Chauffeur AC Transport & Station Transfers",
      "Hotel Stay with Satvik Breakfast",
    ],
    inclusions: [
      "1 Night stay in comfortable hotel",
      "Breakfast included",
      "Private AC vehicle for transfers and temples",
    ],
    exclusions: ["Personal expenses", "Prasad offerings"],
    itinerary: [
      {
        day: 1,
        title: "Kanak Bhawan & Evening Saryu Aarti",
        desc: "Visit Kanak Bhawan and Dashrath Mahal, followed by sacred Saryu Aarti.",
      },
      {
        day: 2,
        title: "Ram Janmabhoomi & Departure",
        desc: "Morning darshan at Shri Ram Janmabhoomi and transfer to station/airport.",
      },
    ],
  },

  // ================= 4. LUCKNOW (/lucknow) =================
  {
    id: "lucknow-nawabi-gastronomy",
    title: "Royal Awadh & Nawabi Culinary Walk",
    tagline: "Taste royal Mughlai-Awadhi culinary secrets and discover glorious unsupported arched monuments",
    destination: "Lucknow",
    cityRoute: "/lucknow",
    type: "Cultural & Gastronomy",
    badge: "Foodie Choice",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    rating: "4.9",
    reviewsCount: 165,
    image: baraImambaraImg,
    originalPrice: 7999,
    discountedPrice: 5499,
    discountPercentage: 31,
    highlights: [
      "Bara Imambara & Bhool Bhulaiya Guided Labyrinth Tour",
      "Historic Rumi Darwaza & Clock Tower Photo Stop",
      "Chikan Hand-Embroidery Workshop Masterclass",
      "Famous Aminabad & Chowk Awadhi Culinary Food Walk",
      "Tunday Kababi, Galawati Kebab, & Biryani Tasting Included",
      "4-Star City Center Hotel Stay with Breakfast",
    ],
    inclusions: [
      "2 Nights stay in 4-Star hotel in Hazratganj / Gomti Nagar",
      "Daily breakfast included",
      "Guided Old Lucknow evening street food tasting walk",
      "Private AC transport for all monument tours",
      "Experienced local heritage storytelling guide",
    ],
    exclusions: [
      "Monument entrance fees",
      "Extra meals and personal shopping",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Lucknow & Nawabi Evening",
        desc: "Pickup from airport/station. Check-in. Stroll through charming Hazratganj. Evening food walk in Chowk tasting authentic Galawati Kebabs and Kulfi.",
      },
      {
        day: 2,
        title: "Nawabi Heritage Splendors & Chikankari",
        desc: "Morning tour of Bara Imambara, Bhool Bhulaiya, and Rumi Darwaza. Afternoon visit to Chhota Imambara and artisan Chikankari embroidery studios.",
      },
      {
        day: 3,
        title: "British Residency & Departure",
        desc: "Explore historic British Residency compound and Ambedkar Memorial Park before departure.",
      },
    ],
  },
  {
    id: "lucknow-regal-architecture",
    title: "Lucknow Regal Heritage & Modern Splendors",
    tagline: "Witness grand colonial and Awadhi architecture blended with state-of-the-art modern monuments",
    destination: "Lucknow",
    cityRoute: "/lucknow",
    type: "Heritage & Architecture",
    badge: "Weekend Escape",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    rating: "4.8",
    reviewsCount: 78,
    image: rumiDarwazaImg,
    originalPrice: 5499,
    discountedPrice: 3999,
    discountPercentage: 27,
    highlights: [
      "Rumi Darwaza & Husainabad Clock Tower",
      "Ambedkar Memorial Park Colonnade at Night",
      "Dilkusha Kothi Historic Ruins",
      "Hazratganj Colonial Promenade",
      "Private AC Chauffeur Service",
      "Deluxe Hotel Stay",
    ],
    inclusions: [
      "1 Night stay in boutique city hotel",
      "Breakfast included",
      "Full city sightseeing in AC vehicle",
    ],
    exclusions: [
      "Monument entry fees",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Old Lucknow Monuments & Illuminations",
        desc: "Visit Imambaras, picture gallery, and see the illuminated Ambedkar Park in Gomti Nagar.",
      },
      {
        day: 2,
        title: "Colonial Ruins & Departure",
        desc: "Visit Dilkusha Kothi and Residency, shopping for Lucknowi Kurtas, and drop to station.",
      },
    ],
  },
  {
    id: "lucknow-ambedkar-monuments",
    title: "Lucknow Architectural Marvels & Nawabi Adab Tour",
    tagline: "From 18th-century grand arched gateways to world-class red sandstone memorial parks",
    destination: "Lucknow",
    cityRoute: "/lucknow",
    type: "Heritage & Architecture",
    badge: "City Discovery",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    rating: "4.8",
    reviewsCount: 65,
    image: ambedkarParkImg,
    originalPrice: 4999,
    discountedPrice: 3499,
    discountPercentage: 30,
    highlights: [
      "Ambedkar Memorial Park Stone Elephant Statues",
      "Gomti Riverfront Promenade Evening Walk",
      "Chhota Imambara Chandelier Hall",
      "Authentic Awadhi Biryani Dinner Recommendation",
      "AC Chauffeur Driven Vehicle",
      "City Hotel Stay with Breakfast",
    ],
    inclusions: [
      "1 Night hotel stay",
      "Breakfast included",
      "Private AC transport for city sightseeing",
    ],
    exclusions: ["Monument entry fees", "Personal shopping"],
    itinerary: [
      {
        day: 1,
        title: "Modern Lucknow & Gomti Riverfront",
        desc: "Tour Ambedkar Park, Janeshwar Mishra Park, and evening walk along Gomti Riverfront.",
      },
      {
        day: 2,
        title: "Historic Old Lucknow & Departure",
        desc: "Visit Chhota Imambara and Clock Tower, shop at Aminabad, and drop-off.",
      },
    ],
  },
];

// Available Filter Types
export const PACKAGE_TYPES = [
  { label: "All Types", value: "all" },
  { label: "Spiritual & Pilgrimage", value: "Spiritual & Pilgrimage" },
  { label: "Heritage & Architecture", value: "Heritage & Architecture" },
  { label: "Cultural & Gastronomy", value: "Cultural & Gastronomy" },
];

// ONLY the 4 Destinations with dedicated pages!
export const PACKAGE_DESTINATIONS = [
  { label: "All Destinations", value: "all" },
  { label: "Agra", value: "Agra", cityRoute: "/agra" },
  { label: "Varanasi", value: "Varanasi", cityRoute: "/varanasi" },
  { label: "Ayodhya", value: "Ayodhya", cityRoute: "/ayodhya" },
  { label: "Lucknow", value: "Lucknow", cityRoute: "/lucknow" },
];
