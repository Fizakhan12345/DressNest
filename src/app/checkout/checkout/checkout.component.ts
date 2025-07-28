import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }      from '@angular/material/input';
import { MatRadioModule }      from '@angular/material/radio';
import { MatButtonModule }     from '@angular/material/button';
interface CartItem {
  title: string;
  image: string;
  qty: number;
  price: number;
}
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,FormsModule,    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  cart: CartItem[] = [
    {
      title : 'Boho Chic Kurti Set',
      image : '/assets/images/JeansTops.jpg',
      qty   : 1,
      price : 1299
    },
    {
      title : 'Denim Corset Top',
      image : '/assets/images/traditional.webp',
      qty   : 2,
      price : 999
    }
  ];

  step       = 1;            // 1 = address, 2 = payment
  payMethod  = 'card';
  shipMethod = 'std';        // std | xprs

  get subtotal() {
    return this.cart.reduce((s, i) => s + i.price * i.qty, 0);
  }

  shippingFee() {
    return this.shipMethod === 'std' ? 0 : 149;
  }

  get grandTotal() {
    return this.subtotal + this.shippingFee();
  }

  onSubmit(f: NgForm) {
    if (f.invalid) return;
    alert('✅ Order placed successfully!');
    /* TODO: call backend / payment gateway */
  }
}
