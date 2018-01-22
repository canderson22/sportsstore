import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Product } from './products';
import { PRODUCTS } from './mock-products';
import { MessageService } from './message.service';

@Injectable()
export class ProductsService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add('Products Service: ' + message)
  }

  private productsUrl = 'http://localhost:5500/products'

  getProducts(): Observable<Product[]> {
    this.messageService.add('ProductService: fetch products')
    return this.http.get<Product[]>(this.productsUrl);
  }

}
