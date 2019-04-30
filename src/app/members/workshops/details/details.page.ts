import { Storage } from '@ionic/storage';
import {ModalController, NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RatesService } from '../../../api/rates.service';
import { CommentsService } from '../../../api/comments.service';
import {forEach} from '@angular-devkit/schematics';
import {MapDirectionModelComponent} from '../../../map-direction-model/map-direction-model.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  workshopObj: any;
  workshop = 'branch';
  role_comments: any;
  rateData = {
    token : '',
    role_id : null,
    rate : null
  };
  rateRange = Array(5);


  constructor(public navCtrl: NavController, public ratesService: RatesService, private storage: Storage,
                    public toastController: ToastController, private route: ActivatedRoute, public commentsService: CommentsService ,  public modalController: ModalController) {

    this.workshopObj = this.route.snapshot.paramMap.get('workshopObj');
    this.workshopObj = JSON.parse(this.workshopObj);
  }

  async ngOnInit() {
    await this.getToken();
    await this.getComments();
  }

  async getToken() {
    await this.storage.get('token').then((val) => {
      if (val != null) {
        return val;
      }
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

  async getComments() {
    // await this.commentsService.getComments(this.workshopObj.id).then(data => {
    //   // @ts-ignore
    //   this.role_comments = data;
    //   console.log(data);
    //   console.log('here');
    // });
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
