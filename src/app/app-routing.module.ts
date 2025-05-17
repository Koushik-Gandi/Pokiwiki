import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { NianticComponent } from './niantic/niantic.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { TeamInstinctComponent } from './teams/team-instinct/team-instinct.component';
import { TeamMysticComponent } from './teams/team-mystic/team-mystic.component';
import { TeamValorComponent } from './teams/team-valor/team-valor.component';
import { TeamRocketComponent } from './teams/team-rocket/team-rocket.component';

const routes: Routes = [
  { path: "", component: AboutComponent },
  // {path:'homePage',component:HomePageComponent},
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent },
  { path: 'niantic', component: NianticComponent },
  { path: 'team-instinct', component: TeamInstinctComponent },
  { path: 'team-mystic', component: TeamMysticComponent },
  { path: 'team-valor', component: TeamValorComponent },
  { path: 'team-rocket', component: TeamRocketComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: '**', redirectTo: "about", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
