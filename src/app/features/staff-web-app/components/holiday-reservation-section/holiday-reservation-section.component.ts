import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HolidayPackage } from 'src/app/core/model/holiday-packages';
import { Response } from 'src/app/core/model/response';
import { HolidayPackageBooking } from 'src/app/core/model/holiday-package-booking';
import { Environment } from 'src/app/core/environment/environment';


@Component({
  selector: 'app-holiday-reservation-section',
  templateUrl: './holiday-reservation-section.component.html',
  styleUrls: ['./holiday-reservation-section.component.css']
})
export class HolidayReservationSectionComponent implements OnInit{

  public allHolidayPackages: Array<HolidayPackage> = [];
  public holidayPackage = {} as HolidayPackage;
  public newHolidayPackage = {} as HolidayPackage;
  public holidayBookingList: Array<HolidayPackageBooking> = [];
  constructor(private _APIBaseService : BaseService, private _router : Router){
    
  }

  changeDateValue(date:string){
    let result = Date.parse(date); 
  }
  ngOnInit(): void {
   this._getAllHolidayPackageData();
   this._getAllBookingData();
  }

  private _getAllHolidayPackageData(){
    this._APIBaseService.get<any>('package').subscribe((data:Response)=> {
      switch(data.code){
        case 200 :
          this.allHolidayPackages = data.data;
      }

    }, (error:any) => {

    });
  }

  viewHolidayPackage(id:string){
    this._APIBaseService.get<any>('package/'+`${id}`).subscribe((data:Response)=> {
      switch(data.code){
        case 200 :
          this.holidayPackage = data.data;
      }

    }, (error:any) => {

    });
  }


  updateCruisePackage(id:string){
    this.holidayPackage.id = undefined;
    this._APIBaseService.put<any>('package/update/'+`${id}`, this.holidayPackage).subscribe((data:Response)=> {
      switch(data.code){
        case 200 :
          this._getAllHolidayPackageData();
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data.message
          });
      }

    }, (error:any) => {

    });
  }

  deleteHolidayPackage(id:string){

    Swal.fire({
      title: 'Please Confirm',
      text: 'Do You Want to Delete This Package?',
      icon:undefined,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this._APIBaseService.delete<any>('package/delete/'+`${id}`).subscribe(
          (data:Response) => {
            if(data.code === 200){
              Swal.fire({
                icon: 'success',
                title: data.message
              });
              this._getAllHolidayPackageData();
            } else {
              Swal.fire({
                icon: 'warning',
                title: 'Oops! Something went wrong!'
              });
            }
    
          },
          (error) => {
            Swal.fire({
              icon: 'warning',
              title: 'Oops! Something went wrong!'
            });
          }
        );
      }
    })
  }

  addNewHolidayPackage(){
    if(this.isAnyPropertyNull(this.newHolidayPackage)){
      Swal.fire({
        icon: 'warning',
        title: 'Please complete all the required fields!'
      });
      return;
    }

    this._APIBaseService.post<any>('package/new', this.newHolidayPackage).subscribe((data:Response)=> {
      switch(data.code){
        case 200 :
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data.message
          });
         this._getAllHolidayPackageData();
      }

    }, (error:any) => {
      if(error.error.code === 422){
        Swal.fire({
          icon: 'error',
          title: 'Error ',
          html: Array.isArray(error.error.message)
            ? error.error.message.map((element: string) => `<span>${element}</span>`).join('<br>')
            : error.error.message,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error ',
          text: 'Something went wrong!'
        });
      }
    });
  }

  resetAddNewHolidayPackageForm() {
    this.newHolidayPackage = {
      title: '',
      description: '',
      destination: '',
      duration: 0,
      no_of_travelers: 0,
      price: 0,
      specialty: '',
    };
  }


  isAnyPropertyNull(obj: any): boolean {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && (obj[key] === null || obj[key] === 0)) {
        return true;
      }
    }
    return false;
  }
  


  private _getAllBookingData(){
    let queryParams = this.convertObjectToUrlParams({product_type : 'holiday', user_id : Environment.userid.id});
    queryParams = '?' + `${queryParams}`
    this._APIBaseService.get<any>('book' + queryParams).subscribe((data: Response) => {
      switch (data.code) {
        case 200:
         this.holidayBookingList = data.data;
          
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
