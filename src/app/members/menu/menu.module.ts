import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
      { path: 'services', loadChildren: '../services/services.module#ServicesPageModule' },
      { path: 'gas-station', loadChildren: '../gas-stations/details/details.module#DetailsPageModule' },
      { path: 'gas-stations-list', loadChildren: '../gas-stations/list/list.module#ListPageModule' },
      { path: 'workshops-list', loadChildren: '../workshops/list/list.module#ListPageModule' },
      { path: 'spare-parts-shops-list', loadChildren: '../spare-parts-shops/list/list.module#ListPageModule' },
      { path: 'cars', loadChildren: '../cars/index/index.module#IndexPageModule' },
    ]
  },
  {
    path:'menu',
    redirectTo: 'members/menu/services'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
