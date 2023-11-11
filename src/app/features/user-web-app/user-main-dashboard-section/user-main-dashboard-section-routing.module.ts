import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserMainDashboardSectionComponent } from './user-main-dashboard-section.component';

const routes: Routes = [{
  path: '',
  component: UserMainDashboardSectionComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMainDashboardSectionRoutingModule { }
