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
      name: 'Elegant Saree Set – Peach Gold',
      imgUrl: 'https://picsum.photos/id/103/500/500',
      price: 79.99,
      oldPrice: 149.99,
      badge: '1 + 1 FREE'
    },
    {
      id: 2,
      name: 'Indo‑Western Jumpsuit – Black Sparkle',
      imgUrl: 'https://picsum.photos/id/1044/500/500',
      price: 99.95,
      oldPrice: 120.00,
      badge: 'NEW'
    },
    {
      id: 3,
      name: 'Festive Lehenga Choli – Rose Red',
      imgUrl: 'https://picsum.photos/id/1062/500/500',
      price: 119.00,
      oldPrice: 199.00,
      badge: '2 + 2 FREE'
    },
    {
      id: 4,
      name: 'Boho Chic Kurti Set – Mustard Yellow',
      imgUrl: 'https://picsum.photos/id/1074/500/500',
      price: 49.95,
      oldPrice: 89.00
    }
  ];

  /** For *ngFor trackBy to avoid re‑rendering */
  trackById(_: number, item: Product): number {
    return item.id;
  }
}
