import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vacation4uUserWebComponent } from './vacation4u-user-web.component';

const routes: Routes = [{
  path : '',
  component: Vacation4uUserWebComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vacation4uUserWebRoutingModule { }
