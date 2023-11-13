import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'vacation4u-user',
    loadChildren: () => import('./features/user-web-app/user-main-dashboard-section/user-main-dashboard-section.module').then(m => m.UserMainDashboardSectionModule)
  },
  {
    path: 'vacation4u-admin',
    loadChildren: () => import('./features/admin-web-app/admin-main-dashboard-section/admin-main-dashboard-section.module').then(m => m.AdminMainDashboardSectionModule)
  },
  {
    path: 'vacation4u-login',
    loadChildren: () => import('./features/user-login/user-login.module').then(m => m.UserLoginModule)
  },
  {
    path: 'vacation4u-registration',
    loadChildren: () =>  import('./features/user-registration/user-registration.module').then(m => m.UserRegistrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
