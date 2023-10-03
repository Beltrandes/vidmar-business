import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { SideTabComponent } from './shared/components/side-tab/side-tab.component';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(ptBr)
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
