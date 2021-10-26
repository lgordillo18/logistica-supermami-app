import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUser } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient) {
  }

  setUser(newUser: NewUser): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/user`, {});
  }


  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users`, {});
  }
}
