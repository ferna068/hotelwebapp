import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryImage } from '../../models/gallery';

@Component({
  selector: 'app-galleries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galleries.component.html',
  styleUrl: './galleries.component.css'
})
export class GalleriesComponent implements OnInit {
  constructor() {}

  images: GalleryImage[] = [];
  selectedImage: GalleryImage | null = null;

  ngOnInit(): void {
    this.images = [
      {
        id: 1,
        src: 'assets/img/room/1.jpg',
        caption: 'Luxury Suite Room',
        alt: 'Luxury hotel room with king size bed'
      },
      {
        id: 2,
        src: 'assets/img/room/2.jpg',
        caption: 'Deluxe Ocean View',
        alt: 'Hotel room with ocean view'
      },
      {
        id: 3,
        src: 'assets/img/room/3.jpg',
        caption: 'Executive Suite',
        alt: 'Spacious executive suite'
      },
      {
        id: 4,
        src: 'assets/img/room/4.jpg',
        caption: 'Family Room',
        alt: 'Comfortable family room'
      },
      {
        id: 5,
        src: 'assets/img/room/5.jpg',
        caption: 'Premium Suite',
        alt: 'Premium suite with modern amenities'
      },
      {
        id: 6,
        src: 'assets/img/room/6.jpg',
        caption: 'Garden View Room',
        alt: 'Room with beautiful garden view'
      },
      {
        id: 7,
        src: 'assets/img/room/1.jpg',
        caption: 'Main Restaurant',
        alt: 'Elegant hotel restaurant'
      },
      {
        id: 8,
        src: 'assets/img/room/2.jpg',
        caption: 'Rooftop Bar',
        alt: 'Scenic rooftop bar'
      }
    ]
  }

  openModal(image: GalleryImage): void {
    this.selectedImage = image;
  }
}
