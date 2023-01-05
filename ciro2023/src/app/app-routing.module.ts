import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pag1Component } from './componentes/pag1/pag1.component';

const routes: Routes = [
  { path: "pag1" , component:Pag1Component},
  { path:"**" , redirectTo:"pag1" , pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
