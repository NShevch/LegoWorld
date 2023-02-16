import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketPageComponent } from './basket-page/basket-page.component';
import { ProductTileComponent } from './basket-page/product-tile/product-tile.component';
import { ButtonsModule } from '../buttons/buttons.module';



@NgModule({
  declarations: [
    BasketPageComponent,
    ProductTileComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports: [
    BasketPageComponent
  ]
})
export class BasketModule { }
