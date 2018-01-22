import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { UniquePipe } from './unique.pipe';
import { CategoryFilterFn } from './categoryFilter.pipe';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UniquePipe,
    CategoryFilterFn
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
