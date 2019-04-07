import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  getUserReviewURl = 'http://www.drivixcorp.com/api/';

  constructor(public http: HttpClient) { }

    getUserReview(data) {
        return new Promise((resolve, reject) => {
            this.http.get(this.getUserReviewURl + 'getUserReview' ,  {
                params: new HttpParams().set('token', data.token).append('gas_id', data.gas_id) ,
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    gasStationReview(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.getUserReviewURl + 'gasStationReview', JSON.stringify({}), {
                params: new HttpParams()
                    .set('token', data.token)
                    .append('gas_id', data.gas_id)
                    .append('rate', data.rate)
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
