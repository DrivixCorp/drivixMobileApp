import { Storage } from '@ionic/storage';
import {ModalController, NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RatesService } from '../../../api/rates.service';
import { CommentsService } from '../../../api/comments.service';
import {MapDirectionModelComponent} from '../../../map-direction-model/map-direction-model.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  stationObj: any;
  station = 'petrol';
  role_comments: any;
  gasStationPetrol = [
    'gas',
    'sollar',
    'petrol_80',
    'petrol_92',
    'petrol_95'
  ];
  gasStationServices = [
      'oil_change',
      'car_washing',
      'tier_repare',
      'align_wheel',
      'blowing_air',
      'blowing_nitro',
      'fix_suspension',
  ];
  rateData = {
    token : '',
    gas_id : null,
    rate : null
  };
  rateRange = Array(5);


  constructor(public navCtrl: NavController, public ratesService: RatesService, private storage: Storage,
              public toastController: ToastController, private route: ActivatedRoute, public commentsService: CommentsService , public modalController: ModalController) {

    this.stationObj = this.route.snapshot.paramMap.get('stationObj');

    this.stationObj = JSON.parse(this.stationObj);

    for (let prop of Object.keys(this.stationObj)) {

      if (this.gasStationPetrol.includes(prop)) {
        this.gasStationPetrol[prop] = this.stationObj[prop];
      } else if (this.gasStationServices.includes(prop)) {
        this.gasStationServices[prop] = this.stationObj[prop];
      }
    }
  }

  ngOnInit() {
    this.getUserReview();
    this.getToken();
  }

  getToken() {
    this.storage.get('token').then((val) => {
      if (val != null) {
        return val;
      }
    });
  }

  async submitRating(rateValue) {
    if (this.rateData.rate === 0) {
      this.stationObj.num_Drivix_review++;
    }
    this.rateData.rate = rateValue;
    await this.ratesService.gasStationReview(this.rateData).then(async data => {
      await this.presentToastWithOptions();
    });
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      duration: 2000,
      position: 'bottom',
      message: 'Rating Saved Successfully !',
    });
    toast.present();
  }

  replaceDash(word) {
    return word.replace('_', ' ');
  }

  getUserReview() {
    this.storage.get('token').then((val) => {
      if (val != null) {
        this.rateData.token = val;
        this.rateData.gas_id = this.stationObj.id;
        this.ratesService.getUserReview(this.rateData).then(data => {
          if (typeof(data) === 'number') {
            this.rateData.rate = data;
          } else {
            this.rateData.rate = 0;
          }
        });
      }
    });
  }

  async showMapModule(lat , long) {
    console.log('lat' + lat + ' - ' + long + long);
    const modal = await this.modalController.create({
      component: MapDirectionModelComponent,
      componentProps: {
        'destLat': lat,
        'destLong': long
      }
    });
    return await modal.present();
  }
}
