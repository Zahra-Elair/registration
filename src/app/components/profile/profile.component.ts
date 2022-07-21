import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  update(){
    this._router.navigate(["update"])
  }

  signout(){
    this._router.navigate([""])
  }


}
