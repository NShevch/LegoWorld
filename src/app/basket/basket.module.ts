import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketPageComponent } from './basket-page/basket-page.component';
import { ProductTileComponent } from './basket-page/product-tile/product-tile.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { BasketIconComponent } from './basket-icon/basket-icon.component';



@NgModule({
  declarations: [
    BasketPageComponent,
    ProductTileComponent,
    BasketIconComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports: [
    BasketPageComponent,
    BasketIconComponent
  ]
})
export class BasketModule { }
