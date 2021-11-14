import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(
    private http: HttpClient) {
  }

  getReport1(officeId = null): Observable<any> {
    const url = officeId ? `/report-top-10/${officeId}` : `/report-top-10`;
    return this.http.get<any>(`${environment.apiUrl}${url}`, {});
  }

  getReport2(officeId = null, date_from = null, date_to = null): Observable<any> {
    let url = '';

    if (!officeId && !date_from && !date_to) {
      url = `/report-orders-delivered`;
    } else if (officeId && !date_from && !date_to) {
      url = `/report-orders-delivered/${officeId}`;
    } else if (!officeId && date_from && date_to) {
      url = `/report-orders-delivered/${date_from}/${date_to}`;
    } else {
      url = `/report-orders-delivered/${officeId}/${date_from}/${date_to}`;
    }

    return this.http.get<any>(`${environment.apiUrl}${url}`, {});
  }

  getReport3(officeId = null, date_from = null, date_to = null): Observable<any> {
    let url = '';

    if (!officeId && !date_from && !date_to) {
      url = `/report-ticket-status-by-office`;
    } else if (officeId && !date_from && !date_to) {
      url = `/report-ticket-status-by-office/${officeId}`;
    } else if (!officeId && date_from && date_to) {
      url = `/report-ticket-status-by-office/${date_from}/${date_to}`;
    } else {
      url = `/report-ticket-status-by-office/${officeId}/${date_from}/${date_to}`;
    }

    return this.http.get<any>(`${environment.apiUrl}${url}`, {});
  }
}