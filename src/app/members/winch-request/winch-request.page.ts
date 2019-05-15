import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {LoadingController , AlertController } from '@ionic/angular';
declare var google;
@Component({
  selector: 'app-winch-request',
  templateUrl: './winch-request.page.html',
  styleUrls: ['./winch-request.page.scss'],
})
export class WinchRequestPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  @Input() destLat: number;
  @Input() destLong: number;
  map: any;
  height: string;
  loader;
  currentLat;
  currentLong ;
  constructor( private geolocation: Geolocation , public loadingController: LoadingController , public alertController: AlertController) { }

  async ngOnInit() {
    this.map = null;
    this.height = (document.documentElement.clientHeight - 50) + 'px' ;
    const loading = await this.loadingController.create({
      message: 'Loading map ...',
    });
    await loading.present();
    await this.displayGoogleMap();
    await loading.dismiss();
  }

  async displayGoogleMap() {

    this.geolocation.getCurrentPosition().then((resp) => {
      // get lat and long for current position
      this.currentLat = resp.coords.latitude;
      this.currentLong = resp.coords.longitude;

      // current location
      const latLng = new google.maps.LatLng(this.currentLat, this.currentLong);

      // google map options
      const mapOptions = {
        center: latLng,
        zoom: 12,
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
      // set my marker
      const icon = '../../../assets/images/icons/current-marker.png';
      const  myMaker = new google.maps.Marker({
        map: this.map,
        position: latLng,
        animation: google.maps.Animation.DROP,
        icon: icon,
      });
      // test another icon
      const winchicon = '../../../assets/images/icons/marker.png';
      const winchlatLng = new google.maps.LatLng(this.currentLat + .02, this.currentLong + .02);
      const  winchIcon = new google.maps.Marker({
        map: this.map,
        position: winchlatLng,
        animation: google.maps.Animation.DROP,
        icon: winchicon,
      });

      google.maps.event.addDomListener(winchIcon, 'click', async () => {
          const alert = await this.alertController.create({
          subHeader: 'Are You Sure you want to Order this Winch ?',
          message: 'Winch fat 1.23 km from you <br> winch type wow winch',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: ['secondary'],
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Order Winch',
              cssClass: ['secondary' , 'ConfirmButton' ],
              handler: () => {
                console.log('Confirm Okay');
              }
            }
          ]
        });

        await alert.present();
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
