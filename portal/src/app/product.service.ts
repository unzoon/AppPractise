import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ProductService {

  private websiteUrl = 'http://localhost:8080/product';  // URL to web api

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.websiteUrl);
  }

  getProduct(id: number): Observable<any> {
    const que = `${this.websiteUrl}/${id}`;
    return this.http.get<Product>(que);
  }

  addProduct(product: Product) {
	//console.log(product);
    return this.http.post(this.websiteUrl, product, httpOptions);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.websiteUrl, product, httpOptions);
  }

  deleteProduct(product: Product | number) {
	  if (confirm("Are you sure to delete?")) {
		const id = typeof product === 'number' ? product : product.id;
		const que = `${this.websiteUrl}/${id}`;
		return this.http.delete(que, httpOptions);
	  }
	  return of({});
  }
  
}
