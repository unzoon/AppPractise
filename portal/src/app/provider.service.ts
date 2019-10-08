import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Provider } from './provider';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ProviderService {

  private websiteUrl = 'http://localhost:8080/provider';  // URL to web api

  constructor(private http: HttpClient) { }

  getProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.websiteUrl);
  }

  getProvider(id: number): Observable<any> {
    const pickup = `${this.websiteUrl}/${id}`;
    return this.http.get<Provider>(pickup);
  }

  addProvider(provider: Provider) {
	//console.log(provider);
    return this.http.post(this.websiteUrl, provider, httpOptions);
  }

  updateProvider(provider: Provider): Observable<any> {
    return this.http.put(this.websiteUrl, provider, httpOptions);
  }

  deleteProvider(provider: Provider | number) {
	  if (confirm("Are you sure to delete?")) {
		const id = typeof provider === 'number' ? provider : provider.id;
		const pickup = `${this.websiteUrl}/${id}`;
		return this.http.delete(pickup, httpOptions);
	  }
	  return of({});
  }
}
