import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../../api/cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  carsList: any = [];
  emptyList = false;

  constructor(private alertController: AlertController, private carsService: CarsService, private storage: Storage,
              private readonly route: ActivatedRoute, private readonly router: Router,
              public toastController: ToastController, public navCtrl: NavController) { }

  ngOnInit() {
    this.getUserCars();
  }

  getUserCars() {
    this.storage.get('token').then((val) => {
      if (val != null) {
        this.carsService.getUserCars(val).then(data => {
          if (Object.keys(data).length > 0) {
            this.carsList = data;
          } else {
            this.emptyList = true;
          }
        });
      }
    });
  }

  updateCar(carId): void {
    this.router.navigate(['members/cars/edit', carId]);
  }

  deleteUserCars(carId) {
    this.storage.get('token').then((val) => {
      if (val != null) {
        this.carsService.deleteCar(val, carId).then(data => {
          if (Object.keys(data).length > 0) {
            this.presentToastWithOptions();
          }
        });
      }
    });
  }

  async presentAlert(car) {
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
            this.deleteUserCars(car.id);
            const index = this.carsList.indexOf(car);
            this.carsList.splice(index, 1);
            if (Object.keys(this.carsList).length == 0) {
              this.emptyList = true;
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      duration: 2000,
      position: 'bottom',
      message: 'Car deleted successfully !',
    });
    toast.present();
  }

}
