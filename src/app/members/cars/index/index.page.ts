import {Storage} from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../../api/cars.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  carsList: any = [];
  emptyList = false;

  constructor(private alertController: AlertController, private carsService: CarsService, private storage: Storage) { }

  ngOnInit() {
    this.getUserCars();
  }

  getUserCars() {
    this.storage.get('token').then((val) => {
      if (val != null) {
        this.carsService.getUserCars(val).then(data => {
          if (data.length > 0) {
            this.carsList = data;
          } else {
            this.emptyList = true;
          }
        });
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Remove car',
      message: 'Are you sure you want to remove this car from your list?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Remove',
          handler: () => {
            console.log('Delete clicked');
          }
        }
      ]
    });
    await alert.present();
  }
}
