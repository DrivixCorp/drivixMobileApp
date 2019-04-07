import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'services', loadChildren: './services/services.module#ServicesPageModule' },
  { path: 'gas-station', loadChildren: './gas-stations/details/details.module#DetailsPageModule' },
  { path: 'cars', loadChildren: './cars/index/index.module#IndexPageModule' },
  { path: 'cars/new', loadChildren: './cars/new/new.module#NewPageModule' },
  { path: 'cars/edit', loadChildren: './cars/edit/edit.module#EditPageModule' },
  { path: 'gas-stations/map', loadChildren: './gas-stations/map/map.module#MapPageModule' },
  { path: 'gas-stations/list', loadChildren: './gas-stations/list/list.module#ListPageModule' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
