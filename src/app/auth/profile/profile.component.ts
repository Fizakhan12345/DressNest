import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface User {
  avatarUrl: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
}
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
 user: User = {
    avatarUrl: '/assets/avatar-placeholder.png',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '+91 98765 43210',
    address: '123 Fashion St',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India'
  };

  // Stats could come from a service
  ordersCount = 12;
  wishlistCount = 5;
  savedAddressCount = 2;

  saveProfile() {
    // TODO: call API to save user changes
    alert('Profile saved!');
  }
}
