import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ProductsData from '../shared/services/products-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  form!: FormGroup;
  imageURL!: string;

  constructor(
    private router: Router,
    private products: ProductsData
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required, Validators.pattern("[1-9]+[0-9]*")]),
    });
  }

  onImageChange(event: Event) {
    let target = event.target as HTMLInputElement;
    if (!target.files || target.files.length === 0) {
      this.imageURL = '';
      return;
    }
    const file = target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      this.form.patchValue({
        image: this.imageURL
      });
    }
    reader.readAsDataURL(file);
  }

  addNewProduct() {
    this.products.add(this.form.value);
    this.goToMain();
  }

  goToMain() {
    this.router.navigate(["/main"]);
  }
}
