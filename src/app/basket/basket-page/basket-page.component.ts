import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import Basket from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {
  products!: Product[];
  sum: number = 0;

  constructor(
    private router: Router,
    private basket: Basket
  ) { }

  ngOnInit(): void {  }

  ngDoCheck() {
    this.products = this.basket.getItems();
    this.countSum();
  }
  countSum() {
    let result = 0;
    this.products.forEach((product) => {
      if (product.amount && product.amount > 0) {
        result += product.price * product.amount;
      } else {
        result += product.price;
      }      
    });
    this.sum = result;
  }
  removeProduct(product: Product) {
    this.basket.removeProduct(product);
  }  
  clearBasket() {
    this.basket.clear();
  }
  goToMain() {
    this.router.navigate(["/main"]);
  }
  
}
