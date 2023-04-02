import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketModule } from './basket/basket.module';
import { MainModule } from './main/main.module';
import { ProductModule } from './product/product.module';
import ProductsData from './services/products-data.service';
import Basket from './services/basket.service';
import { AdminModule } from './admin/admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonStylesDirective } from './shared/button-styles.directive';

@NgModule({
  declarations: [
    AppComponent,
    // ButtonStylesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    BasketModule,
    ProductModule,
    AdminModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductsData,
    Basket
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
