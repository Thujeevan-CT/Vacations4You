import { Component } from '@angular/core';
import { Response } from 'src/app/core/model/response';
import { UserRegistration } from 'src/app/core/model/user-registration';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent {
  public userRegisrationDetails = {} as UserRegistration


  constructor(private _APIBaseService : BaseService,) {

  }

  registerUser(){
    this.userRegisrationDetails.role = 'agent';
    this._APIBaseService.post<any>('auth/register',this.userRegisrationDetails).subscribe((data:Response)=> {
      switch (data.code){
        case 200 :
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data.message
          });
        break;

        case 400:
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data.message
          });
        break;
      }
    },
    (error:any)=> {
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
}
