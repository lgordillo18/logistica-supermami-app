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

  setOffice(newOffice: NewOffice): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/office`, {});
  }
  
  getOffices(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/offices`, {});
  }
}