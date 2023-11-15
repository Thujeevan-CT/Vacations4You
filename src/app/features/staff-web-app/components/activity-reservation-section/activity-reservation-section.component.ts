import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityPackage } from 'src/app/core/model/activity-package';
import { Response } from 'src/app/core/model/response';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-activity-reservation-section',
  templateUrl: './activity-reservation-section.component.html',
  styleUrls: ['./activity-reservation-section.component.css'],
  providers: [DatePipe]
})
export class ActivityReservationSectionComponent {

  public allActivityPackages: Array<ActivityPackage> = [];
  public activityPackage = {} as ActivityPackage;
  public newActivityPackage = {} as ActivityPackage;

  ngOnInit(): void {
    this._getAllActivtyPackageData();
    
   }
   constructor(private _APIBaseService : BaseService, private _router : Router, private datePipe: DatePipe){
    
   }


   private _getAllActivtyPackageData(){
     this._APIBaseService.get<any>('activity').subscribe((data:Response)=> {
       switch(data.code){
         case 200 :
           this.allActivityPackages = data.data;
       }
 
     }, (error:any) => {
 
     });
   }
 
   viewActivityPackage(id:string){
     // this.cruisePackage.id = undefined;
     this._APIBaseService.get<any>('activity/'+`${id}`).subscribe((data:Response)=> {
       switch(data.code){
         case 200 :
           this.activityPackage = data.data;
       }
 
     }, (error:any) => {
 
     });
   }
 
 
   updateActivityPackage(id:string){
     this.activityPackage.id = undefined;
     this._APIBaseService.put<any>('activty/update/'+`${id}`, this.activityPackage).subscribe((data:Response)=> {
       switch(data.code){
         case 200 :
           this._getAllActivtyPackageData();
           Swal.fire({
             icon: 'success',
             title: 'Success',
             text: data.message
           });
       }
 
     }, (error:any) => {
 
     });
   }
 
   deleteActivityPackage(id:string){
 
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
         this._APIBaseService.delete<any>('activity/delete/'+`${id}`).subscribe(
           (data:Response) => {
             if(data.code === 200){
               Swal.fire({
                 icon: 'success',
                 title: data.message
               });
               this._getAllActivtyPackageData();
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

   addNewActivityPackage(){
    if(this.isAnyPropertyNull(this.newActivityPackage)){
      Swal.fire({
        icon: 'warning',
        title: 'Please complete all the required fields!'
      });
      return;
    }

    this._APIBaseService.post<any>('activity/new', this.newActivityPackage).subscribe((data:Response)=> {
      switch(data.code){
        case 200 :
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data.message
          });
         this._getAllActivtyPackageData();
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
  resetAddNewActivityPackageForm() {
    this.newActivityPackage = {
      activity_type: '',
      destination: '',
      date: 0,
      age_restriction: 0,
      price: 0,
      description: ''
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
}
