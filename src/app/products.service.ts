import { Injectable } from '@angular/core';
import { Product } from './products';
import { PRODUCTS } from './mock-products'

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

}
