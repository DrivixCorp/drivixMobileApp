import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

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
                    } // Here is the error catching that needs to be added
                    , err => {
                        console.log(' Error : ' + JSON.stringify(err));
                    });
        });
    }

    // get nearest 10 workshops
    getNearestWorkshops(location, token) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiURl + 'NearestWorkshop',  {
                params: new HttpParams().set('long', location.long).append('lat', location.lat),
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'token': token
                })
            })
                .subscribe(res => {
                    console.log(res);
                    resolve(res);
                }, err => {
                    console.log(' Error : ' + JSON.stringify(err));
                });
        });
    }

    // get nearest 10 spare parts shops
    getNearestSparesPartShops(location, token) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiURl + 'NearestSparesPartShop',  {
                params: new HttpParams().set('long', location.long).append('lat', location.lat),
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'token': token
                })
            })
                .subscribe(res => {
                    console.log(res);
                    resolve(res);
                }, err => {
                    console.log(' Error : ' + JSON.stringify(err));
                });
        });
    }

}
