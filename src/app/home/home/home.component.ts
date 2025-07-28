import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [   RouterLink,           // 👈 add
    RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredSlides: string[] = [
    'assets/slides/slide‑1.jpg',
    'assets/slides/slide‑2.jpg',
    'assets/slides/slide‑3.jpg',
  ];
}
