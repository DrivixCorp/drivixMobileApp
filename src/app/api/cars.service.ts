import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

    storeCarURL = 'http://www.drivixcorp.com/api/storecar';
    getUserCarURL = 'http://www.drivixcorp.com/api/getUserCar';
    updateCarURL = 'http://www.drivixcorp.com/api/updatecar';
    deleteCarURL = 'http://www.drivixcorp.com/api/deletecar';

  constructor(public http: HttpClient) { }

    // get all user's car list
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

    // get user's car
    getUserCar(token, id) {
        return new Promise((resolve, reject) => {
            this.http.post(this.getUserCarURL, JSON.stringify({}), {
                params: new HttpParams().set('token', token)
            })
                .subscribe(res => {
                    let cars;
                    cars = res;
                    const index = cars.findIndex( car => car['id'] == id );
                    res = res[index];
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    // store new user's car
    storeCar(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.storeCarURL, JSON.stringify({}), {
                params: new HttpParams()
                    .set('token', data.token)
                    .append('year', data.year)
                    .append('color', data.color)
                    .append('brand', data.brand)
                    .append('model', data.model)
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    // get all user's car list
    updateCar(token, data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.updateCarURL, JSON.stringify({}), {
                params: new HttpParams()
                    .set('token', token)
                    .append('carID', data.id)
                    .append('year', data.year)
                    .append('color', data.color)
                    .append('brand', data.brand)
                    .append('model', data.model)
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    // delete user's car
    deleteCar(token, carID) {
        return new Promise((resolve, reject) => {
            this.http.post(this.deleteCarURL, JSON.stringify({}), {
                params: new HttpParams()
                    .set('token', token)
                    .append('carID', carID)
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
