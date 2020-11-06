import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './app-body/cart/cart.component';
import { CheckoutComponent } from './app-body/checkout/checkout.component';
import { HomeComponent } from './app-body/home/home.component';
import { MyAccountComponent } from './app-body/my-account/my-account.component';
import { WishListComponent } from './app-body/wish-list/wish-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'wish-list', component: WishListComponent },
  {path: 'cart', component: CartComponent },
  {path: 'checkout', component: CheckoutComponent },
  {path: 'my-account', component: MyAccountComponent },
  {path: '**', redirectTo: '',}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
