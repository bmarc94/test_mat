import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchedulesComponent } from './schedules.component';

const heroesRoutes: Routes = [
  { path: '', component: SchedulesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)], exports: [RouterModule]
})
export class SchedulesRoutingModule { }
