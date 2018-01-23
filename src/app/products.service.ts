import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Product } from './products';
import { catchError, map, tap } from 'rxjs/operators';
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
    return this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(products => this.log(`fetched products`)),
      catchError(this.handleError('get products', []))
    );
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
