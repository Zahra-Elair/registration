import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';
import {FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'underscore';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  confirmPassword=new FormControl()
  registerForm:FormGroup ;
  msg=''; msg1=''
  user=JSON.parse(localStorage.getItem("currentUser") || '{}')

  constructor(private formBuilder: FormBuilder, private _service : RegistrationService, private _router : Router) { }

  
    ngOnInit() {
      this.registerForm = this.formBuilder.group({
          nom: ['', Validators.required],
          prenom: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          service: ['', Validators.required],
          tel: ['', [Validators.required,Validators.pattern('^[0-9]{8}$')]],
    });
  }


  gotoprofile(){
    this._router.navigate(["admin"])
    console.log("user");
    
    console.log(this.user);
    console.log("localstorage");
    console.log(localStorage.getItem("currentUser")); 
    
    

    
  
    }
  

  
  
  update() {
    
    if (this.registerForm.value.password != this.confirmPassword.value) {
      this.msg="les mots de passe ne correspondent pas"      
    }else{
      this.msg=''
    }
    
    
    if (this.registerForm.invalid) {
          // stop here if form is invalid
          this.msg1="forme invalide"

        console.log("invalid form");
    }else if(this.registerForm.value.password == this.confirmPassword.value){
          // display form values on success
          this.msg=''
          this.msg1=''
          
      console.log("valid form");
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      //Remove:
      // var str=JSON.stringify(this.registerForm.value) //string
      var obj=this.registerForm.value

        obj["id"]=this.user.id 
        obj["sapid"]=this.user.sapid 
        obj["matriculeRH"]=this.user.matriculeRH
        obj["profile"]=this.user.profile
        console.log(obj);//object

      
      
      this._service.update(obj).subscribe(
        data => {
          this._service.saveData("currentUser",JSON.stringify(data))
          this.user=JSON.parse(localStorage.getItem("currentUser") || '{}')

          
        },
        error => {console.log(error)}
        );
        
      
    
      

      

    }}

  
  reseto() {
    this.msg='';
    this.msg1='';
    this.registerForm.reset();
  }

}