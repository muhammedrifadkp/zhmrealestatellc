export interface Unit {
  id: string;
  price: string;
  subtitle: string;
  location: string;
  type: string;
  beds: string;
  baths: string;
  sqft: string;
  contract: "sale" | "rent";
  image: string;
}

const baseUnits: Omit<Unit, "id" | "image">[] = [
  {
    price: "AED 8,800,000",
    subtitle: "Private Pool | 5 Balconies | Exclusive with Us",
    location: "Al Raha Beach, Abu Dhabi",
    type: "Townhouse",
    beds: "4 Beds",
    baths: "6 Baths",
    sqft: "6,893 Sqft",
    contract: "sale"
  },
  {
    price: "AED 125,000",
    subtitle: "Marina View | Fully Furnished | Ready to Move",
    location: "Al Reem Island, Abu Dhabi",
    type: "Apartment",
    beds: "1 Beds",
    baths: "2 Baths",
    sqft: "861 Sqft",
    contract: "rent"
  },
  {
    price: "AED 1,750,000",
    subtitle: "Terrace | Negotiable Price | Prime Location",
    location: "Al Reef, Abu Dhabi",
    type: "Townhouse",
    beds: "2 Beds",
    baths: "3 Baths",
    sqft: "1,263 Sqft",
    contract: "sale"
  },
  {
    price: "AED 1,300,000",
    subtitle: "Reef apartment | downtown | type C | amazing apartment",
    location: "Al Reef, Abu Dhabi",
    type: "Apartment",
    beds: "2 Beds",
    baths: "2 Baths",
    sqft: "1,583 Sqft",
    contract: "sale"
  },
  {
    price: "AED 95,000",
    subtitle: "Amazing View | High Floor | Ready To Move",
    location: "Al Reem Island, Abu Dhabi",
    type: "Apartment",
    beds: "1 Beds",
    baths: "2 Baths",
    sqft: "904 Sqft",
    contract: "rent"
  },
  {
    price: "AED 130,000",
    subtitle: "Flexible Payments | Balcony | Ready to Move",
    location: "Al Reem Island, Abu Dhabi",
    type: "Apartment",
    beds: "2 Beds",
    baths: "3 Baths",
    sqft: "1,335 Sqft",
    contract: "rent"
  },
  {
    price: "AED 85,000",
    subtitle: "Prime Location | Modern Layout | Ready to Move",
    location: "Al Reem Island, Abu Dhabi",
    type: "Apartment",
    beds: "1 Beds",
    baths: "1 Baths",
    sqft: "861 Sqft",
    contract: "rent"
  },
  {
    price: "AED 115,000",
    subtitle: "Upcoming | Corner Unit | City View",
    location: "Al Reem Island, Abu Dhabi",
    type: "Apartment",
    beds: "1 Beds",
    baths: "2 Baths",
    sqft: "883 Sqft",
    contract: "rent"
  },
  {
    price: "AED 2,000,000",
    subtitle: "Prime Location | Luxury Living | Canal View",
    location: "Al Reem Island, Abu Dhabi",
    type: "Apartment",
    beds: "2 Beds",
    baths: "3 Baths",
    sqft: "1,431 Sqft",
    contract: "sale"
  },
  {
    price: "AED 100,000",
    subtitle: "Fully Furnished – Hotel Style | Amazing View | Ready to Move",
    location: "Al Reem Island, Abu Dhabi",
    type: "Apartment",
    beds: "1 Beds",
    baths: "2 Baths",
    sqft: "915 Sqft",
    contract: "rent"
  }
];

const images = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
];

// Generate exactly 50 items simulating 5 pages of psinv results
export const unitsData: Unit[] = Array.from({ length: 50 }).map((_, index) => {
  const base = baseUnits[index % baseUnits.length];
  // Add a slight multiplier to price to make them distinct across pages
  const baseNum = parseInt(base.price.replace(/[^\d]/g, ''), 10);
  const variation = baseNum + (Math.floor(index / 10) * 50000);
  const newPrice = `AED ${variation.toLocaleString('en-US')}`;

  return {
    ...base,
    id: `unit-${index + 1}`,
    price: index > 0 ? newPrice : base.price, 
    image: images[index % images.length],
  };
});
