import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TeachersComponent } from './teachers.component';
import { SharedModule } from './../../shared/shared.module';
import { TeachersRoutingModule } from './teachers.routing';

@NgModule({
  declarations: [TeachersComponent],
  imports: [
    TeachersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})

export class TeachersModule { }
