import { Storage } from '@ionic/storage';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { CarsService } from './../api/cars.service';

@Injectable({
  providedIn: 'root'
})
export class AppResolverService implements Resolve<any> {

  token: any;
  constructor(public storage: Storage, public carsService: CarsService) { }

  resolve() {
    return 'here';
  }
}

