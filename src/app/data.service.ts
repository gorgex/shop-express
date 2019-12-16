import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:3000/products';

  constructor(private _http : HttpClient) { }

  getProducts() {
    return this._http.get<Product[]>(this.apiUrl);
  }
}
