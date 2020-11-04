import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './app-body/home/home.component';
import { ProductCard1Component } from './app-body/cards/product-card1/product-card1.component';
import { ProductCard2Component } from './app-body/cards/product-card2/product-card2.component';
import { ProductCard3Component } from './app-body/cards/product-card3/product-card3.component';
import { BannerCardSmallComponent } from './app-body/cards/banner-card-small/banner-card-small.component';
import { BannerCardSmallFullWidthComponent } from './app-body/cards/banner-card-small-full-width/banner-card-small-full-width.component';
import { BannerCardMediumComponent } from './app-body/cards/banner-card-medium/banner-card-medium.component';
import { ProductCard4Component } from './app-body/cards/product-card4/product-card4.component';
import { BannerCardMediumSmallComponent } from './app-body/cards/banner-card-medium-small/banner-card-medium-small.component';
import { CategoriesCardComponent } from './app-body/cards/categories-card/categories-card.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { WishListComponent } from './app-body/wish-list/wish-list.component';
import { WishListCardComponent } from './app-body/cards/wish-list-card/wish-list-card.component';
import { MyAccountComponent } from './app-body/my-account/my-account.component';
import { CartComponent } from './app-body/cart/cart.component';
import { GroupsComponent } from './app-body/groups/groups.component';
import { FeattureGroupComponent } from './app-body/groups/featture-group/featture-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductCard1Component,
    ProductCard2Component,
    ProductCard3Component,
    BannerCardSmallComponent,
    BannerCardSmallFullWidthComponent,
    BannerCardMediumComponent,
    ProductCard4Component,
    BannerCardMediumSmallComponent,
    CategoriesCardComponent,
    AppBodyComponent,
    WishListComponent,
    WishListCardComponent,
    MyAccountComponent,
    CartComponent,
    GroupsComponent,
    FeattureGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
