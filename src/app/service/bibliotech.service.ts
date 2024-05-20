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
  bookList: Book[] = [mockedBook]
  collectionItem: Collection = mockedCollection;
  collectionList: Collection[] = [mockedCollection]
  user: Register = mockedUser;
  userId!: string;

  private apiUrl = 'http://ec2-34-201-111-58.compute-1.amazonaws.com/';
  jwtToken = '';

  fakeUserId = 21
  fakeJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjIxIn0sImlhdCI6MTcxNjE2MTc0NCwiZXhwIjoxNzE4NzUzNzQ0fQ.mF4AsRGtLgZZkzTUy6JUO-rz11ismG_c4j9xgKAfF-A'

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
      Authorization: `${this.fakeJWT}`,
    });

    return this.httpClient.put<any>(
      this.apiUrl + 'book/',
      {
        id: book.id,
        title: book.title,
        authors: book.authors,
        publishedYear: book.publishedYear,
        description: book.description,
        edition: book.edition,
        isbn: book.isbn,
        pageCount: book.pageCount,
        categories: book.categories,
        read: book.read,
        collection: book.collection,
        userId: this.fakeUserId
      },
      { headers }
    );
  }

  saveBook(book: Book): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this.fakeJWT}`,
    });

    return this.httpClient.post<any>(
      this.apiUrl + 'book/',
      {
        title: book.title,
        authors: book.authors,
        publishedYear: book.publishedYear,
        description: book.description,
        edition: book.edition,
        isbn: book.isbn,
        pageCount: book.pageCount,
        categories: book.categories,
        read: book.read,
        collection: book.collection,
        userId: this.fakeUserId
      },
      { headers }
    )
  }

  removeBook(bookId: number | undefined): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this.fakeJWT}`,
    });

    const body = {
      userId: this.fakeUserId,
      id: bookId
    };

    return this.httpClient.delete<any>(
      this.apiUrl + 'book/',
      { headers, body }
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

  updateCollection(collection: Collection): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this.fakeJWT}`,
    });

    return this.httpClient.put<any>(
      this.apiUrl + 'collection/',
      {
        id: collection.id,
        title: collection.title,
        description: collection.description,
        userId: this.fakeUserId
      },
      { headers }
    );
  }

  saveCollection(collection: Collection): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this.fakeJWT}`,
    });

    return this.httpClient.post<any>(
      this.apiUrl + 'collection/',
      {
        title: collection.title,
        description: collection.description,
        userId: this.fakeUserId
      },
      { headers }
    );
  }

  removeCollection(collectionId: number | undefined): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this.fakeJWT}`,
    });

    const body = {
      userId: this.fakeUserId,
      id: collectionId
    };

    return this.httpClient.delete<any>(
      this.apiUrl + 'collection/',
      { headers, body }
    );
  }


  // user
  updateUser(register: Register): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${this.fakeJWT}`,
    });


    return this.httpClient.put<any>(
      this.apiUrl + 'user/',
      {
        password: register.password,
        email: register.email,
        firstName: register.firstName,
        lastName: register.lastName,
        userId: this.fakeUserId
      },
      { headers }
    );
  }


}
