import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    URl = 'http://www.drivixcorp.com/api/';
  constructor(public http: HttpClient) { }

    // Get My Profile
    Profile(Token) {
        return new Promise((resolve, reject) => {
            this.http.post(this.URl + 'profile/' + Token, JSON.stringify({}), {
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    // Add Profile
    UpdateProfileData(data , URL) {
        return new Promise((resolve, reject) => {
            this.http.post(this.URl + URL , JSON.stringify({}), {
                params: new HttpParams()
                    .set('token', data.token)
                    .append('phone', data.phone)
                    .append('gender', data.gender)
                    .append('DOB', data.DOB)
                    .append('job', data.job)
                    .append('location', data.location),
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
