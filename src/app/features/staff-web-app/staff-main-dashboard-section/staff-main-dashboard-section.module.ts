import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffMainDashboardSectionRoutingModule } from './staff-main-dashboard-section-routing.module';
import { NavBarSectionComponent } from '../components/nav-bar-section/nav-bar-section.component';
import { DashboardInsightsSectionComponent } from '../components/dashboard-insights-section/dashboard-insights-section.component';
import { StaffMainDashboardSectionComponent } from './staff-main-dashboard-section.component';
import { CruiseReservationSectionComponent } from '../components/cruise-reservation-section/cruise-reservation-section.component';
import { FormsModule } from '@angular/forms';
import { HolidayReservationSectionComponent } from '../components/holiday-reservation-section/holiday-reservation-section.component';


@NgModule({
  declarations: [StaffMainDashboardSectionComponent, NavBarSectionComponent, DashboardInsightsSectionComponent,
  CruiseReservationSectionComponent, HolidayReservationSectionComponent],
  imports: [
    CommonModule,
    StaffMainDashboardSectionRoutingModule,
    FormsModule
  ]
})
export class StaffMainDashboardSectionModule { }
