import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Sidebar2Module } from './sidebar-2/sidebar-2-module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    Sidebar2Module,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
