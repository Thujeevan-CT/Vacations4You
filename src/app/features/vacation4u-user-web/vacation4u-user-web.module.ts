import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Vacation4uUserWebRoutingModule } from './vacation4u-user-web-routing.module';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    Vacation4uUserWebRoutingModule
  ]
})
export class Vacation4uUserWebModule { }
