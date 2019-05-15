import { Storage } from '@ionic/storage';
import { MapPage } from '../map/map.page';
import { DecimalPipe } from '@angular/common';
import {Component, OnInit, ViewChild} from '@angular/core';
import { MapsService } from '../../../api/maps.service';
import { Router } from '@angular/router';
import { SearchService } from '../../../api/search.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AuthenticationService } from '../../../api/authentication.service';
import { MapDirectionModelComponent } from '../../../map-direction-model/map-direction-model.component';
import { ModalController } from '@ionic/angular';
import {IonList} from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('WorkshopSlider') slidingList: IonList;
  token: any;
  workshopsList: any = [];
  searchText: any;
  notFound = false;
  results = true;

  constructor(private workshopsMap: MapsService, private Auth: AuthenticationService,
              private storage: Storage, private geolocation: Geolocation, private decimalPipe: DecimalPipe,
              private searchService: SearchService, private readonly router: Router ,  public modalController: ModalController) { }

  ngOnInit() {
    this.getWorkshopsList();
  }

  getWorkshopsList() {
    this.geolocation.getCurrentPosition().then(async (resp) => {

      const currentLocation = {lat: resp.coords.latitude, long: resp.coords.longitude};

      await this.storage.get('token').then((val) => {
        if (val != null) {
          this.token = val;
          this.workshopsMap.getNearestWorkshops(currentLocation, val)
              .then(async success => {
                this.workshopsList = success;
              })
              .catch(err => {
                console.log(err);
              });
        }
      });
    });
  }

  calculateDistance(distance) {
    if (distance < 1) {
      distance = distance * 100;
      distance = this.decimalPipe.transform(distance, '3.1-2') + ' M';
    } else {
      distance = this.decimalPipe.transform(distance, '3.1-2') + ' Km';
    }
    return distance;
  }

  async searchForWorkshop() {
    if (this.searchText) {
      this.results = false;
      this.searchService.workshopSearch(this.searchText, this.token).then(async data => {
        this.workshopsList = data;
        console.log(data);
        for (const workshop of this.workshopsList) {
          if (workshop.rolelocation.length > 0) {
            workshop.lat = workshop.rolelocation[0].lat;
            workshop.long = workshop.rolelocation[0].long;
          } else {
            workshop.lat = null;
            workshop.long = null;
          }
        }
        console.log(this.workshopsList);
        if (Object.keys(data).length > 0) {
          this.notFound = false;
        } else {
          this.notFound = true;
        }
        if (this.slidingList) {
          await this.slidingList.closeSlidingItems();
        }
      });
    } else {
      this.results = true;
      this.notFound = false;
      this.getWorkshopsList();
    }
  }

  openDetailsPage(workshop) {
    console.log(workshop);
    const workshopObj = JSON.stringify(workshop);
    this.router.navigate(['/members/workshop', workshopObj]);
  }
  async showMapModule(lat , long) {
    const modal = await this.modalController.create({
      component: MapDirectionModelComponent,
      componentProps: {
        'destLat': lat,
        'destLong': long
      }
    });
    return await modal.present();
  }

  async openMapModal() {
    const modal: HTMLIonModalElement =
        await this.modalController.create({
          component: MapPage,
        });

    await modal.present();
  }

}
