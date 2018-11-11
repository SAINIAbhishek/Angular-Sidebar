// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Components
import { SidebarComponent } from './sidebar.component';

// Services



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
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
