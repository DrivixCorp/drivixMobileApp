import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import {AuthenticationService} from '../../api/authentication.service';
import {NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  selectedPath = '';
  serviceMenu = 'Services';

  pages = [
    {
      title: 'Home',
      url: '/members/menu/services',
    },
    {
      title: 'Profile',
      url: '/members/menu/profile',
    },
    {
      title: 'Cars',
      url: '/members/menu/cars',
    },
  ];

  constructor(private router: Router , public navCtrl: NavController , private storage: Storage) {
    this.router.events.subscribe((event:  RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  showSubmenu: boolean = false;

  menuItemHandler(): void {
    this.showSubmenu = !this.showSubmenu;
  }

    sign_out() {
      AuthenticationService.User = null;
      this.storage.remove('token');
      this.navCtrl.navigateRoot('');
    }
}
