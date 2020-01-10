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
      "name": "Test Item",
      "price": "1",
      "image": "uploads/logo.png"
    }
    // const product = {
    //   "name": "Google Pixel 4",
    //   "price": "2699",
    //   "image": "uploads/0107758_google-pixel-4-xl-single-sim-6gb-ram-64gb-lte-black_550.png"
    // }
    this.dataService.addProduct(product).subscribe();
    window.location.reload();
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
