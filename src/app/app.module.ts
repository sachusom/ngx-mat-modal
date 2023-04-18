import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatModalModule } from 'ngx-mat-modal';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgxMatModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
