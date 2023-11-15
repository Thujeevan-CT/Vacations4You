import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffMainDashboardSectionRoutingModule } from './staff-main-dashboard-section-routing.module';
import { NavBarSectionComponent } from '../components/nav-bar-section/nav-bar-section.component';
import { DashboardInsightsSectionComponent } from '../components/dashboard-insights-section/dashboard-insights-section.component';
import { StaffMainDashboardSectionComponent } from './staff-main-dashboard-section.component';
import { CruiseReservationSectionComponent } from '../components/cruise-reservation-section/cruise-reservation-section.component';
import { FormsModule } from '@angular/forms';
import { HolidayReservationSectionComponent } from '../components/holiday-reservation-section/holiday-reservation-section.component';
import { ActivityReservationSectionComponent } from '../components/activity-reservation-section/activity-reservation-section.component';
import { DataTablesModule } from 'angular-datatables';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AdminSectionComponent } from '../components/admin-section/admin-section.component';
import { HolidayBookingSectionComponent } from '../../agent-web-app/components/holiday-booking-section/holiday-booking-section.component';
@NgModule({
  declarations: [StaffMainDashboardSectionComponent, NavBarSectionComponent, DashboardInsightsSectionComponent,
  CruiseReservationSectionComponent, HolidayReservationSectionComponent, ActivityReservationSectionComponent,
AdminSectionComponent],
  imports: [
    CommonModule,
    StaffMainDashboardSectionRoutingModule,
    FormsModule,
    DataTablesModule,
    CanvasJSAngularChartsModule
  ]
})
export class StaffMainDashboardSectionModule { }
