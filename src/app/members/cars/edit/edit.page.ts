import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import {Component, NgZone, OnInit} from '@angular/core';
import { CarsService } from '../../../api/cars.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  token: any;
  carId: any;
  car: any = {};

  carFormGroup: FormGroup;

  constructor(private route: ActivatedRoute, private carsService: CarsService, private storage: Storage, private router: Router,
              private form_builder: FormBuilder, public toastController: ToastController, public navCtrl: NavController,
              public ngZone: NgZone) {
    this.carFormGroup = form_builder.group({
      'model' : [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      'brand' : [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      'year'  : new FormControl(null, Validators.compose([Validators.required, Validators.minLength(4),
        Validators.maxLength(5)])),
      'color' : new FormControl(null, Validators.compose([Validators.required])),
    });
  }

  ngOnInit() {
    this.carId = this.route.snapshot.paramMap.get('carId');
    this.storage.get('token').then((val) => {
      if (val != null) {
        this.token = val;
        this.carsService.getUserCar(val, this.carId).then(data => {
          this.car = data;
        });
      }
    });
  }

  updateCar() {
    this.storage.get('token').then((val) => {
      if (val != null) {
        this.carsService.updateCar(val, this.car).then(data => {
          if (Object.keys(data).length > 0) {

            this.ngZone.runOutsideAngular(() => {
              this.router.navigateByUrl('/members/menu/cars');
            });
            // this.router.navigateByUrl('/members/menu/cars');
          } else {
            this.presentToastWithOptions();
          }
        });
      }
    });
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      duration: 2000,
      position: 'bottom',
      message: 'Something went wrong, try again !',
    });
    toast.present();
  }

}
