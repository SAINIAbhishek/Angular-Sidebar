import { Component, OnInit } from '@angular/core';
import { SidebarInterface } from './sidebar/interface/sidebar-interface';
import {Sidebar2Interface} from './sidebar-2/interface/sidebar-2-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  sidebarValue: SidebarInterface = {};

  sidebarValue2: Sidebar2Interface = {};

  ngOnInit(): void {
  }

  onClick(event: Event) {
    // sending the values to child component.
    this.sidebarValue = {
      animate_state: this.sidebarValue.animate_state === 'active' ? 'inactive' : 'active',
      type: 'type',
      title: 'Header',
    };
  }

  onClose(value: string) {
    this.sidebarValue.animate_state = value;
  }

  onClick2(event: Event) {
    // sending the values to child component.
    this.sidebarValue2 = {
      animate_state: this.sidebarValue2.animate_state === 'active' ? 'inactive' : 'active',
      type: 'type',
      title: 'Header',
    };
  }

  onClose2(value: string) {
    this.sidebarValue2.animate_state = value;
  }

}
