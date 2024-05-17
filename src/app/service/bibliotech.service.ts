import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class BibliotechService {
  private apiUrl = 'http://ec2-34-228-77-0.compute-1.amazonaws.com/';
  jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjE2In0sImlhdCI6MTcxNTk4MzM1OSwiZXhwIjoxNzE4NTc1MzU5fQ.fQRZXeCflW5_yup0913_5y1bsr8GO-unqZZzZJ28KcQ';

  constructor(private httpClient: HttpClient) { }

  register(register: Register): Observable<any> {
    return this.httpClient.post<any>(
      this.apiUrl + 'auth/register',
      {
        password: register.password,
        email: register.email,
        firstName: register.firstName,
        lastName: register.lastName,
      })
    }

    login(login: Login): Observable<any> {
    return this.httpClient.post<any>(
      this.apiUrl + 'auth/login',
      {
        password: login.password,
        email: login.email,
      })
    }

    getBooks(): Observable<any> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.jwtToken}`
      });

      return this.httpClient.get<any>(this.apiUrl + 'books', { headers });
    }
  }
