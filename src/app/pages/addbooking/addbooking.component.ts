import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addbooking',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './addbooking.component.html',
  styleUrl: './addbooking.component.css',
})
export class AddbookingComponent {
  activeTab = 1;
  months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
  years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);
  checkInDate = new Date();
  checkOutDate = new Date(new Date().setDate(new Date().getDate() + 5));

  setActiveTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

  nextStep() {
    if (this.activeTab < 4) {
      this.activeTab++;
    }
  }

  previousStep() {
    if (this.activeTab > 1) {
      this.activeTab--;
    }
  }
}
