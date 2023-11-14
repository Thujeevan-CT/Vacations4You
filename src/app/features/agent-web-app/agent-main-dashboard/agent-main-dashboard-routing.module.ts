import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffMainDashboardSectionComponent } from '../../staff-web-app/staff-main-dashboard-section/staff-main-dashboard-section.component';
import { AgentMainDashboardComponent } from './agent-main-dashboard.component';

const routes: Routes = [{
  path : '',
  component: AgentMainDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentMainDashboardRoutingModule { }
