// ==========================================
// UTTAR PRADESH TOURISM - UNIFIED GALLERY DATA
// ==========================================

// --- AGRA & TAJ MAHAL ---
import taj1 from "../../assets/gallery/tajmahal/taj1.jpg";
import taj2 from "../../assets/gallery/tajmahal/taj2.jpg";
import taj3 from "../../assets/gallery/tajmahal/taj3.jpg";
import taj4 from "../../assets/gallery/tajmahal/taj4.jpg";
import taj5 from "../../assets/gallery/tajmahal/taj5.jpg";
import taj6 from "../../assets/gallery/tajmahal/taj6.jpg";
import taj7 from "../../assets/gallery/tajmahal/taj7.jpg";
import taj8 from "../../assets/gallery/tajmahal/taj8.jpg";
import agraFort from "../Agra/agra-fort.webp";
import fatehpurSikri from "../Agra/Fatehpur-Sikri.webp";
import itmadUdDaulah from "../Agra/itmad-ud-daulah.webp";
import mehtabBagh from "../Agra/mehtab-bagh.webp";

// --- VARANASI ---
import varanasi1 from "../../assets/gallery/varanasi/varanasi1.jpg";
import varanasi2 from "../../assets/gallery/varanasi/varanasi2.jpg";
import varanasi3 from "../../assets/gallery/varanasi/varanasi3.jpg";
import varanasi4 from "../../assets/gallery/varanasi/varanasi4.jpg";
import varanasi5 from "../../assets/gallery/varanasi/varanasi5.jpg";
import varanasi6 from "../../assets/gallery/varanasi/varanasi6.jpg";
import varanasi7 from "../../assets/gallery/varanasi/varanasi7.jpg";
import varanasi9 from "../../assets/gallery/varanasi/varanasi9.jpg";
import varanasi10 from "../../assets/gallery/varanasi/varanasi10.jpg";
import varanasi11 from "../../assets/gallery/varanasi/varanasi11.jpg";
import assiGhat from "../varanasi/AssiGhat.jpg";
import kedarGhat from "../varanasi/KedarGhat.jpg";
import manikarnikaGhat from "../varanasi/ManikarnikaGhat.jpg";
import scindiaGhat from "../varanasi/ScindiaGhat.jpg";
import dashGhat from "../varanasi/dash.jpg";

// --- AYODHYA ---
import ayodhya1 from "../Ayodhya/ayodhya.jpg";
import hanumangarhi from "../Ayodhya/Hanumangarhi.jpg";
import sharyuGhat from "../Ayodhya/sharyuGhat.jpg";
import kanakBhawan from "../Ayodhya/KanakBhawan.jpg";
import dashrathMahal from "../Ayodhya/DashrathMahal.jpg";
import ramkiPaidi from "../Ayodhya/RamkiPaidi.jpg";

// --- LUCKNOW ---
import lucknow1 from "../lucknow/Lucknow.jpg";
import baraImambara from "../lucknow/BaraImambara.jpg";
import rumiDarwaza from "../lucknow/RumiDarwaza.jpg";
import chhotaImambara from "../lucknow/Imambara.jpg";
import britishResidency from "../lucknow/BritishResidency.jpg";
import ambedkarPark from "../lucknow/AmbedkarPark.jpg";
import dilkushaKothi from "../lucknow/DilkushaKothi.jpg";

export const GALLERY_ITEMS = [
  // ================= AGRA =================
  {
    id: "taj-1",
    title: "Taj Mahal Majestic Front Silhouette",
    destination: "Agra",
    category: "Monuments & Heritage",
    image: taj1,
    cityRoute: "/agra",
    location: "Agra, Uttar Pradesh",
    description: "The ivory-white marble masterpiece glowing in soft morning sunlight.",
    tags: ["agra", "taj mahal", "monument", "heritage", "wonder", "marble", "sunrise"],
  },
  {
    id: "taj-2",
    title: "Taj Mahal Reflecting Pool",
    destination: "Agra",
    category: "Monuments & Heritage",
    image: taj2,
    cityRoute: "/agra",
    location: "Agra, Uttar Pradesh",
    description: "Iconic symmetry reflected across the charbagh water canals.",
    tags: ["agra", "taj mahal", "water", "reflection", "architecture", "garden"],
  },
  {
    id: "taj-3",
    title: "Taj Mahal Golden Hour Radiance",
    destination: "Agra",
    category: "Monuments & Heritage",
    image: taj3,
    cityRoute: "/agra",
    location: "Agra, Uttar Pradesh",
    description: "A sunset spectacle as the white marble shifts into warm golden amber.",
    tags: ["agra", "taj mahal", "sunset", "golden hour", "heritage"],
  },
  {
    id: "taj-4",
    title: "Taj Mahal Architectural Dome Detail",
    destination: "Agra",
    category: "Monuments & Heritage",
    image: taj4,
    cityRoute: "/agra",
    location: "Agra, Uttar Pradesh",
    description: "Intricate pietra dura marble inlay work and towering minarets.",
    tags: ["agra", "taj mahal", "dome", "details", "minaret", "art"],
  },
  {
    id: "taj-5",
    title: "Taj Mahal River Yamuna Perspective",
    destination: "Agra",
    category: "Monuments & Heritage",
    image: taj5,
    cityRoute: "/agra",
    location: "Agra, Uttar Pradesh",
    description: "Majestic riverside view capturing the eternal monument from the Yamuna bank.",
    tags: ["agra", "taj mahal", "yamuna", "river", "scenic"],
  },
  {
    id: "taj-6",
    title: "Taj Mahal Archway Gateway Frame",
    destination: "Agra",
    category: "Monuments & Heritage",
    image: taj6,
    cityRoute: "/agra",
    location: "Agra, Uttar Pradesh",
    description: "Dramatic framing through the red sandstone Great Darwaza.",
    tags: ["agra", "taj mahal", "arch", "framing", "darwaza", "red sandstone"],
  },
  {
    id: "taj-7",
    title: "Taj Mahal Evening Glow",
    destination: "Agra",
    category: "Monuments & Heritage",
    image: taj7,
    cityRoute: "/agra",
    location: "Agra, Uttar Pradesh",
    description: "Serene dusk view casting peaceful shadows across the courtyard.",
    tags: ["agra", "taj mahal", "evening", "peaceful", "sky"],
  },
  {
    id: "taj-8",
    title: "Taj Mahal Sunrise Solitude",
    destination: "Agra",
    category: "Monuments & Heritage",
    image: taj8,
    cityRoute: "/agra",
    location: "Agra, Uttar Pradesh",
    description: "Early morning mist clearing to reveal the pristine white wonder.",
    tags: ["agra", "taj mahal", "sunrise", "morning", "mist"],
  },
  {
    id: "agra-fort",
    title: "Agra Fort Royal Ramparts",
    destination: "Agra",
    category: "Monuments & Heritage",
    image: agraFort,
    cityRoute: "/agra",
    location: "Agra, Uttar Pradesh",
    description: "Massive red sandstone fortification that served as the Mughal seat of power.",
    tags: ["agra", "agra fort", "fort", "red sandstone", "mughal", "heritage"],
  },
  {
    id: "fatehpur-sikri",
    title: "Fatehpur Sikri Imperial Courtyard",
    destination: "Agra",
    category: "Monuments & Heritage",
    image: fatehpurSikri,
    cityRoute: "/agra",
    location: "Agra / Fatehpur Sikri, Uttar Pradesh",
    description: "Akbar's legendary planned red sandstone capital and Buland Darwaza.",
    tags: ["agra", "fatehpur sikri", "buland darwaza", "fort", "history"],
  },
  {
    id: "itmad-ud-daulah",
    title: "Itmad-ud-Daulah (Baby Taj)",
    destination: "Agra",
    category: "Monuments & Heritage",
    image: itmadUdDaulah,
    cityRoute: "/agra",
    location: "Agra, Uttar Pradesh",
    description: "The delicate jewel-box tomb renowned for precursor pietra dura artistry.",
    tags: ["agra", "baby taj", "itmad ud daulah", "marble", "heritage"],
  },
  {
    id: "mehtab-bagh",
    title: "Mehtab Bagh Moonlight Garden",
    destination: "Agra",
    category: "Monuments & Heritage",
    image: mehtabBagh,
    cityRoute: "/agra",
    location: "Agra, Uttar Pradesh",
    description: "Charbagh garden complex offering panoramic views across the river to the Taj.",
    tags: ["agra", "mehtab bagh", "garden", "sunset", "viewpoint"],
  },

  // ================= VARANASI =================
  {
    id: "var-1",
    title: "Varanasi Ghats at Golden Dawn",
    destination: "Varanasi",
    category: "Ghats & Rivers",
    image: varanasi1,
    cityRoute: "/varanasi",
    location: "Varanasi, Uttar Pradesh",
    description: "Subah-e-Banaras: traditional wooden boats gliding across the sacred Ganges at sunrise.",
    tags: ["varanasi", "kashi", "ghat", "river", "ganga", "boats", "sunrise"],
  },
  {
    id: "var-2",
    title: "Sacred Ganges Morning Rituals",
    destination: "Varanasi",
    category: "Temples & Spiritual",
    image: varanasi2,
    cityRoute: "/varanasi",
    location: "Varanasi, Uttar Pradesh",
    description: "Devotees taking sacred dips and offering prayers on the ancient stone steps.",
    tags: ["varanasi", "kashi", "spiritual", "rituals", "prayer", "holy river"],
  },
  {
    id: "var-3",
    title: "Kashi Evening Ganga Aarti",
    destination: "Varanasi",
    category: "Temples & Spiritual",
    image: varanasi3,
    cityRoute: "/varanasi",
    location: "Varanasi, Uttar Pradesh",
    description: "Grand synchronized fire aarti performed by young priests amidst chants and bells.",
    tags: ["varanasi", "kashi", "aarti", "ganga aarti", "fire", "spiritual", "night"],
  },
  {
    id: "var-4",
    title: "Banaras Ghat Architecture & Boats",
    destination: "Varanasi",
    category: "Ghats & Rivers",
    image: varanasi4,
    cityRoute: "/varanasi",
    location: "Varanasi, Uttar Pradesh",
    description: "Layered palaces, temple spires, and vibrant wooden boats lining the riverfront.",
    tags: ["varanasi", "kashi", "architecture", "boats", "ghats", "palaces"],
  },
  {
    id: "var-5",
    title: "Historic Riverfront Panorama",
    destination: "Varanasi",
    category: "Ghats & Rivers",
    image: varanasi5,
    cityRoute: "/varanasi",
    location: "Varanasi, Uttar Pradesh",
    description: "The timeless curve of eighty-four ghats reflecting in the sacred waters.",
    tags: ["varanasi", "kashi", "panorama", "river", "ganga", "heritage"],
  },
  {
    id: "var-6",
    title: "Serene Boat Ride Across Kashi",
    destination: "Varanasi",
    category: "Ghats & Rivers",
    image: varanasi6,
    cityRoute: "/varanasi",
    location: "Varanasi, Uttar Pradesh",
    description: "Peaceful morning mist enveloping the riverbanks of the world's oldest living city.",
    tags: ["varanasi", "kashi", "boat ride", "morning", "spiritual"],
  },
  {
    id: "var-7",
    title: "Ganga Aarti Deepotsav Glow",
    destination: "Varanasi",
    category: "Temples & Spiritual",
    image: varanasi7,
    cityRoute: "/varanasi",
    location: "Varanasi, Uttar Pradesh",
    description: "Thousands of floating earthen diyas lighting up the sacred river at dusk.",
    tags: ["varanasi", "kashi", "diyas", "deepotsav", "lights", "spiritual"],
  },
  {
    id: "var-9",
    title: "Ancient Temples Along the Ghats",
    destination: "Varanasi",
    category: "Temples & Spiritual",
    image: varanasi9,
    cityRoute: "/varanasi",
    location: "Varanasi, Uttar Pradesh",
    description: "Towering stone shikharas reaching towards the heavens above the ghats.",
    tags: ["varanasi", "kashi", "temple", "shikhara", "ancient", "spiritual"],
  },
  {
    id: "var-10",
    title: "Evening Lights of Banaras",
    destination: "Varanasi",
    category: "Ghats & Rivers",
    image: varanasi10,
    cityRoute: "/varanasi",
    location: "Varanasi, Uttar Pradesh",
    description: "Golden illumination shimmering over the flowing waters of Mother Ganga.",
    tags: ["varanasi", "kashi", "evening", "lights", "night", "river"],
  },
  {
    id: "var-11",
    title: "Timeless Kashi Alleys & Steps",
    destination: "Varanasi",
    category: "Monuments & Heritage",
    image: varanasi11,
    cityRoute: "/varanasi",
    location: "Varanasi, Uttar Pradesh",
    description: "Intriguing labyrinth of narrow Banarasi gullies leading to hidden shrines.",
    tags: ["varanasi", "kashi", "alleys", "gully", "heritage", "culture"],
  },
  {
    id: "assi-ghat",
    title: "Assi Ghat Cultural Gathering",
    destination: "Varanasi",
    category: "Ghats & Rivers",
    image: assiGhat,
    cityRoute: "/varanasi",
    location: "Varanasi, Uttar Pradesh",
    description: "The southernmost ghat famed for morning yoga, cultural concerts, and sunrise bliss.",
    tags: ["varanasi", "assi ghat", "yoga", "ghats", "river", "culture"],
  },
  {
    id: "kedar-ghat",
    title: "Kedar Ghat Striped Temple Steps",
    destination: "Varanasi",
    category: "Temples & Spiritual",
    image: kedarGhat,
    cityRoute: "/varanasi",
    location: "Varanasi, Uttar Pradesh",
    description: "Vibrant red and white painted steps of Kedareshwar Temple overlooking the Ganges.",
    tags: ["varanasi", "kedar ghat", "temple", "spiritual", "shiva"],
  },
  {
    id: "manikarnika-ghat",
    title: "Manikarnika Ghat The Eternal Flame",
    destination: "Varanasi",
    category: "Temples & Spiritual",
    image: manikarnikaGhat,
    cityRoute: "/varanasi",
    location: "Varanasi, Uttar Pradesh",
    description: "The sacred mahashamshan where liberation (Moksha) is sought across millennia.",
    tags: ["varanasi", "manikarnika ghat", "moksha", "sacred", "spiritual"],
  },
  {
    id: "dashashwamedh-ghat",
    title: "Dashashwamedh Ghat Grand Steps",
    destination: "Varanasi",
    category: "Ghats & Rivers",
    image: dashGhat,
    cityRoute: "/varanasi",
    location: "Varanasi, Uttar Pradesh",
    description: "The most vibrant central ghat of Kashi, alive with pilgrims and grand rituals.",
    tags: ["varanasi", "dashashwamedh", "ghat", "river", "pilgrimage"],
  },

  // ================= AYODHYA =================
  {
    id: "ayo-1",
    title: "Ayodhya Ram Mandir Grand Vista",
    destination: "Ayodhya",
    category: "Temples & Spiritual",
    image: ayodhya1,
    cityRoute: "/ayodhya",
    location: "Ayodhya, Uttar Pradesh",
    description: "Magnificent Nagara style pink sandstone temple dedicated to Shri Ram.",
    tags: ["ayodhya", "ram mandir", "shri ram", "temple", "spiritual", "nagara architecture"],
  },
  {
    id: "ayo-2",
    title: "Hanumangarhi Sacred Fortress",
    destination: "Ayodhya",
    category: "Temples & Spiritual",
    image: hanumangarhi,
    cityRoute: "/ayodhya",
    location: "Ayodhya, Uttar Pradesh",
    description: "10th-century elevated temple-fort where Lord Hanuman watches over Ayodhya.",
    tags: ["ayodhya", "hanumangarhi", "hanuman", "temple", "spiritual"],
  },
  {
    id: "ayo-3",
    title: "Saryu River Sacred Ghats",
    destination: "Ayodhya",
    category: "Ghats & Rivers",
    image: sharyuGhat,
    cityRoute: "/ayodhya",
    location: "Ayodhya, Uttar Pradesh",
    description: "Holy Saryu riverbanks where pilgrims take purifying dips and witness tranquil sunsets.",
    tags: ["ayodhya", "saryu ghat", "saryu river", "river", "spiritual"],
  },
  {
    id: "ayo-4",
    title: "Kanak Bhawan Golden Palace",
    destination: "Ayodhya",
    category: "Temples & Spiritual",
    image: kanakBhawan,
    cityRoute: "/ayodhya",
    location: "Ayodhya, Uttar Pradesh",
    description: "Lavish palace temple gifted to Sita by Queen Kaikeyi, adorned with golden crowns.",
    tags: ["ayodhya", "kanak bhawan", "temple", "sita", "palace", "gold"],
  },
  {
    id: "ayo-5",
    title: "Dashrath Mahal Royal Abode",
    destination: "Ayodhya",
    category: "Monuments & Heritage",
    image: dashrathMahal,
    cityRoute: "/ayodhya",
    location: "Ayodhya, Uttar Pradesh",
    description: "Historic residence of King Dasharatha with intricately painted archways.",
    tags: ["ayodhya", "dashrath mahal", "palace", "heritage", "king dasharatha"],
  },
  {
    id: "ayo-6",
    title: "Ram Ki Paidi Illuminated Waterfront",
    destination: "Ayodhya",
    category: "Ghats & Rivers",
    image: ramkiPaidi,
    cityRoute: "/ayodhya",
    location: "Ayodhya, Uttar Pradesh",
    description: "Scenic series of ghat steps along Saryu waters, famous for world-record Deepotsav.",
    tags: ["ayodhya", "ram ki paidi", "deepotsav", "ghats", "water", "lights"],
  },

  // ================= LUCKNOW =================
  {
    id: "lko-1",
    title: "Lucknow Regal Heritage Skyline",
    destination: "Lucknow",
    category: "Monuments & Heritage",
    image: lucknow1,
    cityRoute: "/lucknow",
    location: "Lucknow, Uttar Pradesh",
    description: "The Nawabi charm of the capital city showcasing grand domes and minarets.",
    tags: ["lucknow", "nawabs", "heritage", "skyline", "awadh"],
  },
  {
    id: "lko-2",
    title: "Bara Imambara & Bhool Bhulaiya",
    destination: "Lucknow",
    category: "Monuments & Heritage",
    image: baraImambara,
    cityRoute: "/lucknow",
    location: "Lucknow, Uttar Pradesh",
    description: "Engineering wonder built in 1784 with an unsupported vaulted central hall.",
    tags: ["lucknow", "bara imambara", "bhool bhulaiya", "architecture", "monument"],
  },
  {
    id: "lko-3",
    title: "Rumi Darwaza Turkish Gateway",
    destination: "Lucknow",
    category: "Monuments & Heritage",
    image: rumiDarwaza,
    cityRoute: "/lucknow",
    location: "Lucknow, Uttar Pradesh",
    description: "60-foot tall monumental entrance gate standing as the emblem of Lucknow.",
    tags: ["lucknow", "rumi darwaza", "gateway", "arch", "symbol of lucknow"],
  },
  {
    id: "lko-4",
    title: "Chhota Imambara Palace of Lights",
    destination: "Lucknow",
    category: "Monuments & Heritage",
    image: chhotaImambara,
    cityRoute: "/lucknow",
    location: "Lucknow, Uttar Pradesh",
    description: "Gilded domes, calligraphy, and Belgian crystal chandeliers illuminating Awadhi glory.",
    tags: ["lucknow", "chhota imambara", "palace of lights", "chandeliers", "gold"],
  },
  {
    id: "lko-5",
    title: "The British Residency Memorial",
    destination: "Lucknow",
    category: "Monuments & Heritage",
    image: britishResidency,
    cityRoute: "/lucknow",
    location: "Lucknow, Uttar Pradesh",
    description: "Historic compound preserving the memories of the Siege of Lucknow in 1857.",
    tags: ["lucknow", "british residency", "1857", "history", "gardens"],
  },
  {
    id: "lko-6",
    title: "Ambedkar Memorial Park Colonnade",
    destination: "Lucknow",
    category: "Monuments & Heritage",
    image: ambedkarPark,
    cityRoute: "/lucknow",
    location: "Lucknow, Uttar Pradesh",
    description: "Sprawling red sandstone complex featuring life-sized stone elephant sculptures.",
    tags: ["lucknow", "ambedkar park", "red sandstone", "elephants", "modern monument"],
  },
  {
    id: "lko-7",
    title: "Dilkusha Kothi Historic Ruins",
    destination: "Lucknow",
    category: "Monuments & Heritage",
    image: dilkushaKothi,
    cityRoute: "/lucknow",
    location: "Lucknow, Uttar Pradesh",
    description: "18th-century English baroque-style hunting lodge and country house ruins.",
    tags: ["lucknow", "dilkusha kothi", "baroque", "ruins", "history"],
  },
];

export const DESTINATION_PILLS = [
  { label: "All Destinations", value: "all" },
  { label: "Agra (Taj Mahal)", value: "Agra" },
  { label: "Varanasi (Kashi)", value: "Varanasi" },
  { label: "Ayodhya", value: "Ayodhya" },
  { label: "Lucknow", value: "Lucknow" },
  { label: "Ghats & Rivers", value: "Ghats & Rivers" },
  { label: "Temples & Spiritual", value: "Temples & Spiritual" },
  { label: "Monuments & Heritage", value: "Monuments & Heritage" },
];
