export interface IListing {
  id: number;
  title: string;
  listing_type: "Apartment" | "Office" | "House";
  description: string;
  division: string;
  borough: string;
  property_status: string;
  price: number;
  rental_frequency: string;
  rooms: number;
  furnished: boolean;
  pool: boolean;
  elevator: boolean;
  cctv: boolean;
  parking: boolean;
  location: {
    type: string;
    coordinates: number[];
  };
  picture1: string;
}
