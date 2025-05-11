import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TeamInstinctComponent } from './teams/team-instinct/team-instinct.component';
import { TeamMysticComponent } from './teams/team-mystic/team-mystic.component';
import { TeamValorComponent } from './teams/team-valor/team-valor.component';
import { TeamRocketComponent } from './teams/team-rocket/team-rocket.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { NianticComponent } from './niantic/niantic.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:'about',component:AboutComponent},
  {path:'events',component:EventsComponent},
  {path:'niantic',component:NianticComponent},
  {path:'teamInstinct',component:TeamInstinctComponent},
  {path:'teamMistic',component:TeamMysticComponent},
  {path:'teamValor',component:TeamValorComponent},
  {path:'teamRocket',component:TeamRocketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
