// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Components
import { SidebarComponent } from './sidebar.component';

// Services



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    SidebarComponent
  ],
  providers: [
  ],
  exports: [
    SidebarComponent
  ]
})

export class SidebarModule {}
