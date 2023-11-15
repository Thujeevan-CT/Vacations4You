import { Component } from '@angular/core';

@Component({
  selector: 'app-agent-main-dashboard',
  templateUrl: './agent-main-dashboard.component.html',
  styleUrls: ['./agent-main-dashboard.component.css']
})
export class AgentMainDashboardComponent {
  
  public currentView:string  = '00';

  changeRequestedView(viewId:string){

    this.currentView = viewId;



  }
}
