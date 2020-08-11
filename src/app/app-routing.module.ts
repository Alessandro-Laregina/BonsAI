import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AiPageComponent } from './ai-page/ai-page.component';
import { ApplicationComponent } from './application/application.component';
import { BandComponent } from './band/band.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "ai", component: AiPageComponent },
  { path: "app", component: ApplicationComponent },
  { path: "smart-band", component: BandComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
