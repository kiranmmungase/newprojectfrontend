import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './component/update-product/update-product.component';
import { HomeComponent } from './component/home/home.component';
import { CardsComponent } from './component/cards/cards.component';
import { OrderComponent } from './component/order/order.component';
import { AddOrderComponent } from './component/add-order/add-order.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import { ActivitiesComponent } from './component/activities/activities.component';
import { FooterComponent } from './component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AddProductComponent,
    ProductListComponent,
    UpdateProductComponent,
    HomeComponent,
    CardsComponent,
    OrderComponent,
    AddOrderComponent,
    OrderListComponent,
    ActivitiesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
