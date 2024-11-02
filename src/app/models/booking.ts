export interface Booking {
  id: number;
  name: string;
  phone: string;
  city: string;
  country: string;
  arrival: string;
  departure: string;
  members: number;
  status: 'success' | 'pending' | 'cancelled';
  canCancel?: boolean;
}