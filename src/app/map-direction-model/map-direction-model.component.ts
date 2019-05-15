import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {LoadingController, ModalController} from '@ionic/angular';
import {Subscription} from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {filter} from 'rxjs/operators';
declare var google;
@Component({
  selector: 'app-map-direction-model',
  templateUrl: './map-direction-model.component.html',
  styleUrls: ['./map-direction-model.component.scss'],
})
export class MapDirectionModelComponent implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  @Input() destLat: number;
  @Input() destLong: number;
  // variables
  positionSubscription: Subscription;
  map: any;
  trackedRoute = [];
  myLat;
  myLong;
  currentMapTrack = null;
  directionsDisplay;
  directionsService = new google.maps.DirectionsService();
  height: string;
  // Constructor
   constructor(public modalCtrl: ModalController , private geolocation: Geolocation , public loadingController: LoadingController) {}
  ngOnInit() {
     this.map = null;
    this.height = (document.documentElement.clientHeight - 15) + 'px' ;
    this.presentLoading();
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }
  showMapWithGPS() {
    this.directionsDisplay = new google.maps.DirectionsRenderer({preserveViewport: true});
    const mapOptions = {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false ,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.map.setZoom(12);
    // get my location (enable gps)
    this.geolocation.getCurrentPosition().then(pos => {
      const latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      this.map.setCenter(latLng);
      // get my lat and long
      this.myLat = pos.coords.latitude ;
      this.myLong = pos.coords.longitude;
      this.directionsDisplay.preserveViewport = true;
      this.directionsDisplay.setMap(this.map);
      this.calcRoute();
      // this.startTracking();
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }
  calcRoute() {
    const start = new google.maps.LatLng(this.myLat, this.myLong);
    const end = new google.maps.LatLng(this.destLat, this.destLong);
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(start);
    bounds.extend(end);
    this.map.fitBounds(bounds);
    const request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    };
    this.directionsService.route(request, (response, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.preserveViewport = true;
        this.directionsDisplay.setDirections(response);
        this.directionsDisplay.setMap(this.map); } else {
        console.log( 'Directions Request from ' + start.toUrlValue(6) + ' to ' + end.toUrlValue(6) + ' failed: ' + status);
      }
    });
  }
  startTracking() {
    this.positionSubscription = this.geolocation.watchPosition()
    // in case of not cords return
        .pipe(
            filter((p) => p.coords !== undefined)
        )
        // in case of data return
        .subscribe(data => {
          console.log(data);
          setTimeout(() => {
            this.myLat =  data.coords.latitude;
            this.myLong =  data.coords.longitude;
            this.calcRoute();
          }, 1500);
        });

  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading map ...',
      duration: 5000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.showMapWithGPS();
  }

}
