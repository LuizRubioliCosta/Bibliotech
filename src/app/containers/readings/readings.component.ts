import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Book } from 'src/app/models/book.model';
import { Collection } from 'src/app/models/collection.model';
import { Status } from 'src/app/models/status.enum';
import { BibliotechService } from 'src/app/service/bibliotech.service';
import { mockedBook } from 'src/app/utils/test.utils';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css'],
})
export class ReadingsComponent implements OnInit {
  status = Object.values(Status);
  booksList: Book[] = []
  booksFiltered: Book[] = []
  collections!: Collection[]
  constructor(private service: BibliotechService) {}

  ngOnInit() {
    initFlowbite()

    this.booksList = this.service.bookList
    this.collections = this.service.collectionList
  }
}
