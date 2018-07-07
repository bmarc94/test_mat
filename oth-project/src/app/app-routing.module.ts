import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'dashboard', loadChildren: 'src/app/pages/dashboard/dashboard.module#DashboardModule' },
  { path: 'parents', loadChildren: 'src/app/pages/parents/parents.module#ParentsModule' },
  { path: 'students', loadChildren: 'src/app/pages/students/students.module#StudentsModule' },
  { path: 'schedules', loadChildren: 'src/app/pages/schedules/schedules.module#SchedulesModule' },
  { path: 'teachers', loadChildren: 'src/app/pages/teachers/teachers.module#TeachersModule' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
