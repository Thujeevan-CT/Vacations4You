import { Component, OnInit } from '@angular/core';
import { Environment } from 'src/app/core/environment/environment';
import { ActivityPackageBooking } from 'src/app/core/model/activity-package-booking';
import { CruisePackageBooking } from 'src/app/core/model/cruise-package-booking';
import { HolidayPackageBooking } from 'src/app/core/model/holiday-package-booking';
import { Response } from 'src/app/core/model/response';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';
@Component({
  selector: 'app-booking-list-section',
  templateUrl: './booking-list-section.component.html',
  styleUrls: ['./booking-list-section.component.css']
})
export class BookingListSectionComponent  implements OnInit{

  public selectedProductType:string = 'cruise';
  public allRetreivedBookingDetails: any;
  public holidayBookingList: Array<HolidayPackageBooking> = [];
  public cruiseBookingList: Array<CruisePackageBooking> = [];
  public activityBookingList: Array<ActivityPackageBooking> = [];
  public selectedPackageType:string = 'cruise';
  constructor(private _APIBaseService: BaseService ){

  }
  ngOnInit(): void {
   this._getAllActivityPackageData();
   this._getAllBookingData();
  }

  private _getAllActivityPackageData(){
    let queryParams = this.convertObjectToUrlParams({user_id : Environment.userid.id, product_type : this.selectedProductType});
    queryParams = '?' + `${queryParams}`
    this._APIBaseService.get<any>('book' + queryParams).subscribe((data: Response) => {
      switch (data.code) {
        case 200:
          this.allRetreivedBookingDetails = data.data;
      }
    }, (error: any) => {

    });
  }

  getDataForSelectedBookingPackage(){
    this._getAllBookingData();
  }


  private _getAllBookingData(){
    let queryParams = this.convertObjectToUrlParams({product_type : this.selectedPackageType, user_id : Environment.userid.id});
    queryParams = '?' + `${queryParams}`
    this._APIBaseService.get<any>('book' + queryParams).subscribe((data: Response) => {
      switch (data.code) {
        case 200:
          this.cruiseBookingList = [];
          this.holidayBookingList = [];
          this.activityBookingList = [];
          if(this.selectedPackageType === 'holiday')
            this.holidayBookingList = data.data;
          else if (this.selectedPackageType === 'cruise')
            this.cruiseBookingList = data.data;
          else if (this.selectedPackageType === 'activity')
            this.activityBookingList = data.data; 
      }
    }, (error: any) => {

    });
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
