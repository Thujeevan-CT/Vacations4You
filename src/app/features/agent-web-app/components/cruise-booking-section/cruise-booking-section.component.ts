import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CruisePackage } from 'src/app/core/model/cruise-package';
import { Response } from 'src/app/core/model/response';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';

@Component({
  selector: 'app-cruise-booking-section',
  templateUrl: './cruise-booking-section.component.html',
  styleUrls: ['./cruise-booking-section.component.css']
})
export class CruiseBookingSectionComponent implements OnInit{
  
  public allCruisePackages : Array<CruisePackage>  =  [];
  
  constructor(private _APIBaseService : BaseService, private _router : Router){
    
  }
  
  
  ngOnInit(): void {
    this._getAllCruisePackageData();
  }

  private _getAllCruisePackageData(){
    this._APIBaseService.get<any>('cruise').subscribe((data:Response)=> {
      switch(data.code){
        case 200 :
          this.allCruisePackages = data.data;
      }

    }, (error:any) => {

    });
  }

}
