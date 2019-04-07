import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  getUserCarURL = 'http://www.drivixcorp.com/api/getUserCar';

  constructor(public http: HttpClient) { }

  getUserCars(token) {
    return new Promise((resolve, reject) => {
      this.http.post(this.getUserCarURL, JSON.stringify({}), {
        params: new HttpParams().set('token', token)
      })
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}
