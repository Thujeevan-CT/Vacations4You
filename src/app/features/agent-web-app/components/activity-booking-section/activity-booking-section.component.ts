import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Environment } from 'src/app/core/environment/environment';
import { ActivityPackage } from 'src/app/core/model/activity-package';
import { ActivityPackageBooking } from 'src/app/core/model/activity-package-booking';
import { ActivityParticipants } from 'src/app/core/model/activity-participants';

import { Response } from 'src/app/core/model/response';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';
import Swal from 'sweetalert2';

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
  public activityParticipants : Array<ActivityParticipants> = [];

  public participantCount:number = 0;

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

  addNoOfParticipants(count:number){
    this.activityParticipants = [];

    for (let i = 0; i < count; i++) {
      const participant: ActivityParticipants = {
        name: '',
        age: 0, 
      };
      this.activityParticipants.push(participant);
    }
  
      
  }

  addNewActivityBooking(id:string){
    let ageRestiction:boolean = false;

    ageRestiction = this.activityParticipants.some((participant)=> participant.age < this.selectedActivityReservation.age_restriction);

    if(ageRestiction){
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'The age restriction is ' + `${this.selectedActivityReservation.age_restriction}`
      });
      return;
    }

    this.newActivityReservationBooking.participants = this.activityParticipants;
    this.newActivityReservationBooking.product_type =  'activity';
    this.newActivityReservationBooking.user_id = Environment.userid.id;
    this.newActivityReservationBooking.product_id = this.selectedActivityReservation.id || '';
    this._APIBaseService.post<any>('book', this.newActivityReservationBooking).subscribe((data: Response) => {
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
