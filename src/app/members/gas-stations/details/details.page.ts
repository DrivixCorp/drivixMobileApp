import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  station : string = "petrol";

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  
  segmentChanged(ev: any) {
    // console.log('Segment changed', ev);
  }

}
