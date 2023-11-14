import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CruisePackage } from 'src/app/core/model/cruise-package';
import { Response } from 'src/app/core/model/response';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cruise-reservation-section',
  templateUrl: './cruise-reservation-section.component.html',
  styleUrls: ['./cruise-reservation-section.component.css'],
  providers: [DatePipe],
})
export class CruiseReservationSectionComponent implements OnInit{


  public allCruisePackages : Array<CruisePackage>  =  [];
  public cruisePackage = {} as CruisePackage;

  constructor(private _APIBaseService : BaseService, private _router : Router, private datePipe: DatePipe){
    
  }

  formatDate(timestamp: number | null): string {
    if (timestamp === null) {
      return ''; 
    }
    return this.datePipe.transform(timestamp, 'yyyy-MM-dd') || ''; 
  }

  changeDateValue(date:string){
    let result = Date.parse(date); 
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

  viewCruisePackage(id:string){
    // this.cruisePackage.id = undefined;
    this._APIBaseService.get<any>('cruise/'+`${id}`).subscribe((data:Response)=> {
      switch(data.code){
        case 200 :
          this.cruisePackage = data.data;
      }

    }, (error:any) => {

    });
  }


  updateCruisePackage(id:string){
    this.cruisePackage.id = undefined;
    this._APIBaseService.put<any>('cruise/update/'+`${id}`, this.cruisePackage).subscribe((data:Response)=> {
      switch(data.code){
        case 200 :
          this._getAllCruisePackageData();
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data.message
          });
      }

    }, (error:any) => {

    });
  }

  deleteCruisePackage(id:string){

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
        this._APIBaseService.delete<any>('cruise/delete/'+`${id}`).subscribe(
          (data:Response) => {
            if(data.code === 200){
              Swal.fire({
                icon: 'success',
                title: 'Order Deleted Successfully!'
              });
              this._getAllCruisePackageData();
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
