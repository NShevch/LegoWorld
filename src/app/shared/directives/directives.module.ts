import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonStylesDirective } from './button-styles.directive';



@NgModule({
  declarations: [
    ButtonStylesDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonStylesDirective
  ]
})
export class DirectivesModule { }
