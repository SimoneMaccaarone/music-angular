import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrumListComponent } from './components/strum-list/strum-list.component';
import { StrumDetailComponent } from './components/all-strumenti-detail/strum-detail/strum-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChitarreDetailComponent } from './components/all-strumenti-detail/chitarre-detail/chitarre-detail.component';
import { PianofortiDetailComponent } from './components/all-strumenti-detail/pianoforti-detail/pianoforti-detail.component';

import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    StrumListComponent,
    StrumDetailComponent,
    ChitarreDetailComponent,
    PianofortiDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbCarouselModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
