import { NgModule } from '@angular/core';

import { SchedulesComponent } from './schedules.component';
import { SchedulesRoutingModule } from './schedules.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SchedulesComponent],
  imports: [
    SchedulesRoutingModule,
    SharedModule
  ],
  providers: [],
})

export class SchedulesModule { }
