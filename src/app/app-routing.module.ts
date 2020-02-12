import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {
    path:"",redirectTo:"home",pathMatch:"full"
  },
  { path: "home",
  component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
