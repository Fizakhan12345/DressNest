import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;   // unit price
  qty: number;
  size?: string;
}
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent {
  cart: CartItem[] = [
    {
      id   : 1,
      title: 'Boho Chic Kurti Set',
      image: 'assets/images/Dresses.jpg',
      price: 1299,
      qty  : 1,
      size : 'M'
    },
    {
      id   : 2,
      title: 'Denim Corset Top',
      image: 'assets/images/JeansTops.jpg',
      price: 999,
      qty  : 2,
      size : 'S'
    }
  ];

  /** Increase / decrease quantity */
  changeQty(item: CartItem, delta: number) {
    const newQty = item.qty + delta;
    if (newQty >= 1) item.qty = newQty;
  }

  /** Remove an item entirely */
  removeItem(id: number) {
    this.cart = this.cart.filter(p => p.id !== id);
  }

  /** Cart total */
  get total(): number {
    return this.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  }
}
