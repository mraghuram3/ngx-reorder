# ngx-reorder 

Angular Directive To Reorder Elements.

Live Demo : https://mraghuram3.github.io/#/ngx-reorder

## Installation

To install this library, run:

```bash
$ npm install ngx-reorder --save
```

## Usage

Import `NgxReoderModule` in the root module

```ts
import { NgxReoderModule } from 'ngx-reorder';

@NgModule({
  imports: [
    // ...
    NgxReoderModule,
    ...
  ]
})
```

In your template

```html
  <div class="dragParn" ngxReorder [items]="dataSort" (sortedData)="dataSort = $event;" (dropTarget)="target = $event;" (dragStart)="startIndex = $event;">
    <div class="drag" ngxReorderElement *ngFor="let r of dataSort;let i = index" [index]="i" [ngClass]="{'border':target == i,'opacity':startIndex == i}"> {{r?.text}}</div>
  </div>
```
- **ngxReorder**

    Add the directive to the div or other dom in which the elemnts are to be Reordered 

- **[items]**: any[]

  TThe data which are to be sorted.

- **(sortedData)="dataSort = $event;"**:

  Whenever the elements are reorderd the sorted data output is fired and the data int he array is updated.

- **(dropTarget)="target = $event;"**:

  Target index to apply css class to the target element.

- **(dragStart)="startIndex = $event;"**:

  Start Index is the elements which is being dragged, to apply css.

```ts
target = -1;
startIndex = -1;
.....
......
```

- **ngxReorderElement**

  Add the directive to the div for row elements which are to be reorderd.

- **[index]**: number.

  To uniquely identify the elements.

** include other inputs in ngxReorderElement row, like ngFor, index and [ngClass] **



## License

MIT © [Raghu Ram M](mailto:mraghuram3@gmail.com)