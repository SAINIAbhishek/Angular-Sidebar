import { Component, OnInit } from '@angular/core';
import { SidebarInterface } from './sidebar/interface/sidebar-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  sidebarValue: SidebarInterface;

  ngOnInit(): void {
  }

  onClick(event: Event) {
    // sending the values to child component.
    this.sidebarValue = {
      animate_state: this.sidebarValue.animate_state === 'inactive' ? 'active' : 'inactive',
      type: 'type',
      title: 'Header'
    };
  }

  onClose(value: string) {
    this.sidebarValue.animate_state = value;
  }

}
