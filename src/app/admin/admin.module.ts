import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminEntryComponent } from './admin-entry/admin-entry.component';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '../buttons/buttons.module';



@NgModule({
  declarations: [
    AdminComponent,
    AdminEntryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule
  ]
})
export class AdminModule { }
