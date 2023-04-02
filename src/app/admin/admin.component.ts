import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ProductsData from '../shared/services/products-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  name!: string;
  description!: string;
  image!: string;
  price!: number;
  warn: boolean = false;

  constructor(
    private router: Router,
    private products: ProductsData
  ) { }

  ngOnInit(): void {
  }

  addNewProduct({name, description, image, price}: {
    name: string,
    description: string,
    image: string,
    price: string
  }) {
    if (
      name.trim() !== ''
      && description.trim() !== ''
      && image.trim() !== ''
      && price.trim() !== ''
      && price > '0'
    ) {
      this.products.add({
        name: name,
        description: description,
        image: image,
        price: Number(price)
      });
      this.goToMain();
    } else {
      this.warn = true;
      setTimeout(() => {
        this.warn = false;
      }, 2000);
    }
  }

  goToMain() {
    this.router.navigate(["/main"]);
  }
}
