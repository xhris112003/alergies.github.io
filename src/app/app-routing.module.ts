import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntoleranciaComponent } from './intolerancia/intolerancia.component';
import { ReaccionsComponent } from './reaccions/reaccions.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'intolerancies', component: IntoleranciaComponent },
  { path: 'reaccions', component: ReaccionsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
