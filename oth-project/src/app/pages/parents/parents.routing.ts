import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentsComponent } from './parents.component';

const heroesRoutes: Routes = [
  { path: '', component: ParentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)], exports: [RouterModule]
})
export class ParentsRoutingModule { }
