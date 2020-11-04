import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './head/header/header.component';
import { HomeComponent } from './body/home/home.component';
import { ProductCard1Component } from './body/cards/product-card1/product-card1.component';
import { ProductCard2Component } from './body/cards/product-card2/product-card2.component';
import { ProductCard3Component } from './body/cards/product-card3/product-card3.component';
import { BannerCardSmallComponent } from './body/cards/banner-card-small/banner-card-small.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductCard1Component,
    ProductCard2Component,
    ProductCard3Component,
    BannerCardSmallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
