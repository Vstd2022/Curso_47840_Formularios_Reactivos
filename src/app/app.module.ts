import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormModulModule } from './form-react/form-modul.module';

@NgModule({
  declarations: [
    AppComponent,         
  ],
  imports: [
    BrowserModule,
    FormModulModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
