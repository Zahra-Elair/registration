import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  msg=''
  user=new User(0,'','','','');

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        if(data == null) { 
          this.msg="wrong email or password"
        }else
        if(data.profile=="USER"){
          this.msg="" 
          this._router.navigate(["user"])
          console.log(data.profile);}
          else 
        if(data.profile=="ADMIN"){
          this.msg="" 
          this._router.navigate(["admin"])
          console.log(data.profile);}
    },

      error => {console.log(error)
        this.msg="wrong email or password"     }
    )

  }

}
