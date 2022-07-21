import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  msg=''
  user=new User(0,'','','','','','','','','');

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  signUpUser(){
    this._service.SignUpUserFromRemote(this.user).subscribe(
      data => {
        console.log(data);

        if(data.email="" || data.password == "" || data.profile == "") { 
          this.msg="email, password and profile type are mandatory"
        }
    },

      error => {console.log(error)
        this.msg="wrong email or password"     }
    )

  }

  gotosignin(){
    this._router.navigate(["/"])  }
}
