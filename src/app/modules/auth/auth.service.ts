import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenProfile } from './token';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token!: string;

  constructor(private http : HttpClient) {}

  login(profile: User){
    return this.http.post<TokenProfile>('http://localhost:3010/api/login',profile)
  }

  getToken(): string {
    return localStorage.getItem('tokenJWT') ?? '';
  }
}
