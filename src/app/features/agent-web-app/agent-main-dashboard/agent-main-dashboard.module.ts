import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentMainDashboardRoutingModule } from './agent-main-dashboard-routing.module';
import { StaffMainDashboardSectionComponent } from '../../staff-web-app/staff-main-dashboard-section/staff-main-dashboard-section.component';
import { AgentMainDashboardComponent } from './agent-main-dashboard.component';
import { CruiseBookingSectionComponent } from '../components/cruise-booking-section/cruise-booking-section.component';


@NgModule({
  declarations: [AgentMainDashboardComponent, CruiseBookingSectionComponent],
  imports: [
    CommonModule,
    AgentMainDashboardRoutingModule
  ]
})
export class AgentMainDashboardModule { }
