import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { UniquePipe } from './unique.pipe';
import { CategoryFilterFn } from './categoryFilter.pipe';
import { ProductsService } from './products.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UniquePipe,
    CategoryFilterFn,
    MessagesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [HttpClientModule, ProductsService, MessageService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
