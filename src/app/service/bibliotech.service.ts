import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotechService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<any> {
    return this.httpClient.post<any>(
      'ec2-54-91-218-113.compute-1.amazonaws.com/auth/register',
      {
        password: 'testing',
        email: 'teste@teste.com',
        firstname: 'teste',
        lastname: 'teste',
      },
    );
  }}
