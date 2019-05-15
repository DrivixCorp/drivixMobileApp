import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }

  apiURl = 'http://www.drivixcorp.com/api/';

  getSpareShopProdcut(spareShopID) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiURl + 'GetSpareShopProdcut', JSON.stringify({}), {
        params: new HttpParams()
            .set('spareShopID', spareShopID)
      })
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  searchProduct(text, token) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiURl + 'searchProduct', JSON.stringify({}), {
        params: new HttpParams()
            .set('text', text)
            .append('token', token)
      })
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}
