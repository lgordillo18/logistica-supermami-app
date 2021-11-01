import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderTicket } from '../models/order-ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  constructor(
    private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/products`, {});
  }

  createNewOrder(newOrder: OrderTicket): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/order-ticket`, newOrder);
  } 
}