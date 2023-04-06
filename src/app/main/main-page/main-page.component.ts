import { Component, Input, OnInit } from '@angular/core';
import ProductsData from 'src/app/shared/services/products-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  products!: Product[];
  productName: string = '';

  constructor(
    private productsData: ProductsData
  ) {}

  ngOnInit(): void {
    this.products = this.productsData.get();
  }

  // getFilteredProducts(products: Product[]) {
  //   this.products = products;
  // }


}
