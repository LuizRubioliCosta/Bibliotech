import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';
import { Book } from '../models/book.model';
import { Collection } from '../models/collection.model';
import { mockedBook, mockedCollection, mockedUser } from '../utils/test.utils';

@Injectable({
  providedIn: 'root',
})
export class BibliotechService {
  bookItem: Book = mockedBook;
  bookList!: Book[];
  collectionItem: Collection = mockedCollection;
  collectionList!: Collection[];
  user: Register = mockedUser;
  userId!: string;

  private apiUrl = 'http://ec2-34-227-221-24.compute-1.amazonaws.com/';
  jwtToken = '';

  constructor(private httpClient: HttpClient) {}
// auth
  register(register: Register): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + 'auth/register', {
      password: register.password,
      email: register.email,
      firstName: register.firstName,
      lastName: register.lastName,
    });
  }

  login(login: Login): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + 'auth/login', {
      password: login.password,
      email: login.email,
    });
  }

  // books
  getBooks(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this.jwtToken}`,
    });

    const params = new HttpParams().set('userId', this.userId);

    return this.httpClient.get<any>(this.apiUrl + 'book/', { headers, params });
  }

  updateBook(book: Book): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this.jwtToken}`,
    });
    const params = new HttpParams().set('userId', this.userId);


    return this.httpClient.put<any>(
      this.apiUrl + 'book/',
      {
        book,
      },
      { headers, params }
    );
  }

  saveBook(book: Book): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this.jwtToken}`,
    });
    const params = new HttpParams().set('userId', this.userId);

    return this.httpClient.post<any>(
      this.apiUrl + 'book/',
      {
        book,
      },
      { headers, params }
    );
  }

  // collections
  getCollections(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this.jwtToken}`,
    });
    const params = new HttpParams().set('userId', this.userId);


    return this.httpClient.get<any>(this.apiUrl + 'collection/', { headers, params });
  }


  // user
  updateUser(register: Register): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this.jwtToken}`,
    });
    const params = new HttpParams().set('userId', this.userId);


    return this.httpClient.put<any>(
      this.apiUrl + 'user/',
      {
        password: register.password,
        email: register.email,
        firstName: register.firstName,
        lastName: register.lastName,
      },
      { headers, params }
    );
  }


}
