import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
    nearestGasStationsURl = 'http://www.drivixcorp.com/api/';
    constructor(public http: HttpClient) { }

    // get nearest 10 gas stations
    getNearestGasStations(location) {
        return new Promise((resolve, reject) => {
            this.http.get(this.nearestGasStationsURl + 'NearestGasStation',  {
                params: new HttpParams().set('long', location.long).append('lat', location.lat) ,
            })
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
}
