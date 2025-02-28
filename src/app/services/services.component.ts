import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://overflowing-radiance-production.up.railway.app/auth';

  constructor(private http: HttpClient) {}

  // Registro de usuario (solo email y password)
  register(userData: { username: string, email: string; password: string }): Observable<any> {
    console.log('datooooooos:', userData);
    return this.http.post(`${this.apiUrl}/register`, userData);

  }

  // Login de usuario
  login(credentials: { email: string; password: string }): Observable<void> {
    return this.http.post<void>('https://overflowing-radiance-production.up.railway.app/auth/login', credentials);  }

}