import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';
import { User } from '../../models/user';
import {FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  confirmPassword=new FormControl()
  registerForm:FormGroup ;
  msg=''; msg1=''
  user=JSON.parse(localStorage.getItem("connectedUser")!)

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

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  gotoprofile(){
    this._router.navigate(["admin"])
    // if(data.profile=="USER"){
    //   this._router.navigate(["profile-user"])}
    //   else 
    // if(data.profile=="ADMIN"){
    //   this._router.navigate(["profile"])
    }
  

  
  //   this._service.update(this.user.id ,this.registerForm.value).subscribe((res:any)=>{
  //     console.log('updateeeone user',res) });
  
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

      console.log(obj);//object
      console.log(this.registerForm.controls);
          

      

    }}

  
  reseto() {
    this.msg='';
    this.msg1='';
    this.registerForm.reset();
  }

}