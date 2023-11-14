import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-main-dashboard-section',
  templateUrl: './staff-main-dashboard-section.component.html',
  styleUrls: ['./staff-main-dashboard-section.component.css']
})
export class StaffMainDashboardSectionComponent {

  public currentView:string  = '01';

  changeRequestedView(viewId:string){

    this.currentView = viewId;
  }
}
