import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminEntryComponent } from './admin-entry/admin-entry.component';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '../buttons/buttons.module';
import { ButtonStylesDirective } from '../shared/button-styles.directive';



@NgModule({
  declarations: [
    AdminComponent,
    AdminEntryComponent,
    ButtonStylesDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule
  ]
})
export class AdminModule { }
