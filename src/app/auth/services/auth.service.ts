import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  validateUser(user: Credentials): Observable<any> {
    const params:any = {
      username: encodeURIComponent(user.username),
      password: encodeURIComponent(user.password)
    }

    return this.http.get<any>(`${environment.apiUrl}/valitate-user.json`, { params });
  }
}