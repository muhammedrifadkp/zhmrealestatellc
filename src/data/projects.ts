export type FloorPlan = {
  bedrooms: string;
  images: string[];
};

export type Amenity = {
  name: string;
  icon?: string; // We can use Lucide icons later
};

export type ProjectProperty = {
  id: string;
  slug: string;
  name: string;
  location: string;
  subtitle: string;
  description: string;
  features: {
    bedrooms: string;
    propertyType: string;
    paymentPlan: string;
    startingPrice: string;
    handover: string;
    downPayment: string;
    developer?: string;
    nationality?: string;
  };
  heroImage: string;
  galleryImages: string[];
  amenities: string[];
  floorPlans: FloorPlan[];
  siteMapImage: string;
  mapCode?: string; // Optional embedded Google Maps code or link
};

export const projectsData: ProjectProperty[] = [
  {
    id: "sama-yas",
    slug: "sama-yas",
    name: "Sama Yas",
    location: "Yas Island",
    subtitle: "Experience The Epitome Of Luxurious Living",
    description: "Sama Yas by Al Dar is a luxury park living experience, featuring a collection of 234 apartments, duplexes, and penthouses. Culinary mastermind Chef Izu will curate an exclusive dining experience within the community and inspire the kitchen designs in each home. Set against the serene backdrop of Yas Park, this boutique residential community provides residents with a rare opportunity to enjoy a luxurious lifestyle within nature, with easy access to Yas Island’s world-class leisure and entertainment experiences.",
    features: {
      bedrooms: "1 - 3 BR",
      propertyType: "Apartments, Duplexes, Penthouses",
      paymentPlan: "Flexible payment plan",
      startingPrice: "AED 1,900,000 Starting from",
      handover: "2027 Handover",
      downPayment: "10% Down Payment",
      nationality: "For All Nationalities",
    },
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600",
    galleryImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
    ],
    amenities: [
      "Theatre Room", "Concierge Service", "Community Gardens", "Gym", "Retail", "Cafés", "Spa", "Cycling", "Jogging Tracks"
    ],
    floorPlans: [
      {
        bedrooms: "1 Bedroom",
        images: ["/images/Sama-Yas/1br-1.webp"]
      },
      {
        bedrooms: "2 Bedroom",
        images: ["/images/Sama-Yas/2br-1.webp", "/images/Sama-Yas/2br-2.webp"]
      },
      {
        bedrooms: "3 Bedroom",
        images: ["/images/Sama-Yas/3br-1.webp", "/images/Sama-Yas/3br-2.webp"]
      }
    ],
    siteMapImage: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200",
    mapCode: "https://www.google.com/maps?cid=13736646489557951630"
  },
  {
    id: "yas-riva",
    slug: "yas-riva",
    name: "Yas Riva",
    location: "Yas Island",
    subtitle: "Exclusive Waterfront Villa Living",
    description: "Yas Riva is an exclusive villa community on Yas Island, offering canal-front and canal-accessible homes designed for refined relaxation in a tranquil waterfront setting. Surrounded by world-class attractions, Yas Riva blends elegant architecture with direct canal access to create a distinctive lifestyle where the water becomes an extension of the home.",
    features: {
      bedrooms: "4 – 6 BR Bedroom",
      propertyType: "Standalone Villa",
      paymentPlan: "Flexible Payment Plan",
      startingPrice: "8.3M AED Starting From",
      handover: "Q2 2028 Handover",
      downPayment: "5% Downpayment",
    },
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
    galleryImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"
    ],
    amenities: [
      "Waterfront Living", "Community Market", "Pocket Parks", "Relaxation Spots", "Treatment Room", "Swimming Pool"
    ],
    floorPlans: [
      {
        bedrooms: "4 Bedroom",
        images: ["/images/Yas-Riva/4br-1.webp"]
      },
      {
        bedrooms: "5 Bedroom",
        images: ["/images/Yas-Riva/5br-1.webp", "/images/Yas-Riva/5br-2.webp", "/images/Yas-Riva/5br-3.webp", "/images/Yas-Riva/5br-4.webp", "/images/Yas-Riva/5br-5.webp"]
      },
      {
        bedrooms: "6 Bedroom",
        images: ["/images/Yas-Riva/6br-1.webp", "/images/Yas-Riva/6br-2.webp"]
      }
    ],
    siteMapImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
    mapCode: "https://www.google.com/maps?cid=6331614094278326616"
  },
  {
    id: "manarat-living",
    slug: "manarat-living",
    name: "Manarat Living",
    location: "Saadiyat Island",
    subtitle: "A NEW DESIGN CONCEPT BY ALDAR",
    description: "A groundbreaking new approach that’s bringing home ownership down to earth, with properties to suit your tastes, amenities made for your needs, in locations that connect you to everything. Whether you’re growing your family or building a career, leave that rental behind and make the smart move to a home at Manarat Living.",
    features: {
      bedrooms: "Studio - 2BR",
      propertyType: "Apartments",
      paymentPlan: "Flexible Payment Plan",
      startingPrice: "AED 634,000 Starting From",
      handover: "2026 Handover",
      downPayment: "5% Down Payment",
      developer: "By ALDAR"
    },
    heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
    ],
    amenities: [
      "Concierge Service", "Kids Play Area", "Park", "Gym", "Retail", "Cafés", "Pets Allowed", "View of Landmark", "Pool"
    ],
    floorPlans: [
      {
        bedrooms: "Studio",
        images: ["/images/Manarat-Living-Saadiyat/studio-type-1.webp", "/images/Manarat-Living-Saadiyat/studio-type-1a.webp", "/images/Manarat-Living-Saadiyat/studio-type-2.webp", "/images/Manarat-Living-Saadiyat/studio-type-3.webp", "/images/Manarat-Living-Saadiyat/studio-type-4.webp"]
      },
      {
        bedrooms: "1 Bedroom",
        images: ["/images/Manarat-Living-Saadiyat/1-bed-type-1.webp", "/images/Manarat-Living-Saadiyat/1-bed-type-2.webp", "/images/Manarat-Living-Saadiyat/1-bed-type-3.webp", "/images/Manarat-Living-Saadiyat/1-bed-type-5.webp"]
      },
      {
        bedrooms: "2 Bedroom",
        images: ["/images/Manarat-Living-Saadiyat/2-bed-type-1.webp", "/images/Manarat-Living-Saadiyat/2-bed-m-type-2.webp", "/images/Manarat-Living-Saadiyat/2-bed-type-3.webp", "/images/Manarat-Living-Saadiyat/2-bed-type-5.webp"]
      }
    ],
    siteMapImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
    mapCode: "https://www.google.com/maps?cid=7052363078271759646"
  },
  {
    id: "the-arthouse",
    slug: "the-arthouse",
    name: "The Arthouse",
    location: "Saadiyat Grove",
    subtitle: "Life Between Art & Elegance",
    description: "The Arthouse by Aldar is a refined residential destination in Saadiyat Grove, offering apartments and sky villas designed around creativity, culture, and elevated living in Abu Dhabi’s cultural district. Designed to blend artistic expression with modern living, the project offers thoughtfully crafted homes surrounded by cultural landmarks, green spaces, and world-class lifestyle amenities.",
    features: {
      bedrooms: "1 - 3 BR Apartments, 5 BR Sky Villas",
      propertyType: "Apartments & Sky Villas",
      paymentPlan: "Flexible Payment Plan",
      startingPrice: "Contact for Pricing",
      handover: "Q2 2028 Handover",
      downPayment: "10% Down Payment",
      developer: "By ALDAR"
    },
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600",
    galleryImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
    ],
    amenities: [
      "Secret Garden", "Tennis Court", "Grand Lobby", "Arthouse Cinema", "Health Club Gym", "Kids Playroom", "Entertainment Lounge", "Yoga Rooms", "Creative Majlis"
    ],
    floorPlans: [
      {
        bedrooms: "1 Bedroom",
        images: ["/images/The-Arthouse/1br-1.webp", "/images/The-Arthouse/1br-2.webp", "/images/The-Arthouse/1br-3.webp"]
      },
      {
        bedrooms: "2 Bedroom",
        images: ["/images/The-Arthouse/2br-1.webp", "/images/The-Arthouse/2br-2.webp", "/images/The-Arthouse/2br-3.webp", "/images/The-Arthouse/2br-4.webp"]
      },
      {
        bedrooms: "3 Bedroom",
        images: ["/images/The-Arthouse/3br-1.webp", "/images/The-Arthouse/3br-2.webp", "/images/The-Arthouse/3br-3.webp", "/images/The-Arthouse/3br-4.webp", "/images/The-Arthouse/3br-5.webp"]
      }
    ],
    siteMapImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
    mapCode: "https://www.google.com/maps?cid=3510584966415592117"
  },
  {
    id: "muheira",
    slug: "muheira",
    name: "Muheira",
    location: "Al Reem Island, Abu Dhabi",
    subtitle: "Experience the Epitome of Luxury Living at Muheira on Al Reem Island",
    description: "Welcome to Muheira, a stunning residential project designed for those who value comfort and elegance. Offering a remarkable selection of 1 to 3-bedroom apartments, this off-plan development by Modon Properties aims to provide a sophisticated lifestyle amidst modern amenities and natural beauty. Strategically located in one of Abu Dhabi’s most desirable communities, providing residents with breathtaking views and unmatched facilities.",
    features: {
      bedrooms: "1, 2, 3",
      propertyType: "Residential Apartment",
      paymentPlan: "Off Plan (Flexible)",
      startingPrice: "AED 1,300,000 Starting From",
      handover: "Jun 2029 Handover",
      downPayment: "Contact for details",
      developer: "By Modon Properties"
    },
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600",
    galleryImages: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
    ],
    amenities: [
      "Swimming pool", "Cycling Tracks", "Children's play area", "Study Room", "Parks", "Indoor Cinema", "Jogging Track", "Kids play area", "Sky Pod", "Lounge", "Gym"
    ],
    floorPlans: [
      {
        bedrooms: "1 Bedroom",
        images: ["/images/Muheira/1BR-Type-1.png", "/images/Muheira/1BR-Type-2.png", "/images/Muheira/1BR-Type-3.png", "/images/Muheira/1BR-Type-4.png"]
      },
      {
        bedrooms: "2 Bedroom",
        images: ["/images/Muheira/2BR-Type-1A.png", "/images/Muheira/2BR-Type-1A-Corner.png", "/images/Muheira/2BR-Type-1B.png", "/images/Muheira/2BR-Type-1C-Corner.png", "/images/Muheira/2BR-Type-2A.png", "/images/Muheira/2BR-Type-3.png"]
      },
      {
        bedrooms: "3 Bedroom",
        images: ["/images/Muheira/3BR-Type-1A.png", "/images/Muheira/3BR-Type-1B.png", "/images/Muheira/3BR-Type-1C.png"]
      }
    ],
    siteMapImage: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200",
    mapCode: "https://www.google.com/maps?cid=5129177740809991f1c"
  }
];
