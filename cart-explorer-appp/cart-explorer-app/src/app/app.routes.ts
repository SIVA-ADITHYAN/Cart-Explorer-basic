import { Routes } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

export const routes: Routes = [
  { path: 'carts', component: CartListComponent },
  { path: 'carts/:id', component: CartDetailsComponent },
  { path: '', redirectTo: '/carts', pathMatch: 'full' }
];