import { Storage } from '@ionic/storage';
import { MapPage } from '../map/map.page';
import { DecimalPipe } from '@angular/common';
import {Component, OnInit, ViewChild} from '@angular/core';
import { MapsService } from '../../../api/maps.service';
import { Router } from '@angular/router';
import { SearchService } from '../../../api/search.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AuthenticationService } from '../../../api/authentication.service';
import {IonList, ModalController} from '@ionic/angular';
import { MapDirectionModelComponent } from '../../../map-direction-model/map-direction-model.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('SparesSlider') slidingList: IonList;
  token: any;
  sparePartsShopsList: any = [];
  searchText: any;
  notFound = false;
  results = true;

  constructor(private sparePartsShopsMap: MapsService, private Auth: AuthenticationService,
              private storage: Storage, private geolocation: Geolocation, private decimalPipe: DecimalPipe,
              private searchService: SearchService, private readonly router: Router , public modalController: ModalController) { }

  ngOnInit() {
    this.getSparePartsShopsList();
  }

  getSparePartsShopsList() {
    this.geolocation.getCurrentPosition().then(async (resp) => {

      const currentLocation = {lat: resp.coords.latitude, long: resp.coords.longitude};

      await this.storage.get('token').then((val) => {
        if (val != null) {
          this.token = val;
          this.sparePartsShopsMap.getNearestSparesPartShops(currentLocation, val)
              .then(async success => {
                this.sparePartsShopsList = success;
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

  async searchForSparePartsShops() {
    if (this.searchText) {
      this.results = false;
      console.log(this.token);
      this.searchService.sparePartsShopSearch(this.searchText, this.token).then(async data => {
        this.sparePartsShopsList = data;
        console.log(data);
        for (const spares of this.sparePartsShopsList) {
          if (spares.rolelocation.length > 0) {
            spares.lat = spares.rolelocation[0].lat;
            spares.long = spares.rolelocation[0].long;
          } else {
            spares.lat = null;
            spares.long = null;
          }
        }
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
      this.getSparePartsShopsList();
    }
  }

  openDetailsPage(sparePartsShop) {
    const sparePartsShopObj = JSON.stringify(sparePartsShop);
    this.router.navigate(['/members/spare-parts-shop', sparePartsShopObj]);
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

  async openMapModal() {
    const modal: HTMLIonModalElement =
        await this.modalController.create({
          component: MapPage,
        });

    await modal.present();
  }
}
