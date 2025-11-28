import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  oldPrice?: number;
  badge?: string;        // e.g. 'NEW', '1+1 FREE'
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
products: Product[] = [
  {
    id: 1,
    name: 'Satin Bodycon Mini Dress – Champagne Glow',
    imgUrl: 'https://picsum.photos/id/1005/600/700',
    price: 59.99,
    oldPrice: 89.99,
    badge: 'Hot'
  },
  {
    id: 2,
    name: 'Summer Floral Midi Dress – Paris Blue',
    imgUrl: 'https://picsum.photos/id/1011/600/700',
    price: 49.95,
    badge: 'New'
  },
  {
    id: 3,
    name: 'Vintage Denim Shirt Dress – Western Blue',
    imgUrl: 'https://picsum.photos/id/1018/600/700',
    price: 79.00,
    oldPrice: 109.00,
    badge: 'Sale'
  },
  {
    id: 4,
    name: 'Boho Ruffle Maxi Dress – Sunset Orange',
    imgUrl: 'https://picsum.photos/id/1021/600/700',
    price: 69.95
  }
];


  /** For *ngFor trackBy to avoid re‑rendering */
  trackById(_: number, item: Product): number {
    return item.id;
  }
}
