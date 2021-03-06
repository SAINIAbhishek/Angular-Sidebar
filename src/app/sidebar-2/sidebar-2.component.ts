import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sidebar2Interface } from './interface/sidebar-2-interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidebar-2',
  templateUrl: './sidebar-2.component.html',
  styleUrls: ['./sidebar-2.component.scss'],
  animations: [
    trigger(('animateSidebar'), [
      state('inactive', style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('inactive => active', animate('700ms ease-in')),
      transition('active => inactive', animate('700ms ease-out')),
    ]),
    trigger(('animateSidebarBackdrop'), [
      state('inactive', style({
        display: 'none',
        opacity: 0,
        background: 'none'
      })),
      state('active', style({
        display: 'block',
        opacity: 1,
        background: 'rgba(0,0,0,0.65)',
      })),
      transition('inactive => active', animate('.10ms ease-in-out')),
      transition('active => inactive', animate('700.5ms ease-in-out')),
    ])
  ]
})

export class Sidebar2Component implements OnInit {

  @Input() set template(value: Sidebar2Interface) {
    this.setTemplate(value);
  }

  @Output() closeState = new EventEmitter<string>();

  private _title: string; // heading
  private _state: string; // animation state
  private _size: string; // size
  private _type: string; // type

  constructor() { }

  ngOnInit() {
    this._state = 'inactive';
  }

  /***
   * This function is used to initialize the received value to the sidebar variables.
   * @param {Sidebar2Interface} value
   */
  private setTemplate(value: Sidebar2Interface) {
    this._type = value.type;
    this._state = value.animate_state === undefined ? 'inactive' : value.animate_state ;
    this._title = value.title;
    this._size = value.size;
  }

  /***
   * This function is to toggle the sidebar state and also to move up the scroll.
   * @param {Event} event
   * @param target
   */
  toggleState(event: Event, target: any) {
    if (event.target['id'] === 'sidebar-wrapper' || event.target['id'] === 'close') {
      this._state = 'inactive';
      setTimeout(() => {
        target.scrollIntoView();
        this.closeState.emit(this._state);
      }, 300);
    }
  }

  get title(): string {
    return this._title;
  }

  get state(): string {
    return this._state;
  }

  get size(): string {
    return this._size;
  }

  set size(value: string) {
    this._size = value;
  }

  get type(): string {
    return this._type;
  }

}
