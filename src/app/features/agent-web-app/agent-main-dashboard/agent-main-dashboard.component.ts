import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Environment } from 'src/app/core/environment/environment';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';

@Component({
  selector: 'app-agent-main-dashboard',
  templateUrl: './agent-main-dashboard.component.html',
  styleUrls: ['./agent-main-dashboard.component.css']
})
export class AgentMainDashboardComponent implements OnInit{
  public userName: string = Environment.userid.first_name + ' ' + Environment.userid.last_name;
  constructor(private _APIBaseService : BaseService, private _router : Router){
    
   if(Environment.accessToken ===  '' && Environment.userid.role !== 'agent'){
    this._router.navigate(['/vacation4u-login']);
   }
  }
  ngOnInit(): void {
    



  }
  
  public currentView:string  = '00';

  changeRequestedView(viewId:string){

    this.currentView = viewId;
  }

  userLogOut() {
    Environment.accessToken =  '';
    this._router.navigate(['/vacation4u-login']);
  }

}
