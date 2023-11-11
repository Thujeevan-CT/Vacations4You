import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainDashboardSectionComponent } from './admin-main-dashboard-section.component';

const routes: Routes = [
  {
    path: '',
    component : AdminMainDashboardSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMainDashboardSectionRoutingModule { }
