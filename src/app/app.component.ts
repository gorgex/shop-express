import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products$: Product[];
  router;
  prod = false;

  constructor(private dataService : DataService, router : Router) {
    this.router = router;
  }

  ngOnInit() {
    return this.dataService.getProducts()
      .subscribe(data => this.products$ = data);
  }

  addProduct() {
    const product = {
      "name": "Google Pixel 4",
      "price": "2699"
    }
    this.dataService.addProduct(product).subscribe();
  }

  deleteProduct(product) {
    if(confirm('Are you sure?')) {
      this.dataService.deleteProduct(product).subscribe();
    }
  }

  admin() {
    return this.router.url === '/admin' ? true : false;
  }
}
