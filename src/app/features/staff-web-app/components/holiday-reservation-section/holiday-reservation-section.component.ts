import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HolidayPackage } from 'src/app/core/model/holiday-packages';
import { Response } from 'src/app/core/model/response';


@Component({
  selector: 'app-holiday-reservation-section',
  templateUrl: './holiday-reservation-section.component.html',
  styleUrls: ['./holiday-reservation-section.component.css']
})
export class HolidayReservationSectionComponent implements OnInit{

  public allHolidayPackages: Array<HolidayPackage> = [];
  public holidayPackage = {} as HolidayPackage;

  constructor(private _APIBaseService : BaseService, private _router : Router){
    
  }


  // formatDate(timestamp: number | null): string {
  //   if (timestamp === null) {
  //     return ''; 
  //   }
  //   return this.datePipe.transform(timestamp, 'yyyy-MM-dd') || ''; 
  // }

  changeDateValue(date:string){
    let result = Date.parse(date); 
  }
  ngOnInit(): void {
   this._getAllHolidayPackageData();
   
  }

  private _getAllHolidayPackageData(){
    this._APIBaseService.get<any>('holiday').subscribe((data:Response)=> {
      switch(data.code){
        case 200 :
          this.allHolidayPackages = data.data;
      }

    }, (error:any) => {

    });
  }

  viewHolidayPackage(id:string){
    // this.cruisePackage.id = undefined;
    this._APIBaseService.get<any>('holiday/'+`${id}`).subscribe((data:Response)=> {
      switch(data.code){
        case 200 :
          this.holidayPackage = data.data;
      }

    }, (error:any) => {

    });
  }


  updateCruisePackage(id:string){
    this.holidayPackage.id = undefined;
    this._APIBaseService.put<any>('holiday/update/'+`${id}`, this.holidayPackage).subscribe((data:Response)=> {
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
        this._APIBaseService.delete<any>('holiday/delete/'+`${id}`).subscribe(
          (data:Response) => {
            if(data.code === 200){
              Swal.fire({
                icon: 'success',
                title: 'Package Deleted Successfully!'
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

}
