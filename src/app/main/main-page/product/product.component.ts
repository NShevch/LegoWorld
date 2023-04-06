import { Component, OnInit, Input } from '@angular/core';
import ProductsData from 'src/app/shared/services/products-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  constructor(
    // private productsData: ProductsData,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.products = this.productsData.get();
  }

  showProductPage(product: Product) {
    this.router.navigate(["/product/" + product.name]);
  }
}
