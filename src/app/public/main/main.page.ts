import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {AuthenticationService} from '../../api/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor( public navCtrl: NavController , private storage: Storage) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
      // check if token set or not
      this.storage.get('token').then((val) => {
          if (val != null) {
              console.log('token = ' + val);
              AuthenticationService.User = true;
              this.navCtrl.navigateForward('/members/menu/services');
          }
      });
  }

}
