import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:9090/api/login",user)

  }
  public SignUpUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:9090/api/registeruser",user)

  }
}
