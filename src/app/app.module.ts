import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './features/user-registration/user-registration.component';
import { StaffMainDashboardSectionComponent } from './features/staff-web-app/staff-main-dashboard-section/staff-main-dashboard-section.component';
import { CruiseReservationSectionComponent } from './features/staff-web-app/components/cruise-reservation-section/cruise-reservation-section.component';
import { NavBarSectionComponent } from './features/staff-web-app/components/nav-bar-section/nav-bar-section.component';
import { DashboardInsightsSectionComponent } from './features/staff-web-app/components/dashboard-insights-section/dashboard-insights-section.component';
import { HolidayReservationSectionComponent } from './features/staff-web-app/components/holiday-reservation-section/holiday-reservation-section.component';
import { ActivityReservationSectionComponent } from './features/staff-web-app/components/activity-reservation-section/activity-reservation-section.component';


@NgModule({
  declarations: [
    AppComponent,
  //  ActivityReservationSectionComponent,
 //   HolidayReservationSectionComponent,
    // StaffMainDashboardSectionComponent,
    // CruiseReservationSectionComponent,
    // NavBarSectionComponent,
    // DashboardInsightsSectionComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
