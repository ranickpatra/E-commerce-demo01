import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app-body/home/home.component';
import { MyAccountComponent } from './app-body/my-account/my-account.component';
import { WishListComponent } from './app-body/wish-list/wish-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'wish-list', component: WishListComponent },
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
