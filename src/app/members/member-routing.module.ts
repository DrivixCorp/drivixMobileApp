import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'services', loadChildren: './services/services.module#ServicesPageModule' },
  { path: 'cars', loadChildren: './cars/index/index.module#IndexPageModule' },
  { path: 'cars/new', loadChildren: './cars/new/new.module#NewPageModule' },
  { path: 'cars/edit/:carId', loadChildren: './cars/edit/edit.module#EditPageModule' },
  { path: 'gas-station/:stationObj', loadChildren: './gas-stations/details/details.module#DetailsPageModule' },
  { path: 'gas-stations/map', loadChildren: './gas-stations/map/map.module#MapPageModule' },
  { path: 'gas-stations/list', loadChildren: './gas-stations/list/list.module#ListPageModule' },
  { path: 'workshop/:workshopObj', loadChildren: './workshops/details/details.module#DetailsPageModule' },
  { path: 'workshops/list', loadChildren: './workshops/list/list.module#ListPageModule' },
  { path: 'workshops/map', loadChildren: './workshops/map/map.module#MapPageModule' },
  { path: 'spare-parts-shop/:sparePartsShopObj', loadChildren: './spare-parts-shops/details/details.module#DetailsPageModule' },
  { path: 'spare-parts-shops/list', loadChildren: './spare-parts-shops/list/list.module#ListPageModule' },
  { path: 'spare-parts-shops/map', loadChildren: './spare-parts-shops/map/map.module#MapPageModule' },
  { path: 'winch-request', loadChildren: './winch-request/winch-request.module#WinchRequestPageModule' },
  { path: 'products/list', loadChildren: './products/list/list.module#ListPageModule' },
  { path: 'products/details/:productObj', loadChildren: './products/details/details.module#DetailsPageModule' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
