import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Room } from '../../models/room';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  rooms: Room[] = [
    {
      id: 1,
      name: 'Master Suite',
      image: 'assets/img/room/1.jpg',
      rating: 4.5,
      maxAdults: 3,
      maxChildren: 1,
      amenities: [
        'Ironing facilities',
        'Tea/Coffee maker',
        'Air conditioning',
        'Flat-screen TV',
        'Wake-up service'
      ],
      priceOriginal: 7000,
      priceDiscount: 5000,
      isAvailable: true,
      isFeatured: true,
      detailsLink: 'room-details-block'
    },
    {
      id: 2,
      name: 'Mini Suite',
      image: 'assets/img/room/2.jpg',
      rating: 4.2,
      maxAdults: 2,
      maxChildren: 2,
      amenities: [
        'Ironing facilities',
        'Tea/Coffee maker',
        'Air conditioning',
        'Flat-screen TV',
        'Wake-up service'
      ],
      priceOriginal: 4500,
      priceDiscount: 4000,
      isAvailable: true,
      isFeatured: true,
      detailsLink: 'room-details'
    },
    {
      id: 3,
      name: 'Ultra Deluxe',
      image: 'assets/img/room/3.jpg',
      rating: 3.9,
      maxAdults: 4,
      maxChildren: 2,
      amenities: [
        'Ironing facilities',
        'Tea/Coffee maker',
        'Air conditioning',
        'Flat-screen TV',
        'Wake-up service'
      ],
      priceOriginal: 4000,
      priceDiscount: 3500,
      isAvailable: true,
      detailsLink: 'room-details-1'
    },
    {
      id: 4,
      name: 'Luxury Room',
      image: 'assets/img/room/4.jpg',
      rating: 4.0,
      maxAdults: 5,
      maxChildren: 2,
      amenities: [
        'Ironing facilities',
        'Tea/Coffee maker',
        'Air conditioning',
        'Flat-screen TV',
        'Wake-up service'
      ],
      priceOriginal: 3500,
      priceDiscount: 3000,
      isAvailable: true,
      detailsLink: 'room-details'
    },
    {
      id: 5,
      name: 'Premium Room',
      image: 'assets/img/room/5.jpg',
      rating: 4.5,
      maxAdults: 5,
      maxChildren: 2,
      amenities: [
        'Ironing facilities',
        'Tea/Coffee maker',
        'Air conditioning',
        'Flat-screen TV',
        'Wake-up service'
      ],
      priceOriginal: 5000,
      priceDiscount: 4000,
      isAvailable: true,
      specialTag: 'Special',
      detailsLink: 'room-details-block'
    },
    {
      id: 6,
      name: 'Normal Room',
      image: 'assets/img/room/6.jpg',
      rating: 3.5,
      maxAdults: 4,
      maxChildren: 4,
      amenities: [
        'Ironing facilities',
        'Tea/Coffee maker',
        'Air conditioning',
        'Flat-screen TV',
        'Wake-up service'
      ],
      priceOriginal: 2500,
      priceDiscount: 2000,
      isAvailable: true,
      detailsLink: 'room-details'
    }
  ];

  // Método para generar estrellas de rating
  getRatingStars(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return Array(5).fill(0).map((_, index) => 
      index < fullStars ? 2 : (hasHalfStar && index === fullStars ? 1 : 0)
    );
  }

  // Método para formatear precio
  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  }

  // Método para obtener texto de disponibilidad
  getAvailabilityText(isAvailable: boolean): string {
    return isAvailable ? 'Available' : 'Not Available';
  }

  // Método para obtener clase de badge de disponibilidad
  getAvailabilityClass(isAvailable: boolean): string {
    return isAvailable ? 'bg-success' : 'bg-danger';
  }

  // Método para obtener texto del tooltip de booking
  getBookingTooltip(room: Room): string {
    return room.isAvailable 
      ? `Book ${room.name} now` 
      : 'This room is currently not available';
  }
}
