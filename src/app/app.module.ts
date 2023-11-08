import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { IntoleranciaComponent } from './intolerancia/intolerancia.component';
import { ReaccionsComponent } from './reaccions/reaccions.component';
import { DiferenciasComponent } from './diferencias/diferencias.component';
import { PrevencionsComponent } from './prevencions/prevencions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    IntoleranciaComponent,
    ReaccionsComponent,
    DiferenciasComponent,
    PrevencionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
