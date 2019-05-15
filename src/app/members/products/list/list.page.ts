import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../api/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  token: any;
  searchText: any;
  spareShopID: any;
  initial: boolean;
  productsList = [];
  searchOption: boolean;

  constructor(public productsService: ProductsService, private route: ActivatedRoute,
              private storage: Storage, private readonly router: Router) {

    //@ts-ignore
    this.spareShopID = this.route.snapshot.paramMap.params.parameter;

    if(this.spareShopID != 'all') {
      this.initial = false;
      this.productsService.getSpareShopProdcut(this.spareShopID).then((products) => {
        //@ts-ignore
        this.productsList = products;
        console.log(this.productsList);
      });
    }

    else {
      this.getToken();
      this.initial = true;
      this.searchOption = true;
    }

  }

  ngOnInit() {
  }

  async getToken() {
    await this.storage.get('token').then((val) => {
      if (val != null) {
        this.token = val;
      }
    });
  }

  async searchProduct() {
    this.initial = false;
    if (this.searchText) {
      this.productsService.searchProduct(this.searchText, this.token).then((products) => {
        //@ts-ignore
        this.productsList = products;
        console.log(this.productsList);
      });
    }
  }

  openDetailsPage(product) {
    const productObj = JSON.stringify(product);
    this.router.navigate(['/members/products/details', productObj]);
  }

  openShopDetailsPage(sparePartsShop) {
    const sparePartsShopObj = JSON.stringify(sparePartsShop);
    console.log(sparePartsShopObj);
    this.router.navigate(['/members/spare-parts-shop', sparePartsShopObj]);
  }

}
