export interface Room {
  id: number;
  name: string;
  image: string;
  rating: number;
  maxAdults: number;
  maxChildren: number;
  amenities: string[];
  priceOriginal: number;
  priceDiscount: number;
  isAvailable: boolean;
  isFeatured?: boolean;
  specialTag?: string;
  detailsLink: string;
}
