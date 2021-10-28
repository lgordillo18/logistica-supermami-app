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

  newUser(newUser: NewUser): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/user`, newUser);
  }

  getUser(userId): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/user/${userId}`, {});
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users`, {});
  }

  getRoles(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/user/roles`, { });
  }

  getAreas(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/areas`, { });
  }

  deleteUser(userId): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/user/delete/${userId}`, { id: userId, deleted: true });
  }
}
