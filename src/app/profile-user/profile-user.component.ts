import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

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
