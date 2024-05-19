import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Book } from 'src/app/models/book.model';
import { Collection } from 'src/app/models/collection.model';
import { BibliotechService } from 'src/app/service/bibliotech.service';
import { mockedCollection } from 'src/app/utils/test.utils';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  collections: Collection[] = [];
  books: Book[] = []
  optParam!: string;

  constructor(private service: BibliotechService, private router: Router) { }

  ngOnInit(): void {
    initFlowbite();

    this.books = this.service.bookList
    this.collections = this.service.collectionList
  }

  goToDetails(value :Collection) {
    this.service.collectionItem = value
    this.router.navigate(['collection-item'])
  }

  onEdit(value: Collection) {
    this.service.collectionItem = value
    this.router.navigate(['new-collection', 'edit'])
  }
}
