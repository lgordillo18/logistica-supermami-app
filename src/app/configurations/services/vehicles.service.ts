import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewVehicle } from 'src/app/configurations/models/vehicle';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {
    constructor(
        private http: HttpClient) {
    }

    setVehicles(newVehicle: NewVehicle): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/vehicle`, {});
    }


    getVehicles(): Observable<any> {
        return this.http.get<any>(`${environment.apiUrl}/vehicle`, {});
    }
}
