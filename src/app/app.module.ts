import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InstinctComponent } from './teams/instinct/instinct.component';
import { MisticComponent } from './teams/mistic/mistic.component';
import { ValorComponent } from './teams/valor/valor.component';
import { TeamrocketComponent } from './teams/teamrocket/teamrocket.component';
import { NianticComponent } from './navbar/niantic/niantic.component';
import { EventsComponent } from './navbar/events/events.component';
import { AboutComponent } from './navbar/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InstinctComponent,
    MisticComponent,
    ValorComponent,
    TeamrocketComponent,
    NianticComponent,
    EventsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
