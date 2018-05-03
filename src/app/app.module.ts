import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxReoderModule} from './ngx-reorder/ngx-reorder.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgxReoderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
