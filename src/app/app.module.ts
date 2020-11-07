import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './app-body/home/home.component';
import { ProductCard1Component } from './app-body/components/cards/product-card1/product-card1.component';
import { ProductCard2Component } from './app-body/components/cards/product-card2/product-card2.component';
import { ProductCard3Component } from './app-body/components/cards/product-card3/product-card3.component';
import { BannerCardSmallComponent } from './app-body/components/cards/banner-card-small/banner-card-small.component';
import { BannerCardSmallFullWidthComponent } from './app-body/components/cards/banner-card-small-full-width/banner-card-small-full-width.component';
import { BannerCardMediumComponent } from './app-body/components/cards/banner-card-medium/banner-card-medium.component';
import { ProductCard4Component } from './app-body/components/cards/product-card4/product-card4.component';
import { BannerCardMediumSmallComponent } from './app-body/components/cards/banner-card-medium-small/banner-card-medium-small.component';
import { CategoriesCardComponent } from './app-body/components/cards/categories-card/categories-card.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { WishListComponent } from './app-body/wish-list/wish-list.component';
import { WishListCardComponent } from './app-body/components/cards/wish-list-card/wish-list-card.component';
import { MyAccountComponent } from './app-body/my-account/my-account.component';
import { CartComponent } from './app-body/cart/cart.component';
import { GroupsComponent } from './app-body/groups/groups.component';
import { FeattureGroupComponent } from './app-body/groups/featture-group/featture-group.component';
import { SearchComponent } from './header/search/search.component';
import { ComponentsComponent } from './app-body/components/components.component';
import { PriceComponent } from './app-body/components/price/price.component';
import { PriceComponent1Component } from './app-body/components/price/price-component1/price-component1.component';
import { RattingComponent } from './app-body/components/ratting/ratting.component';
import { ProductRattingViewComponent } from './app-body/components/ratting/product-ratting-view/product-ratting-view.component';
import { PriceComponent2Component } from './app-body/components/price/price-component2/price-component2.component';
import { CheckoutComponent } from './app-body/checkout/checkout.component';
import { ShopComponent } from './app-body/shop/shop.component';
import { ProductComponent } from './app-body/product/product.component';
import { ProductImageComponent } from './app-body/product/product-image/product-image.component';
import { ProductDetailsComponent } from './app-body/product/product-details/product-details.component';
import { ProductRattingViewFullComponent } from './app-body/components/ratting/product-ratting-view-full/product-ratting-view-full.component';
import { FooterComponent } from './footer/footer.component';
import { ProductVariant1Component } from './app-body/product/product-variant1/product-variant1.component';

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
    SearchComponent,
    ComponentsComponent,
    PriceComponent,
    PriceComponent1Component,
    RattingComponent,
    ProductRattingViewComponent,
    PriceComponent2Component,
    CheckoutComponent,
    ShopComponent,
    ProductComponent,
    ProductImageComponent,
    ProductDetailsComponent,
    ProductRattingViewFullComponent,
    FooterComponent,
    ProductVariant1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
