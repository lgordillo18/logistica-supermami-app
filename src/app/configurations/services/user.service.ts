import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUser } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient) {
  }

  setUser(newUser: NewUser): Observable<any>{
    return this.http.post<any>('urlPost', {});
  }

  // Example
  getUsers(): Observable<any> {
    return this.http.get<any>(`https://supermami-logistica-service.herokuapp.com/api/logistica-service/users`, { });
  }
}
