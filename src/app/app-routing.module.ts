import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './component/add-order/add-order.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { HomeComponent } from './component/home/home.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { UpdateProductComponent } from './component/update-product/update-product.component';

const routes: Routes = [
  {
    path : "updateproduct/:id" , component : UpdateProductComponent
  },
  {
    path : "productlist" , component : ProductListComponent
  },
  {
    path : "orderadd" , component : AddOrderComponent
  },
  {
    path : "orderlist" , component : OrderListComponent
  },
  {
    path : "addproduct" , component : AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
