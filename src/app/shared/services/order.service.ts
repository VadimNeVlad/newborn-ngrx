import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${environment.apiUrl}/api/order`, order);
  }
}
