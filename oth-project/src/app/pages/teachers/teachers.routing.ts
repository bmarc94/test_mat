import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeachersComponent } from './teachers.component';

const heroesRoutes: Routes = [
  { path: '', component: TeachersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)], exports: [RouterModule]
})
export class TeachersRoutingModule { }
