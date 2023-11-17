import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Environment } from 'src/app/core/environment/environment';
import { HolidayPackageBooking } from 'src/app/core/model/holiday-package-booking';
import { HolidayPackage } from 'src/app/core/model/holiday-packages';
import { Response } from 'src/app/core/model/response';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-holiday-booking-section',
  templateUrl: './holiday-booking-section.component.html',
  styleUrls: ['./holiday-booking-section.component.css']
})
export class HolidayBookingSectionComponent {
  public allHolidayPackages : Array<HolidayPackage>  =  [];
  public newHolidayReservationBooking = {} as HolidayPackageBooking;
  public searchHolidayReservationBooking = {} as HolidayPackage;
  public selectedHolidayReservation = {} as HolidayPackage;
  constructor(private _APIBaseService : BaseService, private _router : Router){
    
  }

  ngOnInit(): void {
    this._getAllHolidayPackageData();
  }

  public searchHolidayPackageDetails(){
    this._getAllHolidayPackageData();
  }

  public applyHolidayPackageDetailsFilter() {
    this._getAllHolidayPackageData();
  }

  private _getAllHolidayPackageData(){
    let queryParams = this.convertObjectToUrlParams(this.searchHolidayReservationBooking);
    queryParams = '?' + `${queryParams}`
    this._APIBaseService.get<any>('package' + queryParams).subscribe((data: Response) => {
      switch (data.code) {
        case 200:
          this.allHolidayPackages = data.data;
      }
    }, (error: any) => {

    });
  }

  openNewHolidayBooking(packageSelected:HolidayPackage){
    this.selectedHolidayReservation = packageSelected;
  }

  addNewHolidayBooking(id:string){
    this.newHolidayReservationBooking.product_id = this.selectedHolidayReservation.id || '';
    this.newHolidayReservationBooking.user_id = Environment.userid.id;
    this.newHolidayReservationBooking.product_type = 'holiday';
    this._APIBaseService.post<any>('book', this.newHolidayReservationBooking).subscribe((data: Response) => {
      switch (data.code) {
        case 200:
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data.message
          });
      }
    }, (error: any) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: error.error.message
          });
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
