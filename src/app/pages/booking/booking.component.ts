import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuItem } from '../../models/menu.item';
import { Booking } from '../../models/booking';
import { Notification } from '../../models/notification';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  user = {
    name: 'Jana Novakova',
    location: 'New York, United States',
    avatar: 'assets/img/comment_photo_1.jpg'
  };

  menuItems: MenuItem[] = [
    
    { icon: 'fas fa-calendar-check', label: 'Mis reservas', route: '/booking' },
    { icon: 'fas fa-plus-circle', label: 'Nueva Reserva', route: '/addbooking' },
    { icon: 'fas fa-clipboard-list', label: 'Encuesta de Satisfacion', route: '/new-booking' },
    { icon: 'fas fa-chart-line', label: 'Actividad', route: '/activity' },
    { icon: 'fas fa-sign-out-alt', label: 'Salir', route: '/logout' }
  ];

  bookings: Booking[] = [
    {
      id: 1,
      name: 'Alvin',
      phone: '+01 4215 3521',
      city: 'New york',
      country: 'USA',
      arrival: '12may',
      departure: '20may',
      members: 12,
      status: 'success'
    },
    {
      id: 2,
      name: 'Liam',
      phone: '+01 2484 6521',
      city: 'Bangalore',
      country: 'India',
      arrival: '18apr',
      departure: '24apr',
      members: 12,
      status: 'success'
    },
    {
      id: 3,
      name: 'Logan',
      phone: '+01 6524 6521',
      city: 'Los Angeles',
      country: 'USA',
      arrival: '05dec',
      departure: '12dec',
      members: 12,
      status: 'pending'
    },
    {
      id: 4,
      name: 'Michael',
      phone: '+01 3652 1425',
      city: 'Bristol',
      country: 'UK',
      arrival: '14jen',
      departure: '24jen',
      members: 12,
      status: 'pending'
    },
    {
      id: 5,
      name: 'Alvin',
      phone: '+01 4215 3521',
      city: 'New york',
      country: 'USA',
      arrival: '12may',
      departure: '20may',
      members: 12,
      status: 'success'
    },
    {
      id: 6,
      name: 'Alvin',
      phone: '+01 4215 3521',
      city: 'New york',
      country: 'USA',
      arrival: '12may',
      departure: '20may',
      members: 12,
      status: 'success'
    },
    {
      id: 7,
      name: 'Liam',
      phone: '+01 2484 6521',
      city: 'Bangalore',
      country: 'India',
      arrival: '18apr',
      departure: '24apr',
      members: 12,
      status: 'success'
    },
    {
      id: 8,
      name: 'Logan',
      phone: '+01 6524 6521',
      city: 'Los Angeles',
      country: 'USA',
      arrival: '05dec',
      departure: '12dec',
      members: 12,
      status: 'pending'
    },
    {
      id: 9,
      name: 'Michael',
      phone: '+01 3652 1425',
      city: 'Bristol',
      country: 'UK',
      arrival: '14jen',
      departure: '24jen',
      members: 12,
      status: 'pending'
    },
    {
      id: 10,
      name: 'Alvin',
      phone: '+01 4215 3521',
      city: 'New york',
      country: 'USA',
      arrival: '12may',
      departure: '20may',
      members: 12,
      status: 'success'
    }
  ];

  notifications: Notification[] = [
    {
      id: 1,
      image: 'assets/img/icon/dbr1.jpg',
      title: 'Joseph, write a review',
      description: 'All the Lorem Ipsum generators on the',
      time: '2 hours ago'
    },
    {
      id: 2,
      image: 'assets/img/icon/dbr2.jpg',
      title: '14 New Messages',
      description: 'All the Lorem Ipsum generators on the',
      time: '4 hours ago'
    },
    {
      id: 3,
      image: 'assets/img/icon/dbr3.jpg',
      title: 'Ads expairy soon',
      description: 'All the Lorem Ipsum generators on the',
      time: '10 hours ago'
    },
    {
      id: 4,
      image: 'assets/img/icon/dbr4.jpg',
      title: 'Post free ads - today only',
      description: 'All the Lorem Ipsum generators on the',
      time: '12 hours ago'
    },
    {
      id: 5,
      image: 'assets/img/icon/dbr5.jpg',
      title: 'listing limit increase',
      description: 'All the Lorem Ipsum generators on the',
      time: '14 hours ago'
    },
    {
      id: 6,
      image: 'assets/img/icon/dbr6.jpg',
      title: 'mobile app launch',
      description: 'All the Lorem Ipsum generators on the',
      time: '18 hours ago'
    },
    {
      id: 7,
      image: 'assets/img/icon/dbr7.jpg',
      title: 'Setting Updated',
      description: 'All the Lorem Ipsum generators on the',
      time: '20 hours ago'
    },
    {
      id: 8,
      image: 'assets/img/icon/dbr8.jpg',
      title: 'Increase listing viewers',
      description: 'All the Lorem Ipsum generators on the',
      time: '2 days ago'
    }
  ];

  editBooking(booking: Booking): void {
    console.log('Editing booking:', booking);
    // Implementar lógica de edición
  }

  cancelBooking(booking: Booking): void {
    if (confirm(`Are you sure you want to cancel the booking for ${booking.name}?`)) {
      console.log('Cancelling booking:', booking);
      // Implementar lógica de cancelación
    }
  }
}
