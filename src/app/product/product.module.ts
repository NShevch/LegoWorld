import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { CommentsComponent } from './product-page/comments/comments.component';
import { BasketIconModule } from '../basket-icon/basket-icon.module';
import { ButtonsModule } from '../buttons/buttons.module';


@NgModule({
  declarations: [
    ProductPageComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    BasketIconModule,
    ButtonsModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductModule { }
