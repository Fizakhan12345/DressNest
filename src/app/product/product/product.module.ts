import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
         RouterModule.forChild([{ path: '/products', component: ProductComponent }]),
  ]
})
export class ProductModule { }
