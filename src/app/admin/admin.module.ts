import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminEntryComponent } from './admin-entry/admin-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '../buttons/buttons.module';
import { DirectivesModule } from '../shared/directives/directives.module';



@NgModule({
  declarations: [
    AdminComponent,
    AdminEntryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    DirectivesModule
  ]
})
export class AdminModule { }
