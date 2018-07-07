import { NgModule } from '@angular/core';

import { ParentsComponent } from './parents.component';
import { ParentsRoutingModule } from './parents.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ParentsComponent],
  imports: [ParentsRoutingModule, SharedModule],
  providers: [],
})

export class ParentsModule { }
