import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductComponent } from './main-page/products-display/products.component';
import { FilterComponent } from './main-page/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { BasketIconModule } from '../basket-icon/basket-icon.module';



@NgModule({
  declarations: [
    MainPageComponent,
    ProductComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BasketIconModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainModule { }
