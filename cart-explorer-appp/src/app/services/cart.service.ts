import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://dummyjson.com/carts';

  constructor(private http: HttpClient) { }

  getCarts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getCartById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
