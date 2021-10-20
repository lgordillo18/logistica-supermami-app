import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUser } from '../../models/login';
import { JwtDTO } from '../../models/jwtDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = '';

  constructor(private httpClient: HttpClient) { }


  public login(loginUser: LoginUser): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUser);
  }
}

