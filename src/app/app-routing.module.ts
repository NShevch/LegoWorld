import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEntryComponent } from './admin/admin-entry/admin-entry.component';
import { AdminComponent } from './admin/admin.component';
import { BasketPageComponent } from './basket/basket-page/basket-page.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { ProductPageComponent } from './product/product-page/product-page.component';

const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "main", component: MainPageComponent, pathMatch: "full"},
  { path: "basket", component: BasketPageComponent, pathMatch: "full"},
  { path: "product/:name", component: ProductPageComponent, pathMatch: "full"},
  { path: "admin", component: AdminEntryComponent, pathMatch: "full"},
  { path: "adminPage", component: AdminComponent, pathMatch: "full"},
  { path: "**", redirectTo: "main", pathMatch: "full"},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
