import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
 
    {
      path: 'vacation4u',
      loadChildren: () => import('./features/vacation4u-user-web/vacation4u-user-web.module').then(m => m.Vacation4uUserWebModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
