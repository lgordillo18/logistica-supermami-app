import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewVehicle } from 'src/app/models/vehicle';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  constructor(
    private http: HttpClient) {
  }

  newVehicle(newVehicle: NewVehicle): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/vehicle`, newVehicle);
    console.log(newVehicle);
  }

  getVehicle(vehicleId): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/vehicle/${vehicleId}`, {});
  }

  getVehicles(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/vehicles`, {});
  }

  getDealers(): Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/users-by-rol/4`,{}); //rol 4 son los repartidores
  }

  getStatus(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/vehicle/status`, { });
  }

  deleteVehicle(vehicleId): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/vehicle/delete/${vehicleId}`, { id: vehicleId, deleted: true });
  }
}

