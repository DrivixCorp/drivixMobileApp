import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  product: any;

  constructor(private route: ActivatedRoute) {
    const product = this.route.snapshot.paramMap.get('productObj');
    this.product = JSON.parse(product);
    console.log(this.product);
  }

  ngOnInit() {
  }

}
