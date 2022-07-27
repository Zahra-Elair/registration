import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // private userSubject: BehaviorSubject<User>;
  // public user: Observable<User>;

  constructor(private _http:HttpClient, private router: Router) {
    // this.userSubject = new BehaviorSubject<User>(
    //   JSON.parse(localStorage.getItem('currentUser'))
    // );
    // this.user = this.userSubject.asObservable();
   }

  //  public get userValue(): User {
  //   return this.userSubject.value;
  // }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }


  public loginUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>(`${environment.apiUrl}/api/login`,user)
    }

  
  public SignUpUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>(`${environment.apiUrl}/api/registeruser`,user)

  }
}
