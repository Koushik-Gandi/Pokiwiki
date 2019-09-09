import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EventsComponent } from './navbar/events/events.component';
import { TeamrocketComponent } from './teams/teamrocket/teamrocket.component';
import { InstinctComponent } from './teams/instinct/instinct.component';
import { MisticComponent } from './teams/mistic/mistic.component';
import { ValorComponent } from './teams/valor/valor.component';
import { AboutComponent } from './navbar/about/about.component';
import { NianticComponent } from './navbar/niantic/niantic.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:'about',component:AboutComponent},
  {path:'events',component:EventsComponent},
  {path:'niantic',component:NianticComponent},
  {path:'teamInstinct',component:InstinctComponent},
  {path:'teamMistic',component:MisticComponent},
  {path:'teamValor',component:ValorComponent},
  {path:'teamRocket',component:TeamrocketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
