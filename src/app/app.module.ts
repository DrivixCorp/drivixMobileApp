import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { Platform } from '@ionic/angular';

import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMaps } from '@ionic-native/google-maps/ngx';

import { DecimalPipe } from '@angular/common';
import { ReplaceDashPipe } from './pipes/replace-dash.pipe';
import {MapDirectionModelComponent} from './map-direction-model/map-direction-model.component';

import { MapPageModule as StationsMapPageModule } from './members/gas-stations/map/map.module';
import { MapPageModule as WorkshopsMapPageModule } from './members/workshops/map/map.module';
import { MapPageModule as SparePartsShopssMapPageModule } from './members/spare-parts-shops/map/map.module';


@NgModule({
  declarations: [AppComponent, ReplaceDashPipe , MapDirectionModelComponent],
  entryComponents: [MapDirectionModelComponent],
  imports: [BrowserModule, CommonModule, IonicModule.forRoot(), AppRoutingModule , HttpModule ,
            HttpClientModule  , StationsMapPageModule, WorkshopsMapPageModule, SparePartsShopssMapPageModule, IonicStorageModule.forRoot()],
  providers: [
    Platform,
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    DecimalPipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } ,
    Camera ,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
