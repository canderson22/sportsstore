import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = PRODUCTS;
  selectedCategory = '';

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  constructor() { }

  ngOnInit() {
  }

}
