import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/services.room';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  constructor() {}

  services: Service[] = [];

  ngOnInit(): void {
    this.services = [
      {
        id: 1,
        title: 'Restaurant',
        date: '2024-03-20',
        author: 'Ross Smith',
        image: 'assets/img/ami/7.jpg',
        description: [
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          'Maecenas eu arcu vel neque mattis maximus vitae a ipsum. Nullam venenatis a justo sit amet efficitur.',
          'Praesent gravida, sapien vitae accumsan aliquet, tellus mi euismod turpis, in mollis odio tellus et justo.',
        ],
      },
      {
        id: 2,
        title: 'Top Amenities',
        date: '2024-03-19',
        author: 'Ross Smith',
        image: 'assets/img/ami/3.jpg',
        description: [
          'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
          'Maecenas eu arcu vel neque mattis maximus vitae a ipsum. Nullam venenatis a justo sit amet efficitur.',
          'Praesent gravida, sapien vitae accumsan aliquet, tellus mi euismod turpis, in mollis odio tellus et justo.',
        ],
      },
      {
        id: 3,
        title: 'Breakfast Free',
        date: '2024-03-18',
        author: 'Ross Smith',
        image: 'assets/img/ami/4.jpg',
        description: [
          'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
          'Maecenas eu arcu vel neque mattis maximus vitae a ipsum. Nullam venenatis a justo sit amet efficitur.',
          'Praesent gravida, sapien vitae accumsan aliquet, tellus mi euismod turpis, in mollis odio tellus et justo.',
        ],
      },
      {
        id: 4,
        title: 'Large Car Parking',
        date: '2024-03-17',
        author: 'Ross Smith',
        image: 'assets/img/ami/6.jpg',
        description: [
          'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
          'Maecenas eu arcu vel neque mattis maximus vitae a ipsum. Nullam venenatis a justo sit amet efficitur.',
          'Praesent gravida, sapien vitae accumsan aliquet, tellus mi euismod turpis, in mollis odio tellus et justo.',
        ],
      },
      {
        id: 5,
        title: 'Restaurant: Special 30% Offer',
        date: '2024-03-16',
        author: 'Ross Smith',
        image: 'assets/img/ami/1.jpg',
        description: [
          'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
          'Maecenas eu arcu vel neque mattis maximus vitae a ipsum. Nullam venenatis a justo sit amet efficitur.',
          'Praesent gravida, sapien vitae accumsan aliquet, tellus mi euismod turpis, in mollis odio tellus et justo.',
        ],
      },
    ];
  }
}
