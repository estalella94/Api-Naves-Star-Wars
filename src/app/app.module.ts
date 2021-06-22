import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavesListComponent } from './naves-list/naves-list.component';
import { NavesDetailComponent } from './naves-detail/naves-detail.component';
import {HttpClientModule} from '@angular/common/http'
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {NgxSpinnerModule} from 'ngx-spinner'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavesListComponent,
    NavesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
