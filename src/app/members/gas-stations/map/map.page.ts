import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NavController, Platform} from '@ionic/angular';

import {filter, map} from 'rxjs/operators';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { MapsService } from '../../../api/maps.service';
import { GoogleMap } from '@ionic-native/google-maps/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AuthenticationService } from '../../../api/authentication.service';
import {Subscription} from 'rxjs';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map') mapElement: ElementRef;

  // map: GoogleMap;
  locations: any;
  currentLat: any;
  currentLong: any;
  currentLocation: any;
  markers = new Array();
  destination: any = 'Egypt';

  // test traking
  map: any;
  currentMapTrack = null;

  isTracking = false;
  trackedRoute = [];
  previousTracks = [];

  positionSubscription: Subscription;

  // ________

  constructor(public navCtrl: NavController, private stationsMap: MapsService, private plt: Platform,
    private Auth: AuthenticationService, private storage: Storage, private http: Http , private geolocation: Geolocation) {
      this.displayGoogleMap();
      this.getMarkers();
  }

  // test traking
  ionViewDidLoad() {
    this.plt.ready().then(() => {
      this.loadHistoricRoutes();
    });
  }

  loadHistoricRoutes() {
    this.storage.get('routes').then(data => {
      if (data) {
        this.previousTracks = data;
      }
    });
  }

  startTracking() {
    console.log('start');
    this.isTracking = true;
    this.trackedRoute = [];

    this.positionSubscription = this.geolocation.watchPosition()
        .pipe(
            filter((p) => p.coords !== undefined)
        )
        .subscribe(data => {
          setTimeout(() => {
            console.log(data);
            this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
            this.redrawPath(this.trackedRoute);
          }, 0);
        });

  }

  redrawPath(path) {
    if (this.currentMapTrack) {
      this.currentMapTrack.setMap(null);
    }

    if (path.length > 1) {
      this.currentMapTrack = new google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: '#ff00ff',
        strokeOpacity: 1.0,
        strokeWeight: 3
      });
      this.currentMapTrack.setMap(this.map);
    }
  }

  stopTracking() {
    const newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
    this.previousTracks.push(newRoute);
    this.storage.set('routes', this.previousTracks);

    this.isTracking = false;
    this.positionSubscription.unsubscribe();
    this.currentMapTrack.setMap(null);
  }

  showHistoryRoute(route) {
    this.redrawPath(route);
  }
  // ________
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
      marker = new google.maps.Marker({
        map: this.map,
        position: location,
        title: 'distance : ' + Number(marker.distance).toFixed(2),
        animation: google.maps.Animation.DROP,
        icon: icon,
      });

      this.markers.push(marker);
    }
  }

  // Direction
  calculateAndDisplayRoute() {
    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer;
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: {lat: 31.171087, lng: 31.2227556}
    });

    directionsDisplay.setMap(map);

    directionsService.route({
      origin: '',
      destination: this.destination,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  async ngOnInit() {
  }

}
