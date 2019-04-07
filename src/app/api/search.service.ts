import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  gasStationSearchURl = 'http://www.drivixcorp.com/api/';

  constructor(public http: HttpClient) { }

  gasStationSearch(key) {
    return new Promise((resolve, reject) => {
      this.http.get(this.gasStationSearchURl + 'FilterGasStation',  {
        params: new HttpParams().set('text', key),
      })
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}
