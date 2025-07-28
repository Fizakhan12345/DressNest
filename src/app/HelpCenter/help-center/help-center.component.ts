import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export interface Category {
  title: string;
  articles: number;
  iconPath: string;          // Any Heroicons / custom SVG path
}

export interface QuickLink {
  title: string;
  desc: string;
  slug: string;              // Route target →  /help/:slug
  emoji: string;             // quick visual
}

@Component({
  selector: 'app-help-center',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.scss'
})
export class HelpCenterComponent {
searchQuery = '';

  /** 4 topic cards under hero */
categories: Category[] = [
  {
    title: 'Payment',
    articles: 3,
    iconPath:
      'M16.5 5.25v-.75a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 003 4.5v15A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75v-11.5A2.25 2.25 0 0018.75 5h-2.25zM18 9H6m6 3h-6'
  },
  {
    title: 'Returns & Refunds',
    articles: 5,
    iconPath:
      'M4.75 6.75A2.25 2.25 0 017 4.5h10a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0117 19.5H7a2.25 2.25 0 01-2.25-2.25V6.75zM12 9.75v3.75m0 0l-1.5-1.5m1.5 1.5l1.5-1.5'
  },
  {
    title: 'Orders & Delivery',
    articles: 8,
    iconPath:
      'M2.25 12l8.954-8.954a1.5 1.5 0 012.121 0l8.954 8.954M4.5 9.75V19.5a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75V15a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.5a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75V9.75'
  },
  {
    title: 'Privacy & Data',
    articles: 5,
    iconPath:
      'M4.5 9.75V7.125A4.125 4.125 0 018.625 3h6.75A4.125 4.125 0 0119.5 7.125V9.75M4.5 9.75v7.125A4.125 4.125 0 008.625 21h6.75A4.125 4.125 0 0019.5 16.875V9.75M4.5 9.75h15'
  }
];

  /** Three big quick‑links */
  quickLinks: QuickLink[] = [
    {
      title: 'FAQ',
      desc: 'Browse frequent questions',
      slug: 'faq',
      emoji: '❓'
    },
    {
      title: 'Contact Us',
      desc: 'Need more help? Reach out',
      slug: 'contact',
      emoji: '💬'
    },
    {
      title: 'Track Order',
      desc: 'See live order status',
      slug: 'track-order',
      emoji: '🚚'
    }
  ];

}
