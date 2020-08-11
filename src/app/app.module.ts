import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AiPageComponent } from './ai-page/ai-page.component';
import { ApplicationComponent } from './application/application.component';
import { BandComponent } from './band/band.component';
import { DialogInfoComponent } from './dialog-info/dialog-info.component';
import { DialogTeamComponent } from './dialog-team/dialog-team.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AiPageComponent,
    ApplicationComponent,
    BandComponent,
    DialogInfoComponent,
    DialogTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
