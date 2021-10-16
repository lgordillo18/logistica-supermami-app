import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient) {
  }

  // Example
  getUsers(): Observable<any> {
    return this.http.get<any>(`https://supermami-logistica-service.herokuapp.com/api/logistica-service/users`, { });
  }
}
