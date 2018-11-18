import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sidebar2Interface } from './interface/sidebar-2-interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidebar-2',
  templateUrl: './sidebar-2.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger( 'animateWrapper', [
      state('inactive', style({
        display: 'none',
        opacity: 0,
        background: 'none'
      })),
      state('active', style({
        display: 'block',
        opacity: 1,
        background: 'rgba(0,0,0,0.65)'
      })),
      transition('active => inactive', animate('700.5ms ease-in-out')),
    ]),
    trigger(('animateContent'), [
      state('inactive', style({
        transform: 'translateX(100%)'
      })),
      state('active', style({
        transform: 'translateX(0)'
      })),
      transition('inactive <=> active', animate('700ms ease-in-out')),
    ])
  ]
})

export class Sidebar2Component implements OnInit {

  @Input() set template(value: Sidebar2Interface) {
    this.setTemplate(value);
  }

  @Output() closeState = new EventEmitter<string>();

  title: string; // heading
  state: string; // animation state
  size: string; // size
  type: string; // type

  constructor() { }

  ngOnInit() {
    this.state = 'inactive';
  }

  /***
   * This function is used to initialize the received value to the sidebar variables.
   * @param {Sidebar2Interface} value
   */
  setTemplate(value: Sidebar2Interface) {
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
