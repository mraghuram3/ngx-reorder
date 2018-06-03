import { Directive, ViewChildren, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgxReorder]'
})
export class NgxReorderDirective {

  _items: Array<any>;
  _itemsBackup: Array<any>;
  dragStartIndex: number;
  dragEndIndex: number;

  @Input('items')
  set items(items: any[]) {
    this._items = items;
    this._itemsBackup = items;
  }

  @Output()
  sortedData: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  @Output()
  dropTarget: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  // @HostListener('drag', ['$event']) private onDrag(event: any): void {
  //   console.log(this.getIndex(event));
  // }
  @HostListener('dragstart', ['$event']) private onDragStart(event: any): void {
    this.dragStartIndex = this.getIndex(event);
  }
  // @HostListener('dragend', ['$event']) private onDragEnd(event: any): void {
  //   console.log(this.getIndex(event));
  // }
  @HostListener('dragover', ['$event']) private onDragOver(event: any): void {
    event.preventDefault();
    // console.log(this.getIndex(event));
    this.dropTarget.emit(this.getIndex(event));
  }
  // @HostListener('dragenter', ['$event']) private onDragEnter(event: any): void {
  //   console.log(this.getIndex(event));
  // }
  // @HostListener('dragleave', ['$event']) private onDragLeave(event: any): void {
  //   console.log(this.getIndex(event));
  // }
  @HostListener('drop', ['$event']) private onDrop(event: any): void {
    // console.log(this.getIndex(event));
    event.preventDefault();
    this.dragEndIndex = this.getIndex(event);
    if (this.dragEndIndex >= 0) {
      this.swapElements(this.dragStartIndex, this.dragEndIndex);
    }
  }

  public swapElements(oldIndex: number, newIndex: number) {
    const temp = this._items[oldIndex];
    this._items[oldIndex] = this._items[newIndex];
    this._items[newIndex] = temp;
    this.sortedData.emit(this._items);
    this.dropTarget.emit(-1);
  }

  getIndex(event: any): number {
    if (event.target.attributes && event.target.attributes['data-index'] && event.target.attributes['data-index'].nodeValue){
       return event.target.attributes['data-index'].nodeValue;
    } else {
      return -1;
    }
  }
  
}

