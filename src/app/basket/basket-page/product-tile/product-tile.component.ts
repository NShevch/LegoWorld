import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {
  @Input() products!: Product[];
  @Output() removeTileEvent = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  removeTile(product: Product) {
    this.removeTileEvent.emit(product);
  }

  onInput(event: Event, product: Product) {
    const amount = Number((event.target! as HTMLInputElement).value);
    product.amount = amount;
  }

}
