import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(public http: HttpClient) { }

  getCommentsURl = 'http://www.drivixcorp.com/api/';

  getComments(role_id) {
    return new Promise((resolve, reject) => {
      this.http.post(this.getCommentsURl + 'getComments', JSON.stringify({}), {
        params: new HttpParams()
            .set('role_id', role_id)
      })
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
}
