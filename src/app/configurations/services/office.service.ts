import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NewOffice } from 'src/app/configurations/models/office';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OfficeService {
  constructor(
    private http: HttpClient) {
  }

  newOffice(newOffice: NewOffice): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/office`, {});
  }

  getOffice(officeId): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/office/${officeId}`, {});
  }

  getOffices(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/offices`, {});
  }

  deleteOffice(officeId): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/office/delete/${officeId}`, { id: officeId, deleted: true });
  }
}
