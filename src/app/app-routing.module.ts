import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

const routes: Routes = [
  { path: '', component: MissionlistComponent },  // Default route should load the mission list
  { path: 'mission/:id', component: MissiondetailsComponent }  // Route for mission details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
