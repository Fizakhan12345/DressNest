import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-track-order',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './track-order.component.html',
  styleUrl: './track-order.component.scss'
})
export class TrackOrderComponent {
 isLoading = false;
  orderStatus: any = null;

  onTrackOrder(form: any) {
    if (form.invalid) return;

    this.isLoading = true;
    this.orderStatus = null;

    setTimeout(() => {
      this.isLoading = false;
      this.orderStatus = {
        status: 'Shipped',
        deliveryDate: 'Monday, July 8',
        trackingId: '123456789ABC',
        carrier: 'Bluedart'
      };
    }, 2000);
  }
}
