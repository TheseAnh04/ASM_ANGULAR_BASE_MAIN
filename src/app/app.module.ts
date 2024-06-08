import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';
import { FooterLayoutComponent } from './components/footer-layout/footer-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { BannerAdsComponent } from './components/banner-ads/banner-ads.component';
import { HomeNewsComponent } from './components/home-news/home-news.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryAddComponent } from './pages/category-add/category-add.component';
import { ClientComponent } from './layouts/client/client.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { provideRouter } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductDetailPageComponent,
    CartPageComponent,
    HomeBannerComponent,
    ProductItemComponent,
    BannerAdsComponent,
    HomeNewsComponent,
    NewsItemComponent,
    ProductListComponent,
    ProductAddComponent,
    CategoryListComponent,
    CategoryAddComponent,
    ClientComponent,
    AdminComponent,
    ProductEditComponent,
    RegisterComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [provideHttpClient(withFetch()),provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
