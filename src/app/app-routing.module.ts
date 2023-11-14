import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'vacation4u-staff',
    loadChildren: () => import('./features/staff-web-app/staff-main-dashboard-section/staff-main-dashboard-section.module').then(m => m.StaffMainDashboardSectionModule)
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
