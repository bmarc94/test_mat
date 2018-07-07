import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';

import { NgModule } from '@angular/core';

import { StudentsComponent } from './students.component';
import { StudentsRoutingModule } from './students.routing';


@NgModule({
  declarations: [StudentsComponent],
  imports: [
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
})

export class StudentsModule { }
