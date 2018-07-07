import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent } from './students.component';

const heroesRoutes: Routes = [
  { path: '', component: StudentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)], exports: [RouterModule]
})
export class StudentsRoutingModule { }
