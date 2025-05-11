import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TeamInstinctComponent } from './teams/team-instinct/team-instinct.component';
import { TeamMysticComponent } from './teams/team-mystic/team-mystic.component';
import { TeamValorComponent } from './teams/team-valor/team-valor.component';
import { TeamRocketComponent } from './teams/team-rocket/team-rocket.component';
import { NavComponent } from './nav/nav.component';
import { NianticComponent } from './niantic/niantic.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppComponent,
    HomePageComponent,
    TeamInstinctComponent,
    TeamMysticComponent,
    TeamValorComponent,
    TeamRocketComponent,
    NianticComponent,
    EventsComponent,
    AboutComponent,
    NavComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
