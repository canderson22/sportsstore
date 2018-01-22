import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  selectedCategory = '';
  page = 1;

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  constructor( private productsService: ProductsService) {
  }
  
  getProducts(): void {
    this.products = this.productsService.getProducts();
  }
  
  ngOnInit() {
    this.getProducts()
  }

}
