import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CruisePackage } from 'src/app/core/model/cruise-package';
import { CruisePackageBooking } from 'src/app/core/model/cruise-package-booking';
import { Response } from 'src/app/core/model/response';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cruise-booking-section',
  templateUrl: './cruise-booking-section.component.html',
  styleUrls: ['./cruise-booking-section.component.css']
})
export class CruiseBookingSectionComponent implements OnInit{
  
  public allCruisePackages : Array<CruisePackage>  =  [];
  public newCruiseReservationBooking = {} as CruisePackageBooking;
  public searchCruiseReservationBooking = {} as CruisePackage;
  public selectedCruiseReservation = {} as CruisePackage;
  constructor(private _APIBaseService : BaseService, private _router : Router){
    
  }

  ngOnInit(): void {
    this._getAllCruisePackageData();
  }

  public searchCruisePackageDetails(){
    this._getAllCruisePackageData();
  }

  public applyCruisePackageDetailsFilter() {
    this._getAllCruisePackageData();
  }

  private _getAllCruisePackageData(){
    let queryParams = this.convertObjectToUrlParams(this.searchCruiseReservationBooking);
    queryParams = '?' + `${queryParams}`
    this._APIBaseService.get<any>('cruise' + queryParams).subscribe((data: Response) => {
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
            icon: 'warning',
            title: 'Ooops!',
            text: error.message
          });
    });
  }


  addNewCruiseBooking(id:string){
    this._APIBaseService.post<any>('booking', this.newCruiseReservationBooking).subscribe((data: Response) => {
      switch (data.code) {
        case 200:
          this.allCruisePackages = data.data;
      }
    }, (error: any) => {

    });
  }

  openNewCruiseBookingModel(criusePackage:CruisePackage){
    this.selectedCruiseReservation = criusePackage;
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
