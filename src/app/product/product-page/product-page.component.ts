import { Component, OnInit } from '@angular/core';
import ProductsData from 'src/app/services/products-data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Basket from 'src/app/services/basket.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product!: Product;

  constructor(
    private productsData: ProductsData,
    private basket: Basket,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name')!;
    this.product = this.productsData.getSpecificProductByName(name);
  }

  goToMain() {
    this.router.navigate(["/main"]);
  }

  buy(product: Product) {
    this.basket.addItem(product);
  }

}
