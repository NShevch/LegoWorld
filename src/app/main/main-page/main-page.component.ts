import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @Input() products!: Product[];
  
  constructor() {}

  ngOnInit(): void {
  }

  getFilteredProducts(products: Product[]) {
    this.products = products;
  }
  

}
