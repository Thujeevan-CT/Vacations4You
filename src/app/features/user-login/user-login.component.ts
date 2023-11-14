import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Environment } from 'src/app/core/environment/environment';
import { LoginUser } from 'src/app/core/model/login-user';

import { Response } from 'src/app/core/model/response';
import { User } from 'src/app/core/model/user';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  public user: LoginUser = {
    email : '',
    password : ''
  };

  private _userDetails = {} as User;
  
  constructor(private _APIBaseService : BaseService, private _router : Router){
    
  }

  public userLogin(){
    if([null,'', undefined].includes(this.user['email']) || [null,'', undefined].includes(this.user['password'])){
      console.log('1st exception');
      return;
    }
    this._APIBaseService.post<any>('auth/login', this.user).subscribe(
      (data:Response) => {
        switch(data.code){
          case 200 : 
          this._userDetails =  data.data.user;
          Environment.accessToken = data.data.token;
          if (this._userDetails.role === 'staff') {
            this._router.navigate(['/vacation4u-user'], { queryParams: this._userDetails});
          } else if (this._userDetails.role === 'agent'){
            this._router.navigate(['/vacation4u-user'], { queryParams: this._userDetails});
          }
          break;

          case 400 : 
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data.message
          });
          break;
          
        }
      },
      (error: any) => {
        if(error.error.code === 422){
          Swal.fire({
            icon: 'error',
            title: 'Error ',
            html: error.error.message.map((element:string) => `<span>${element}</span>`).join('<br>')
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error ',
            text: error.error.message
          });
        }
      }
    );
  }


  userRegistration():void {
    this._router.navigate(['/vacation4u-registration']);
  }
}
