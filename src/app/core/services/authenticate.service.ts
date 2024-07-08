import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISignup } from '../interfaces/ISignup';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  apiUrl: string = "http://localhost:3000/api/user/"
  constructor(private http: HttpClient) { }

  signup(userData: ISignup) {
    return this.http.post<any>(`${this.apiUrl}signup`, userData)
  }
  login(userData: ISignup) {
    return this.http.post<any>(`${this.apiUrl}login`, userData)
  }
}
