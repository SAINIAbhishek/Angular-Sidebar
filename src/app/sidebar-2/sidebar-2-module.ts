// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Components
import { Sidebar2Component } from './sidebar-2.component';

// Services



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    Sidebar2Component
  ],
  providers: [
  ],
  exports: [
    Sidebar2Component
  ]
})

export class Sidebar2Module {}
