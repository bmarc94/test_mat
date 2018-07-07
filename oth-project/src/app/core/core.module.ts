import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { MainMenuComponent } from './main-menu/main-menu.component';


@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [MainMenuComponent],
  providers: [],
})
export class CoreModule { }
