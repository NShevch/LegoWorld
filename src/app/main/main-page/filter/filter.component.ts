import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import ProductsData from 'src/app/services/products-data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  products!: Product[];
  productsFiltered!: Product[];
  productName!: string;
  @Output() inputEvent = new EventEmitter<Product[]>();

  constructor(private productsData: ProductsData) { }

  ngOnInit(): void {
    this.products = this.productsData.get();
  }

  onInput() {
    this.productsFiltered = this.products.filter((product) => {
      return new RegExp(this.productName, "i").test(product.name);
    });
    this.inputEvent.emit(this.productsFiltered);
  }

}
