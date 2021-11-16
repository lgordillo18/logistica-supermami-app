import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderTicket } from '../models/order-ticket.model';
import { ModifyTicket } from '../models/modify-ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(
    private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/products`, {});
  }

  getTicketStatus(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/order-tickets/status`, {});
  }

  createNewOrder(newOrder: OrderTicket): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/order-ticket`, newOrder);
  }

  getAllTickets(ticket_status_id = null, date_from = null, date_to = null) {
    let url = '';

    if (!ticket_status_id && !date_from && !date_to) {
      url = `/order-tickets`;
    } else if (ticket_status_id && !date_from && !date_to) {
      url = `/order-tickets/${ticket_status_id}`;
    } else if (!ticket_status_id && date_from && date_to) {
      url = `/order-tickets/${date_from}/${date_to}`;
    } else {
      url = `/order-tickets/${ticket_status_id}/${date_from}/${date_to}`;
    }

    return this.http.get<any>(`${environment.apiUrl}${url}`, {});
  }

  getAllEmployeeTickets(employeeId, officeId = null, date_from = null, date_to = null) {
    let url = '';

    if (!officeId && !date_from && !date_to) {
      url = `/order-tickets-by-employee/${employeeId}`;
    } else if (officeId && !date_from && !date_to) {
      const origin_office_id = officeId;
      url = `/order-tickets-by-employee/${employeeId}/${origin_office_id}`;
    } else if (!officeId && date_from && date_to) {
      url = `/order-tickets-by-employee/${employeeId}/${date_from}/${date_to}`;
    } else {
      const origin_office_id = officeId;
      url = `/order-tickets-by-employee/${employeeId}/${origin_office_id}/${date_from}/${date_to}`;
    }

    return this.http.get<any>(`${environment.apiUrl}${url}`, {});
  }

  getAllManagerTickets(officeId, origin_office_id = null, date_from = null, date_to = null) {
    let url = '';

    if (!origin_office_id && !date_from && !date_to) {
      url = `/order-tickets-by-office/${officeId}`;
    } else if (origin_office_id && !date_from && !date_to) {
      url = `/order-tickets-by-office/${officeId}/${origin_office_id}`;
    } else if (!origin_office_id && date_from && date_to) {
      url = `/order-tickets-by-office/${officeId}/${date_from}/${date_to}`;
    } else {
      url = `/order-tickets-by-office/${officeId}/${origin_office_id}/${date_from}/${date_to}`;
    }

    return this.http.get<any>(`${environment.apiUrl}${url}`, {});
  }

  getAllDealerTickets(employeeId, officeId = null, date_from = null, date_to = null) {
    let url = '';

    if (!officeId && !date_from && !date_to) {
      url = `/order-tickets-by-dealer/${employeeId}`;
    } else if (officeId && !date_from && !date_to) {
      url = `/order-tickets-by-dealer/${employeeId}/${officeId}`;
    } else if (!officeId && date_from && date_to) {
      url = `/order-tickets-by-dealer/${employeeId}/${date_from}/${date_to}`;
    } else {
      url = `/order-tickets-by-dealer/${employeeId}/${officeId}/${date_from}/${date_to}`;
    }

    return this.http.get<any>(`${environment.apiUrl}${url}`, {});
  }

  getOrderTicketData(id): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/order-ticket/${id}`, {});
  }

  modifyOrder(orderId: any, orderData: ModifyTicket): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/order-ticket/${orderId}`, orderData);
  }

  getRejectedReasons() {
    return this.http.get<any>(`${environment.apiUrl}/order-ticket/rejected-reasons`, {});
  }

  getCancelledReasons() {
    return this.http.get<any>(`${environment.apiUrl}/order-ticket/cancelled-reasons`, {});
  }
}