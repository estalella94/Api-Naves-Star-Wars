import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavesListComponent } from './naves-list/naves-list.component';
import { NavesDetailComponent } from './naves-detail/naves-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavesListComponent,
    NavesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
