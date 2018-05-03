import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  dataSort = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.dataSort.push({index: i, text: 'data' + i});
    }
  }
  sortedData(event: any) {
    this.dataSort = event;
  }
}
