import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NianticComponent } from './navbar/niantic/niantic.component';
import { EventsComponent } from './navbar/events/events.component';
import { AboutComponent } from './navbar/about/about.component';
import { NavComponent } from './nav/nav.component';
import { TeamInstinctComponent } from './teams/team-instinct/team-instinct.component';
import { TeamMysticComponent } from './teams/team-mystic/team-mystic.component';
import { TeamValorComponent } from './teams/team-valor/team-valor.component';
import { TeamRocketComponent } from './teams/team-rocket/team-rocket.component';

@NgModule({
  declarations: [
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
