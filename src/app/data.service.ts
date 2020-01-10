import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:3000';

  constructor(private _http : HttpClient) { }

  getProducts() {
    return this._http.get<Product[]>(`${this.apiUrl}/products`);
  }

  addProduct(product) {
    return this._http.post<Product>(`${this.apiUrl}/products`, product);
  }

  deleteProduct(product) {
    return this._http.delete(`${this.apiUrl}/products/${product._id}`);
  }
}
