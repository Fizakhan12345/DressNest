/* path: src/app/home/home.module.ts */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

// import { HeroCarouselComponent } from '../shared/components/hero-carousel/hero-carousel.component';
// import { ProductListComponent } from '../products/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //  RouterModule.forChild([{ path: '', component: HomeComponent }]),
    // HeroCarouselComponent,   // standalone component export
    // ProductListComponent,    // show grid of products
    // RouterModule.forChild(routes),
  ],
})
export class HomeModule {}