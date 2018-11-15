import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidebarInterface } from './interface/sidebar-interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
  ]
})

export class SidebarComponent implements OnInit {

  @Input() set template(value: SidebarInterface) {
    this.setTemplate(value);
  }

  @Output() closeState = new EventEmitter<string>();

  title: string; // Sidebar heading
  state: string; // Animation state
  size: string; // Sidebar size
  type: string; // Sidebar type

  constructor() { }

  ngOnInit() {
    this.state = 'inactive';
  }

  /***
   * This function is used to initialize the received value to the sidebar variables.
   * @param {SidebarInterface} value
   */
  private setTemplate(value: SidebarInterface) {
    this.type = value.type;
    this.state = value.animate_state;
    this.title = value.title;
    this.size = value.size;
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
        this.closeState.emit(this.state);
      }, 300);
    }
  }

}
