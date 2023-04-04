import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEntryComponent } from './admin/admin-entry/admin-entry.component';
import { AdminComponent } from './admin/admin.component';
import { BasketPageComponent } from './basket/basket-page/basket-page.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { ProductPageComponent } from './product/product-page/product-page.component';
import { AuthGuard } from './admin/auth-guard.service';

const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "main", component: MainPageComponent},
  { path: "basket", component: BasketPageComponent},
  { path: "product/:name", component: ProductPageComponent},
  { path: "admin", component: AdminEntryComponent},
  { path: "adminPage", component: AdminComponent/* , canActivate: [AuthGuard] */},
  { path: "**", redirectTo: "main"},
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
