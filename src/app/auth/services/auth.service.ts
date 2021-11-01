import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = '';

  constructor(private http: HttpClient) { }


  // public login(loginUser: LoginUser): Observable<JwtDTO> {
  //   return this.http.post<JwtDTO>(this.authURL + 'login', loginUser);
  // }
}

