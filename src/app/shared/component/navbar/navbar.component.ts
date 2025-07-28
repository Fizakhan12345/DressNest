import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-navbar',
    standalone: true,        //  ★ add this line
  imports: [CommonModule,
     RouterLink,           // 👈 add
    RouterLinkActive 
  ], //  ★ at minimum (needed for *ngIf, *ngFor)
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: any, 
private route:Router) {}
  menuOpen = false;
  isMobile = false;
  cartCount = 0; // bind this to your cart service

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 992;
    if (!this.isMobile) {
      this.menuOpen = false; // reset if user grows screen
    }
  }
ngOnInit() {
  if (isPlatformBrowser(this.platformId)) {
    this.onResize();
  }
}


  toggleMenu() {
    if (this.isMobile) {
      this.menuOpen = !this.menuOpen;
    }
  }
  viewHomeComponent(){
        this.route.navigate(['/home']);
  }
viewProductComponent(){
  this.route.navigate(['/products'])
}
viewCollectionComponent(){
  this.route.navigate(['/collections'])
}
viewHelpCenterComponent(){
  this.route.navigate(['/help'])
}
viewAboutComponent(){
  this.route.navigate(['/account'])
}
viewCartComponent(){
  this.route.navigate(['/cart'])
}
  openSearch() {
    // Do whatever opens your search dialog
  }
}
