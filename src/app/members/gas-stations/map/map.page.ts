import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ActionSheetController, AlertController, NavController, Platform} from '@ionic/angular';

import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { filter, map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { MapsService } from '../../../api/maps.service';
import { GoogleMap } from '@ionic-native/google-maps/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AuthenticationService } from '../../../api/authentication.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';
import {MapDirectionModelComponent} from '../../../map-direction-model/map-direction-model.component';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map') mapElement: ElementRef;

  map: GoogleMap;
  currentLat: any;
  currentLong: any;
  currentLocation: any;
  markers = new Array();
  destination: any = 'Egypt';

  constructor(public navCtrl: NavController, private stationsMap: MapsService, private plt: Platform, public modalController: ModalController,
    private Auth: AuthenticationService, private storage: Storage, private http: Http , private geolocation: Geolocation,
              public actionSheetController: ActionSheetController, private readonly router: Router) {
      this.displayGoogleMap();
      this.getMarkers();
  }

  async displayGoogleMap() {

    await this.geolocation.getCurrentPosition().then((resp) => {
      // get lat and long for current position
      this.currentLat = resp.coords.latitude;
      this.currentLong = resp.coords.longitude;

      // current location
      const latLng = new google.maps.LatLng(this.currentLat, this.currentLong);

      // google map options
      const mapOptions = {
        center: latLng,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{color: '#c9b2a6'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{color: '#dcd2be'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#ae9e90'}]
          },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#93817c'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{color: '#a5b076'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#447530'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#f5f1e6'}]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{color: '#fdfcf8'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#f8c967'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#e9bc62'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{color: '#e98d58'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{color: '#db8555'}]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#806b63'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{color: '#8f7d77'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#ebe3cd'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{color: '#b9d3c2'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#92998d'}]
          }
        ]
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  // get nearest gas stations and set markers
  async getMarkers() {
    await this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation = {lat: resp.coords.latitude, long: resp.coords.longitude};
      this.stationsMap.getNearestGasStations(this.currentLocation)
          .then(async success => {
            success[10] = this.currentLocation;
            this.addMarkersMap(success);
            console.log(success);
          })
          .catch(err => {
            console.log(err);
          });
    });
  }

  // add Markers
  addMarkersMap(markers) {
    for (let marker of markers) {
      let icon;
      if (!marker.distance) {
        icon = '../../../assets/images/icons/current-marker.png';
      } else {
        icon = '../../../assets/images/icons/marker.png';
      }

      const location = new google.maps.LatLng(marker.lat, marker.long);
      let new_marker = new google.maps.Marker({
        map: this.map,
        position: location,
        title: 'distance : ' + Number(marker.distance).toFixed(2),
        animation: google.maps.Animation.DROP,
        icon: icon,
      });

      this.markers.push(new_marker);

      google.maps.event.addDomListener(new_marker, 'click', async () => {
        const actionSheet = await this.actionSheetController.create({
          buttons: [{
            text: 'Track',
            icon: 'navigate',
            handler: async () => {
              this.closeMapModal();
              const modal = await this.modalController.create({
                component: MapDirectionModelComponent,
                componentProps: {
                  'destLat': marker.lat,
                  'destLong': marker.long
                }
              });
              return await modal.present();
            }
          }, {
            text: 'Station Information',
            icon: 'information-circle-outline',
            handler: () => {
              this.closeMapModal();
              const stationMarker = JSON.stringify(marker);
              this.router.navigate(['/members/gas-station', stationMarker]);
            }
          }, {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
            }
          }]
        });
        await actionSheet.present();
      });
    }
  }

  async closeMapModal() {
        await this.modalController.dismiss();
  }

  async ngOnInit() {
  }

}
