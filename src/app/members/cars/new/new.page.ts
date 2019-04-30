import { Storage } from '@ionic/storage';
import {Component, NgZone, OnInit} from '@angular/core';
import { CarsService } from '../../../api/cars.service';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  data = {
    token: '',
    model: '',
    brand: '',
    year: '',
    color: '#ooo', // black as default value
  };

  carFormGroup: FormGroup;

  constructor(private alertController: AlertController, private carsService: CarsService, private form_builder: FormBuilder,
              private storage: Storage, public toastController: ToastController, public navCtrl: NavController,
              private router: Router, public ngZone: NgZone) {
    this.carFormGroup = form_builder.group({
      'model' : [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      'brand' : [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
      'year'  : new FormControl(null, Validators.compose([Validators.required, Validators.minLength(4),
        Validators.maxLength(5), Validators.pattern(/(199\d{1})|([2-9]\d{3})/)])),
      'color' : new FormControl(null, Validators.compose([Validators.required]))
    });
  }

  ngOnInit() {
  }

  async storeCar() {
    await this.storage.get('token').then(async (val) => {
      if (val != null) {
        this.data.token = val;
        await this.carsService.storeCar(this.data).then(data => {
          if (Object.keys(data).length > 0) {

            this.ngZone.runOutsideAngular(() => {
              this.router.navigateByUrl('/members/menu/cars');
            });

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
