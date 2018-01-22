import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { UniquePipe } from './unique.pipe';
import { CategoryFilterFn } from './categoryFilter.pipe';
import { ProductsService } from './products.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UniquePipe,
    CategoryFilterFn,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [HttpClientModule, ProductsService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
