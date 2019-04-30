import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

    apiURl = 'http://www.drivixcorp.com/api/';

    constructor(public http: HttpClient) { }

    // get nearest 10 gas stations
    getNearestGasStations(location) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiURl + 'NearestGasStation',  {
                params: new HttpParams().set('long', location.long).append('lat', location.lat) ,
            })
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

    // get nearest 10 workshops
    getNearestWorkshops(location) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiURl + 'NearestWorkshop',  {
                params: new HttpParams().set('long', location.long).append('lat', location.lat) ,
            })
                .subscribe(res => {
                    console.log(res);
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    // get nearest 10 workshops
    getNearestSparesPartShops(location) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiURl + 'NearestSparesPartShop',  {
                params: new HttpParams().set('long', location.long).append('lat', location.lat) ,
            })
                .subscribe(res => {
                    console.log(res);
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
