import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

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

@NgModule({
  declarations: [AppComponent, ReplaceDashPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule , HttpModule ,
            HttpClientModule , IonicStorageModule.forRoot()],
  providers: [
    Platform,
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    DecimalPipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
