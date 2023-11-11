import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'vacation4u-user',
    loadChildren: () => import('./features/user-web-app/user-main-dashboard-section/user-main-dashboard-section.module').then(m => m.UserMainDashboardSectionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
