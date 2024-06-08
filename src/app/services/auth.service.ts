import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  Register = (data: IUser): Observable<any> => {
    return this.http.post(this.API_URL + '/register', data);
  };

  Login = (data: IUser): Observable<any> => {
    return this.http.post(this.API_URL + '/login', data);
  };
}
