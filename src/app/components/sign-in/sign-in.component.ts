import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  msg=''
  user=new User(0,'','','','','','','','','');

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log(data);
        if(data == null) { 
          this.msg="wrong email or password"
        }else
        if(data.profile=="USER"){
          this.msg="" 
          this._router.navigate(["user"])
          }
          else 
        if(data.profile=="ADMIN"){
          this.msg="" 
          this._router.navigate(["admin"])
          }
    },

      error => {
        this.msg="wrong email or password"     }
    )

  }

  gotosignup(){
    this._router.navigate(["signup"])
  }






  
}
