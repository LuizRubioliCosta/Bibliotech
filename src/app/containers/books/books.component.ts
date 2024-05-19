import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Book } from 'src/app/models/book.model';
import { Collection } from 'src/app/models/collection.model';
import { BibliotechService } from 'src/app/service/bibliotech.service';
import { mockedBook } from 'src/app/utils/test.utils';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private service: BibliotechService, private router: Router) {}

  books: Book[] = []
  collections: Collection[] = []

  ngOnInit(): void {
    initFlowbite();

    this.books = this.service.bookList
    this.collections = this.service.collectionList
  }


  goToDetails(value :Book) {
    this.service.bookItem = value
    this.router.navigate(['book-details'])
  }
}
