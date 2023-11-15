import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityPackage } from 'src/app/core/model/activity-package';
import { ActivityPackageBooking } from 'src/app/core/model/activity-package-booking';

import { Response } from 'src/app/core/model/response';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';

@Component({
  selector: 'app-activity-booking-section',
  templateUrl: './activity-booking-section.component.html',
  styleUrls: ['./activity-booking-section.component.css']
})
export class ActivityBookingSectionComponent {
  public allActivityPackages : Array<ActivityPackage>  =  [];
  public newActivityReservationBooking = {} as ActivityPackageBooking;
  public searchActivityReservationBooking = {} as ActivityPackage;
  public selectedActivityReservation = {} as ActivityPackage;
  constructor(private _APIBaseService : BaseService, private _router : Router){
    
  }

  ngOnInit(): void {
    this._getAllActivityPackageData();
  }

  public searchActivityPackageDetails(){
    this._getAllActivityPackageData();
  }

  public applyActivityPackageDetailsFilter() {
    this._getAllActivityPackageData();
  }

  private _getAllActivityPackageData(){
    let queryParams = this.convertObjectToUrlParams(this.searchActivityReservationBooking);
    queryParams = '?' + `${queryParams}`
    this._APIBaseService.get<any>('activity' + queryParams).subscribe((data: Response) => {
      switch (data.code) {
        case 200:
          this.allActivityPackages = data.data;
      }
    }, (error: any) => {

    });
  }


  addNewActivityBooking(id:string){

  }

  openNewActivityBookingModel(criusePackage:ActivityPackage){
    this.selectedActivityReservation = criusePackage;
  }

  private convertObjectToUrlParams(obj: any): string {
    const params: string[] = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (value !== undefined && value !== null) {
          params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
      }
    }
    return params.join('&');
  }
}
