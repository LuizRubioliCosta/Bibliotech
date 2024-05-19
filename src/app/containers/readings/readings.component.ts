import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Book } from 'src/app/models/book.model';
import { Collection } from 'src/app/models/collection.model';
import { Status } from 'src/app/models/status.enum';
import { mockedBook } from 'src/app/utils/test.utils';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css'],
})
export class ReadingsComponent implements OnInit {
  status = Object.values(Status);
  books: Book[] = []
  collections!: Collection[]
  constructor() {}

  ngOnInit() {
    initFlowbite()
  }
}
