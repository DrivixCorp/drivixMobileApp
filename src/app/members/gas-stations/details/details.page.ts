import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { RatesService } from '../../../api/rates.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  station = 'petrol';
  gasStation = {
    id: 181,
    name: 'Total Egypt',
    city: 'cairo',
    address: 'Ismailia Governorate, Egypt',
    gas: 1,
    sollar: 0,
    petrol_80: 1,
    petrol_92: 1,
    petrol_95: 1,
    oil_change: 0,
    car_washing: 1,
    tier_repare: 0,
    align_wheel: 0,
    blowing_air: 0,
    blowing_nitro: 0,
    fix_suspension: 0,
    google_rate: 4,
    icon: 'http://www.drivixcorp.com/api/storage/1553962412Total Egypt.jpg/gasStation',
  };
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
  data = {
    token : '',
    gas_id : null,
    rate : null
  };
  rateRange = Array(5);


  constructor(public navCtrl: NavController, public ratesService: RatesService, private storage: Storage,
              public toastController: ToastController) {
  }

  ngOnInit() {
    this.getUserReview();
  }

  getUserReview() {
    this.storage.get('token').then((val) => {
      if (val != null) {
        this.data.token = val;
        this.data.gas_id = this.gasStation.id;
        this.ratesService.getUserReview(this.data).then(data => {
          if (!isNaN(data) && typeof data === 'number') {
            this.data.rate = data;
          } else {
            this.data.rate = 0;
          }
        });
      }
    });
  }

  submitRating(rateValue) {
    this.data.rate = rateValue;
    this.ratesService.gasStationReview(this.data).then(data => {
      this.presentToastWithOptions();
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

  replaceDash (word) {
    return word.replace('_', ' ');
  }

  segmentChanged(ev: any) {
    // console.log('Segment changed', ev);
  }

}
