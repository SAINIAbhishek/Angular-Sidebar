import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  type: string;
  width: string;
  state: string;
  title: string;

  constructor() { }

  ngOnInit() {
  }

  /***
   * This function is to toggle the sidebar state and also to move up the scroll.
   * @param {Event} event
   * @param target
   */
  toggleState(event: Event, target: any) {
    if (event.target['id'] === 'sidebar-wrapper' || event.target['id'] === 'close') {
      this.state = 'inactive';
      setTimeout(() => {
        target.scrollIntoView();
      }, 300);
    }
  }


}
