import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import Basket from '../../shared/services/basket.service';

@Component({
  selector: 'app-basket-icon',
  templateUrl: './basket-icon.component.html',
  styleUrls: ['./basket-icon.component.css']
})
export class BasketIconComponent implements OnInit {
  numberOfProducts!: number;

  constructor(
    private router: Router,
    private basket: Basket,
  ) {}

  ngOnInit(): void {}

  ngDoCheck() {
    this.numberOfProducts = this.basket.getAmountOfProducts();
  }
  onBasketClick() {
    this.router.navigate(["/basket"]);
  }

}
