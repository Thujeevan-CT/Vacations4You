import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentMainDashboardRoutingModule } from './agent-main-dashboard-routing.module';
import { StaffMainDashboardSectionComponent } from '../../staff-web-app/staff-main-dashboard-section/staff-main-dashboard-section.component';
import { AgentMainDashboardComponent } from './agent-main-dashboard.component';
import { CruiseBookingSectionComponent } from '../components/cruise-booking-section/cruise-booking-section.component';
import { FormsModule } from '@angular/forms';
import { NavBarBookingSectionComponent } from '../components/nav-bar-section/nav-bar-section.component';
import { ActivityBookingSectionComponent } from '../components/activity-booking-section/activity-booking-section.component';
import { HolidayBookingSectionComponent } from '../components/holiday-booking-section/holiday-booking-section.component';
import { HomeSectionComponent } from '../components/home-section/home-section.component';
import { BookingListSectionComponent } from '../components/booking-list-section/booking-list-section.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [AgentMainDashboardComponent, CruiseBookingSectionComponent, NavBarBookingSectionComponent,
  ActivityBookingSectionComponent, HolidayBookingSectionComponent, HomeSectionComponent, BookingListSectionComponent],
  imports: [
    CommonModule,
    AgentMainDashboardRoutingModule,
    FormsModule,
    DataTablesModule
  ]
})
export class AgentMainDashboardModule { }
