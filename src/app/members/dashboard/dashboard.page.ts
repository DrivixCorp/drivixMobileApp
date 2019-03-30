import { Component } from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {

  constructor(public navCtrl: NavController) { }
    // guard
    ionViewWillEnter() {
        if ( AuthenticationService.check_Auth() === false) {
            this.navCtrl.navigateRoot('');
        }
    }

}
