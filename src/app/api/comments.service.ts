import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(public http: HttpClient) { }

  apiURl = 'http://www.drivixcorp.com/api/';

  getComments(role_id) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiURl + 'getComments', JSON.stringify({}), {
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

  addComment(data) {
      return new Promise((resolve, reject) => {
          this.http.post(this.apiURl + 'addComment', JSON.stringify({}), {
              params: new HttpParams()
                  .set('role_id', data.role_id)
                  .append('token', data.token)
                  .append('comment', data.comment)
                  // .append('comment_id', data.comment_id)
          })
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err);
              });
      });
  }

    addReply(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiURl + 'addComment', JSON.stringify({}), {
                params: new HttpParams()
                    .set('role_id', data.role_id)
                    .append('token', data.token)
                    .append('comment', data.comment)
                    .append('comment_id', data.comment_id)
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

  deleteComment(data) {
    return new Promise((resolve, reject) => {
        this.http.post(this.apiURl + 'deleteComment', JSON.stringify({}), {
            params: new HttpParams()
                .set('token', data.token)
                .append('targetCommentID', data.comment_id)
        })
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
    });
  }

    editComment(data) {
      console.log(data);
        return new Promise((resolve, reject) => {
            this.http.post(this.apiURl + 'editComment', JSON.stringify({}), {
                params: new HttpParams()
                    .set('token', data.token)
                    .append('targetCommentID', data.targetCommentID)
                    .append('comment', data.comment)
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

  addEstimateComment(data) {
      return new Promise((resolve, reject) => {
          this.http.post(this.apiURl + 'addEstimateComment', JSON.stringify({}), {
              params: new HttpParams()
                  .set('role_id', data.role_id)
                  .append('token', data.token)
                  .append('estimate', data.estimate)
                  .append('comment_id', data.comment_id)
          })
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err);
              });
      });
  }

  deleteEstimateComment(data) {
    return new Promise((resolve, reject) => {
        this.http.post(this.apiURl + 'deleteEstimateComment', JSON.stringify({}), {
            params: new HttpParams()
                .set('token', data.token)
                .append('comment_id', data.comment_id)
        })
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
    });
    }
}
