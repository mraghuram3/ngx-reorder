import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxReorderDirective } from './ngx-reorder.directive';
import { NgxReorderElementDirective } from './ngx-reorder-element.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxReorderDirective,
    NgxReorderElementDirective],
    exports: [
      NgxReorderDirective,
      NgxReorderElementDirective]
})
export class NgxReoderModule { }
