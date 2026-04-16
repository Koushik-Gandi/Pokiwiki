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
   { path: "", component: AboutComponent, title: 'About' },
  // {path:'homePage',component:HomePageComponent},
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'events', component: EventsComponent, title: 'Events' },
  { path: 'niantic', component: NianticComponent, title: 'Niantic' },
  { path: 'team-instinct', component: TeamInstinctComponent, title: 'Team Instinct' },
  { path: 'team-mystic', component: TeamMysticComponent, title: 'Team Mystic' },
  { path: 'team-valor', component: TeamValorComponent, title: 'Team Valor' },
  { path: 'team-rocket', component: TeamRocketComponent, title: 'Team Rocket' },
  { path: 'pokedex', component: PokedexComponent, title: 'Pokedex' },
  { path: '**', redirectTo: "about", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
