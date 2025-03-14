import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { TeamInstinctComponent } from './teams/team-instinct/team-instinct.component';
import { TeamMysticComponent } from './teams/team-mystic/team-mystic.component';
import { TeamValorComponent } from './teams/team-valor/team-valor.component';
import { TeamRocketComponent } from './teams/team-rocket/team-rocket.component';
import { NianticComponent } from './niantic/niantic.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent },
  { path: 'team-instinct', component: TeamInstinctComponent },
  { path: 'team-mystic', component: TeamMysticComponent },
  { path: 'team-valor', component: TeamValorComponent },
  { path: 'team-rocket', component: TeamRocketComponent },
  { path: 'niantic', component: NianticComponent }
];