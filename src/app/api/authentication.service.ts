import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor(public http: HttpClient) {
  }
  // fields
  static User = null;
  Login_Url = 'http://www.drivixcorp.com/api/login';
  Register_Url = 'http://www.drivixcorp.com/api/register';
    // check Auth or not
    static  check_Auth() {
     return AuthenticationService.User !== null;
    }
  // Login Function
  Login(data) {
      return new Promise((resolve, reject) => {
          this.http.post(this.Login_Url, JSON.stringify({}), {
            params: new HttpParams().set('email', data.email).append('password', data.password) ,
          })
          .subscribe(res => {
              resolve(res);
          }, (err) => {
              reject(err);
          });
      });
  }
  // register function
    register(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.Register_Url, JSON.stringify({}), {
                params: new HttpParams().set('email', data.email).append('password', data.password).append('name', data.name),
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
