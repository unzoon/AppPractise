import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Warehouse } from './warehouse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class WarehouseService {

  private websiteUrl = 'http://localhost:8080/warehouse';  // URL to web api

  constructor(private http: HttpClient) { }

  getWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(this.websiteUrl);
  }

  getWarehouse(id: number): Observable<any> {
    const pickup = `${this.websiteUrl}/${id}`;
    return this.http.get<Warehouse>(pickup);
  }

  addWarehouse(warehouse: Warehouse) {
	//console.log(warehouse);
    return this.http.post(this.websiteUrl, warehouse, httpOptions);
  }

  updateWarehouse(warehouse: Warehouse): Observable<any> {
    return this.http.put(this.websiteUrl, warehouse, httpOptions);
  }

  deleteWarehouse(warehouse: Warehouse | number) {
	  if (confirm("Are you sure to delete?")) {
		const id = typeof warehouse === 'number' ? warehouse : warehouse.id;
		const pickup = `${this.websiteUrl}/${id}`;
		return this.http.delete(pickup, httpOptions);
	  }
	  return of({});
  }
}
