import { Storage } from '@ionic/storage';
import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../../api/maps.service';
import { Router, NavigationExtras } from '@angular/router';
import { SearchService } from '../../../api/search.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AuthenticationService } from '../../../api/authentication.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  gasStationsList: any = [];
  searchText: string;
  notFound = false;
  results = true;

  constructor(private stationsMap: MapsService, private Auth: AuthenticationService,
              private storage: Storage, private geolocation: Geolocation, private decimalPipe: DecimalPipe,
              private searchService: SearchService) { }

  getGasStationsList() {
    this.geolocation.getCurrentPosition().then((resp) => {

      const currentLocation = { lat: resp.coords.latitude, long: resp.coords.longitude };

      this.stationsMap.getNearestGasStations(currentLocation)
          .then(async success => {
            this.gasStationsList = success;
            console.log(success);
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
        console.log(data);
        if (data.length > 0) {
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

  ngOnInit() {
    this.getGasStationsList();
  }

}
