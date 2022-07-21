import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  

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

  gotoprofile(){
    this._router.navigate(["admin"])
    // if(data.profile=="USER"){
    //   this._router.navigate(["profile-user"])}
    //   else 
    // if(data.profile=="ADMIN"){
    //   this._router.navigate(["profile"])
    }
  }


  



