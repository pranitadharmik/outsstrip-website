const Madurai = "/assets/Madurai-Cl6Gwuwq.jpg";
const Havelock = "/assets/Havelock%20Island-Br1vvwwj.jpg";
const DALHOUSIE = "/assets/DALHOUSIE-C5bVnjcJ.jpg";
const Maheshwar = "/assets/Maheshwar-XW3Lwr1-.jpg";
const Nubra = "/assets/Nubra%20Valley-D1w8z7qr.jpg";
const Pangong = "/assets/Pangong%20Lake-Dl4w31eQ.jpg";
const Port = "/assets/Port%20Blair-DfqgPhxs.jpg";
const JIMCORBETT = "/assets/JIMCORBETT-DnmKkOqQ.jpg";
const MYSORE = "/assets/MYSORE-Ba8Dw9Ya.webp";
const rishikesh = "/assets/rishikesh-nh7kEb-J.jpg";
const Ujjain1 = "/assets/Ujjain1-ZvbUlQPP.webp";
const turtuk = "/assets/turtuk-Ck6amx2f.jpg";
const ooty = "/assets/ooty-B1lhdfcV.jpg";
const kerela = "/assets/kerela-B3Ejsr50.avif";
const rajasthan = "/assets/rajasthan-2mQCKNLu.avif";
const nepal = "/assets/nepal-CxHx1C2t.avif";
const goa = "/assets/goa-DDzrGfZy.jpg";
const Leh = "/assets/leh-wt2iQIBE.jpg";
const wayanad = "/assets/wayanad-BznG5bj0.png";
const gangtokDarjeeling = "/assets/gangtokDarjeeling-eVeIe1aQ.jpg";
const jaiselmer = "/assets/jaiselmer-R_JqijIQ.webp";
const kashmir = "/assets/kashmir-kffPO-6X.avif";
const varanasi = "/assets/varanasi-Dsti1bsX.jpg";
const teagarden = "/assets/tea%20garden-C1D4h5Ou.jpg";
const aruValley = "/assets/Aru%20Valley-CxeMnWiH.webp";
const ekkalCaves = "/assets/Edakkal%20Caves-OkvUx4RU.webp";
const udaipur = "/assets/udaipur-BGqd0ONC.jpg";
const manaliDelhi = "/assets/manaliDelhi-EeC9D2lt.jpg";
const meghalaya = "/assets/meghalaya-D4Yrw279.jpg";
const packages = [
  {
    title: "KASHMIR TOUR PACKAGE",
    duration: "6 Nights / 7 Days",
    price: "₹24,188 PP",
    image: kashmir,
    tag: "Nature",
    destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Doodhpathri"],
    includesList: [
      "6 Nights Stay in 3 Star Hotel",
      "Breakfast & Dinner",
      "1 Hour Shikara Ride",
      "Gondola Ride",
      "Private Innova for Sightseeing",
      "Pickup & Drop from Srinagar Airport"
    ],
    highlights: [
      "Pari Mahal",
      "Mughal Gardens",
      "Doodhpathri",
      "Aru Valley",
      "Betaab Valley",
      "Chandanwari",
      "Shikara Ride",
      "Gondola Ride"
    ]
  },
  {
    title: "MANALI WITH DELHI PACKAGE",
    duration: "5 Nights / 6 Days",
    price: "₹35,000 (2 Pax)",
    image: manaliDelhi,
    tag: "Hill Station",
    destinations: ["Delhi", "Manali"],
    includesList: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Delhi Sightseeing",
      "Manali Sightseeing",
      "Comfortable Transfers",
      "Memorable Holiday Experience"
    ],
    highlights: [
      "India Gate",
      "Qutub Minar",
      "Lotus Temple",
      "Mall Road Manali",
      "Hadimba Devi Temple",
      "Solang Valley",
      "Vashisht Temple & Hot Springs",
      "River Rafting (Optional)",
      "Snow Point Visit (Seasonal)",
      "Scenic Mountain Views"
    ]
  },
  {
    title: "MEGHALAYA HOLIDAY PACKAGE",
    duration: "5 Nights / 6 Days",
    price: "₹49,000 (2 Pax)",
    image: meghalaya,
    tag: "Nature",
    destinations: ["Meghalaya"],
    includesList: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Sightseeing Tours",
      "Comfortable Transfers",
      "Memorable Travel Experience"
    ],
    highlights: [
      "Shillong",
      "Cherrapunji",
      "Dawki River",
      "Mawlynnong Village",
      "Nohkalikai Falls",
      "Seven Sisters Falls",
      "Living Root Bridges",
      "Mawsmai Caves",
      "Umiam Lake",
      "Lush Green Landscapes"
    ]
  },
  {
    title: "RAJASTHAN TOUR PACKAGE",
    duration: "6 Nights / 7 Days",
    price: "₹48,500 / 2 Pax",
    image: rajasthan,
    tag: "Heritage",
    destinations: [
      "Jaipur",
      "Jodhpur",
      "Jaisalmer",
      "Udaipur"
    ],
    includesList: [
      "Hotel Accommodation",
      "Sightseeing Tours",
      "Private Transfers",
      "Intercity Travel",
      "Tour Assistance"
    ],
    highlights: [
      "Hawa Mahal, Jaipur",
      "Mehrangarh Fort, Jodhpur",
      "Jaisalmer Desert Experience",
      "Camel Safari",
      "Udaipur Lake City Tour",
      "Historic Forts & Palaces"
    ]
  },
  {
    title: "KERALA TOUR PACKAGE",
    duration: "5 Nights / 6 Days",
    price: "₹19,999 PP",
    image: kerela,
    tag: "Nature",
    destinations: [
      "Munnar",
      "Thekkady",
      "Alleppey",
      "Kochi"
    ],
    includesList: [
      "Hotel Accommodation",
      "All Meals",
      "Sightseeing",
      "Transfers"
    ],
    highlights: [
      "Alleppey Houseboat Experience",
      "Munnar Tea Gardens",
      "Thekkady Wildlife Attractions",
      "Backwater Cruise",
      "Private Transfers"
    ]
  },
  {
    title: "ANDAMAN TOUR PACKAGE",
    duration: "3 Nights / 4 Days",
    price: "₹18,500 PP",
    image: Port,
    tag: "Beach",
    destinations: ["Port Blair", "Havelock Island"],
    includesList: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Private Car Sightseeing",
      "Tour Assistance"
    ],
    highlights: [
      "Cellular Jail Light & Sound Show",
      "Corbyn’s Cove Beach Visit",
      "Radhanagar Beach Experience",
      "Elephant Beach Snorkeling",
      "Island Ferry Transfers"
    ]
  },
  {
    title: "GANGTOK DARJEELING TOUR PACKAGE",
    duration: "4 Nights / 5 Days",
    price: "₹18,000 PP",
    image: gangtokDarjeeling,
    tag: "Hill Station",
    destinations: ["Gangtok", "Darjeeling"],
    includesList: [
      "2 Nights Stay in Gangtok",
      "2 Nights Stay in Darjeeling",
      "Daily Breakfast",
      "Airport Transfers",
      "Private Vehicle for Sightseeing",
      "All Sightseeing"
    ],
    highlights: [
      "Tsomgo Lake",
      "Baba Mandir",
      "Tiger Hill",
      "Darjeeling Sightseeing",
      "Private Transfers"
    ]
  },
  {
    title: "LADAKH BIKE EXPEDITION",
    duration: "6 Nights / 7 Days",
    price: "₹18,999 PP",
    image: Leh,
    tag: "Adventure",
    destinations: ["Leh", "Nubra Valley", "Turtuk", "Pangong Lake"],
    includesList: [
      "Royal Enfield 500cc Bike",
      "Airport Pickup & Drop",
      "Permits & Taxes Included",
      "24x7 Local Support"
    ],
    highlights: [
      "Leh Acclimatization & Sightseeing",
      "Khardung La Pass Ride",
      "Nubra Sand Dunes & Camel Ride",
      "Turtuk Border Village Visit",
      "Pangong Lake Stay Experience"
    ]
  },
  {
    title: "GOA TOUR PACKAGE",
    duration: "4 Nights / 5 Days",
    price: "₹19,500 / Couple",
    image: goa,
    tag: "Beach",
    destinations: [
      "North Goa",
      "South Goa"
    ],
    includesList: [
      "4 Nights AC Room Stay",
      "4 Breakfasts",
      "Airport Pickup & Drop",
      "North Goa Private Tour",
      "South Goa Private Tour"
    ],
    highlights: [
      "North Goa Sightseeing",
      "South Goa Sightseeing",
      "Beach Experience",
      "Private Tours",
      "Airport Transfers"
    ]
  },
  {
    title: "UDAIPUR GETAWAY PACKAGE",
    duration: "3 Nights / 4 Days",
    price: "₹30,000 (2 Pax)",
    image: udaipur,
    tag: "Hill & Lake",
    destinations: ["Udaipur", "Mount Abu"],
    includesList: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Sightseeing Assistance",
      "Comfortable Stay"
    ],
    highlights: [
      "City Palace",
      "Lake Pichola",
      "Fateh Sagar Lake",
      "Saheliyon Ki Bari",
      "Jag Mandir",
      "Nakki Lake",
      "Guru Shikhar",
      "Sunset Point",
      "Mount Abu Sightseeing",
      "Scenic Lake & Hill Views"
    ]
  },
  {
    title: "OOTY TOUR PACKAGE",
    duration: "3 Nights / 4 Days",
    price: "₹12,280 PP",
    image: ooty,
    tag: "Hill Station",
    destinations: ["Ooty", "Coonoor"],
    includesList: [
      "3 Nights Stay at 3 Star Hotel",
      "Daily Breakfast",
      "Ooty Local Sightseeing",
      "Coonoor Day Trip",
      "All Transfers",
      "Private Sightseeing"
    ],
    highlights: [
      "Ooty Local Sightseeing",
      "Coonoor Excursion",
      "Tea Garden Views",
      "Private Transfers",
      "Comfortable 3 Star Accommodation"
    ]
  },
  {
    title: "NEPAL TOUR PACKAGE",
    duration: "4 Nights / 5 Days",
    price: "₹35,000 / 2 Pax",
    image: nepal,
    tag: "International",
    destinations: [
      "Kathmandu",
      "Pokhara",
      "Nepal"
    ],
    includesList: [
      "Accommodation",
      "Daily Breakfast",
      "Private Car for Sightseeing",
      "Arrival Transfers",
      "Departure Transfers",
      "All Applicable Taxes"
    ],
    highlights: [
      "Kathmandu Temple Visits",
      "Pokhara Sightseeing",
      "Himalayan Mountain Views",
      "Private Vehicle Tours",
      "Airport Transfers"
    ]
  },
  {
    title: "WAYANAD TOUR PACKAGE",
    duration: "3 Nights / 4 Days",
    price: "₹21,000 PP",
    image: wayanad,
    tag: "Nature",
    destinations: ["Wayanad"],
    includesList: [
      "3Star Accommodation",
      "Bed & Breakfast",
      "Private Vehicle Including All Taxes",
      "Pickup & Drop from Kozhikode Airport/Railway Station",
      "Sightseeing",
      "Transfers"
    ],
    highlights: [
      "Edakkal Caves",
      "Pookode Lake",
      "Phantom Rock",
      "Chembra Peak",
      "Private Transfers"
    ]
  },
  {
    title: "JAISALMER TOUR PACKAGE",
    duration: "2 Nights / 3 Days",
    price: "₹12,500 PP",
    image: jaiselmer,
    tag: "Desert",
    destinations: ["Jaisalmer"],
    includesList: [
      "Hotel Stay",
      "Breakfast",
      "Sightseeing",
      "Breakfast & Dinner in Camp",
      "Welcome Drink (Non-Alcoholic)",
      "Evening High Tea Snacks",
      "Pickup & Drop from Jaisalmer Railway Station"
    ],
    highlights: [
      "Camel Safari",
      "Camping",
      "Gadisar Lake",
      "Bada Bagh",
      "Jaisalmer Fort",
      "Patwon Ki Haveli",
      "Salim Singh Ki Haveli",
      "Sonar Quila",
      "Sam Sand Dunes",
      "Cultural Programme & Bonfire"
    ]
  },
  {
    title: "DIVINE UJJAIN TOUR PACKAGE",
    duration: "2 Nights / 3 Days",
    price: "₹6,250 For 4 Pax",
    image: Ujjain1,
    tag: "Spiritual",
    destinations: ["Ujjain", "Omkareshwar", "Maheshwar"],
    includesList: [
      "3 Star Hotel Stay",
      "Breakfast Included",
      "Sedan Car Travel",
      "Pickup & Drop – Indore"
    ],
    highlights: [
      "Mahakaleshwar Jyotirlinga Darshan",
      "Kal Bhairav Temple Visit",
      "Omkareshwar Jyotirlinga Darshan",
      "Maheshwar Ghats Exploration",
      "Chappan Dukaan Food Experience"
    ]
  },
  {
    title: "VARANASI TOUR PACKAGE",
    duration: "2 Nights / 3 Days",
    price: "₹9,000 PP",
    image: varanasi,
    tag: "Spiritual",
    destinations: ["Varanasi", "Sarnath"],
    includesList: [
      "3 Star Hotel Stay",
      "Daily Breakfast & Dinner",
      "Sightseeing",
      "Pickup & Drop from Railway Station/Airport",
      "Hotel Taxes",
      "Fuel & Driver Allowance"
    ],
    highlights: [
      "Dashashwamedh Ghat",
      "Kashi Vishwanath Temple",
      "Annapurna Mandir",
      "Kaal Bhairav Mandir",
      "Ganga Aarti",
      "Sarnath Tour",
      "Dhamek Stupa"
    ]
  },
  {
    title: "MADURAI – RAMESWARAM – KANYAKUMARI TOUR PACKAGE",
    duration: "5 Nights / 6 Days",
    price: "₹16,500 PP",
    image: Madurai,
    tag: "Spiritual",
    destinations: ["Madurai", "Rameswaram", "Kanyakumari"],
    includesList: [
      "Hotel Accommodation",
      "Sightseeing Tours",
      "Transportation",
      "Tour Assistance"
    ],
    highlights: [
      "Meenakshi Amman Temple Visit",
      "Ramanathaswamy Temple Darshan",
      "Kanyakumari Sunrise & Sunset",
      "Vivekananda Rock Memorial",
      "Local Cultural Experience"
    ]
  },
  {
    title: "RISHIKESH & MUSSOORIE ADVENTURE TOUR",
    duration: "4 Night 5 Days",
    price: "₹ 29,000 for 2 Pax",
    image: rishikesh,
    tag: "Adventure",
    destinations: [
      "Rishikesh",
      "Mussoorie"
    ],
    includesList: [
      "Meals",
      "Stays",
      "Transfers"
    ],
    highlights: [
      "River Rafting",
      "Rishikesh",
      "Mussoorie",
      "Scenic Hill Views",
      "Adventure Activities"
    ]
  },
  {
    title: "CHIKMAGALUR, COORG & MYSORE NATURE ESCAPE",
    duration: "6 Nights 7 Days",
    price: "₹ 23,800 +5% GST",
    image: MYSORE,
    tag: "Family",
    destinations: [
      "Chikmagalur",
      "Coorg",
      "Mysore",
      "Mangalore",
      "Bangalore"
    ],
    includesList: [
      "Meals",
      "Stays",
      "Transfers"
    ],
    highlights: [
      "Chikmagalur Hills",
      "Coffee Plantations",
      "Coorg Landscapes",
      "Mysore Sightseeing",
      "Waterfalls",
      "Nature Trails"
    ]
  },
  {
    title: "LANSDOWNE & JIM CORBETT WILDLIFE TOUR",
    duration: "3 Nights 4 Days",
    price: "₹ 11,600 +5% GST",
    image: JIMCORBETT,
    tag: "Adventure",
    destinations: [
      "Lansdowne",
      "Jim Corbett National Park"
    ],
    includesList: [
      "Meals",
      "Stays",
      "Transfers"
    ],
    highlights: [
      "Jungle Safari",
      "Jim Corbett National Park",
      "Wildlife Viewing",
      "Waterfalls",
      "Nature Exploration",
      "Lansdowne Hills"
    ]
  },
  {
    title: "HIMACHAL HIGHLIGHTS – SHIMLA, MANALI & DALHOUSIE",
    duration: "10N/11D",
    price: "₹ 31,399 +5% GST",
    image: DALHOUSIE,
    tag: "Family",
    destinations: [
      "Shimla",
      "Manali",
      "Dalhousie"
    ],
    includesList: [
      "Meals",
      "Stays",
      "Transfers"
    ],
    highlights: [
      "Shimla Sightseeing",
      "Manali Valley",
      "Dalhousie",
      "Mountain Landscapes",
      "Hill Station Experience",
      "Scenic Himalayan Views"
    ]
  }
];
const destinations = [
  { name: "Madurai", country: "India", category: "Spiritual", image: Madurai },
  { name: "Tea Garden", country: "India", category: "Nature", image: teagarden },
  { name: "Aru Valley", country: "India", category: "Spiritual", image: aruValley },
  { name: "Ujjain", country: "India", category: "Spiritual", image: Ujjain1 },
  { name: "Edakkal Caves", country: "India", category: "Spiritual", image: ekkalCaves },
  { name: "Kashi Vishwanaath Temple", country: "India", category: "Spiritual", image: Maheshwar },
  { name: "Port Blair", country: "India", category: "Beach", image: Port },
  { name: "Havelock Island", country: "India", category: "Beach", image: Havelock },
  { name: "Leh", country: "India", category: "Adventure", image: Leh },
  { name: "Nubra Valley", country: "India", category: "Adventure", image: Nubra },
  { name: "Pangong Lake", country: "India", category: "Adventure", image: Pangong },
  { name: "Turtuk", country: "India", category: "Adventure", image: turtuk }
];
export {
  destinations as d,
  packages as p
};
