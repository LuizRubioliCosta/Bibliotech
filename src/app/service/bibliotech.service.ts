import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotechService {
  private apiUrl = 'http://ec2-34-228-77-0.compute-1.amazonaws.com/';
  jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjE2In0sImlhdCI6MTcxNTk4MzM1OSwiZXhwIjoxNzE4NTc1MzU5fQ.fQRZXeCflW5_yup0913_5y1bsr8GO-unqZZzZJ28KcQ';

  constructor(private httpClient: HttpClient) { }

  register(): Observable<any> {
    return this.httpClient.post<any>(
      this.apiUrl + 'auth/register',
      {
        password: 'testing13',
        email: 'teste13@teste.com',
        firstName: 'teste13',
        lastName: 'teste13',
      })
    }

    login(): Observable<any> {
    return this.httpClient.post<any>(
      this.apiUrl + 'auth/login',
      {
        password: 'testing13',
        email: 'teste13@teste.com',
      })
    }

    getBooks(): Observable<any> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.jwtToken}`
      });

      return this.httpClient.get<any>(this.apiUrl + 'books', { headers });
    }
  }
