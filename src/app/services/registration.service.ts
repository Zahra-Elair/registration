import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class RegistrationService {


  constructor(private _http:HttpClient, private router: Router) {}


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

  public update(user:User):Observable<any>{
    console.log("hello");
    
    return  this._http.post<any>(`${environment.apiUrl}/api/registeruser`,user)

  }
  getAllUsers() {
    return this._http.get(`http://localhost:9090/api/allusers`);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
