import { Component } from '@angular/core';
import { Views } from 'src/app/core/model/views';


@Component({
  selector: 'app-user-main-dashboard-section',
  templateUrl: './user-main-dashboard-section.component.html',
  styleUrls: ['./user-main-dashboard-section.component.css']
})
export class UserMainDashboardSectionComponent {

  public currentView = 'mainView';

  constructor(){

  }


  public swipeCurrentView(requestingView:Views) {
    //console.log(view.name);
    console.log( requestingView.name);
    this.currentView = requestingView.name;
    
  }
}
