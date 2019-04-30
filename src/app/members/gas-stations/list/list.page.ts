import { Storage } from '@ionic/storage';
import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../../api/maps.service';
import { Router } from '@angular/router';
import { SearchService } from '../../../api/search.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AuthenticationService } from '../../../api/authentication.service';
import {MapDirectionModelComponent} from '../../../map-direction-model/map-direction-model.component';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  gasStationsList: any = [];
  searchText: any;
  notFound = false;
  results = true;

  constructor(private stationsMap: MapsService, private Auth: AuthenticationService,
              private storage: Storage, private geolocation: Geolocation, private decimalPipe: DecimalPipe,
              private searchService: SearchService, private readonly router: Router , public modalController: ModalController) { }

  ngOnInit() {
    this.getGasStationsList();
  }

  getGasStationsList() {
    this.geolocation.getCurrentPosition().then((resp) => {

      const currentLocation = { lat: resp.coords.latitude, long: resp.coords.longitude };

      this.stationsMap.getNearestGasStations(currentLocation)
          .then(async success => {
            this.gasStationsList = success;
          })
          .catch(err => {
            console.log(err);
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

  searchForGasStation() {
    if (this.searchText) {
      this.results = false;
      this.searchService.gasStationSearch(this.searchText).then(data => {
        this.gasStationsList = data;
        if (Object.keys(data).length > 0) {
          this.notFound = false;
        } else {
          this.notFound = true;
        }
      });
    } else {
      this.results = true;
      this.notFound = false;
      this.getGasStationsList();
    }
  }

  openDetailsPage(gasStation) {
    const stationObj = JSON.stringify(gasStation);
    this.router.navigate(['/members/gas-station', stationObj]);
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
