import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products$: Product[];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    return this.dataService.getProducts()
      .subscribe(data => this.products$ = data);
  }
}
