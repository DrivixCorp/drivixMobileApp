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
  user_name = null;
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
    {
      title: 'Car Services',
      children: [
        {
          title: 'gas Station',
          url: '/members/menu/gas-stations-list',
        },
        {
          title: 'workshop',
          url: '/members/menu/workshops-list',
        }, {
          title: 'spares shop',
          url: '/members/menu/spare-parts-shops-list',
        }
      ]
    } , {
      title: 'Products',
      url: '/members/menu/products/all',
    } , {
      title: 'FAQ',
      url: '/members/menu/faq',
    }
  ];

  constructor(private router: Router , public navCtrl: NavController , private storage: Storage) {
    this.router.events.subscribe((event:  RouterEvent) => {
      this.selectedPath = event.url;
      storage.get('user_name').then((val) => {
        this.user_name = val ;
      });
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
