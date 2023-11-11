import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMainDashboardSectionRoutingModule } from './user-main-dashboard-section-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UserMainDashboardSectionComponent } from './user-main-dashboard-section.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { ServiceListSectionComponent } from '../service-list-section/service-list-section.component';
import { FooterBarComponent } from '../components/footer-bar/footer-bar.component';
import { ServiceBookingSectionComponent } from '../service-booking-section/service-booking-section.component';
import { PopularPackageComponent } from '../components/popular-package/popular-package.component';


@NgModule({
  declarations: [UserMainDashboardSectionComponent, NavBarComponent, FooterBarComponent, ServiceListSectionComponent,
  ServiceBookingSectionComponent, PopularPackageComponent],
  imports: [
    CommonModule,
    UserMainDashboardSectionRoutingModule,
    // SharedModule
  ]
})
export class UserMainDashboardSectionModule { }
