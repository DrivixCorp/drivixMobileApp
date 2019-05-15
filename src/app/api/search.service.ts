import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiURl = 'http://www.drivixcorp.com/api/';

    constructor(public http: HttpClient) { }

    gasStationSearch(key) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiURl + 'FilterGasStation',  {
                params: new HttpParams().set('text', key),
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    workshopSearch(key, token) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiURl + 'FilterWorkShop',  {
                params: new HttpParams().set('text', key),
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'token': token
                })
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    sparePartsShopSearch(key, token) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiURl + 'FilterSparesShop',  {
                params: new HttpParams().set('text', key),
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'token': token
                })
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
