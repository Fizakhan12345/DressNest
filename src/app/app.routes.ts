import { Routes } from '@angular/router';
import { ProductComponent } from './product/product/product.component';
import { HomeComponent } from './home/home/home.component';
import { CollectionComponent } from './collection/collection/collection.component';
import { HelpCenterComponent } from './HelpCenter/help-center/help-center.component';
import { AboutusComponent } from './Aboutus/aboutus/aboutus.component';
import { FaqComponent } from './HelpCenter/help-center/faq/faq/faq.component';
import { ContactComponent } from './HelpCenter/help-center/contact/contact/contact.component';
import { TrackOrderComponent } from './HelpCenter/help-center/TrackOrder/track-order/track-order.component';
import { AcountComponent } from './Acount/acount/acount.component';
import { CartComponent } from '../cart/cart/cart.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { ProfileComponent } from './auth/profile/profile.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'collections', component: CollectionComponent },
  {
    path:'help',component:HelpCenterComponent
  }, 
  {
    path:'account',component:AcountComponent
  },
  {
    path:'cart',component:CartComponent
  },
    {
    path:'help/faq',component:FaqComponent
  },
  {
    path:'check-out',component:CheckoutComponent
  },
    {
    path:'profile',component:ProfileComponent
  },
     {
    path:'help/contact',component:ContactComponent
  },
      {
    path:'help/track-order',component:TrackOrderComponent
  },

];
