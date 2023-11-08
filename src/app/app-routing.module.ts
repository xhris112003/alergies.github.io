import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntoleranciaComponent } from './intolerancia/intolerancia.component';
import { ReaccionsComponent } from './reaccions/reaccions.component';
import { DiferenciasComponent } from './diferencias/diferencias.component';
import { PrevencionsComponent } from './prevencions/prevencions.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'intolerancies', component: IntoleranciaComponent },
  { path: 'reaccions', component: ReaccionsComponent },
  { path: 'diferencies', component: DiferenciasComponent },
  { path: 'prevencions', component: PrevencionsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
