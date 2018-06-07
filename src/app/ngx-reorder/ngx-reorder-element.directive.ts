import { Directive, AfterViewInit, Input, ElementRef, Output, EventEmitter, Renderer2 } from '@angular/core';

import { catchError, map, tap, filter, retry  } from 'rxjs/operators';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/observable/fromEvent';

@Directive({
  selector: '[ngxReorderElement]'
})
export class NgxReorderElementDirective  implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setAttribute (this.el.nativeElement, 'draggable', 'true');
   }

  _index = 0;

  @Input('index')
  set index(index: number){
    this._index = index;
    this.renderer.setAttribute (this.el.nativeElement, 'data-index', String(this._index));
  }

  // @Output()
  // up: EventEmitter<number> = new EventEmitter<number>();
  // @Output()
  // down: EventEmitter<number> = new EventEmitter<number>();

  ngAfterViewInit() {
  }

}

