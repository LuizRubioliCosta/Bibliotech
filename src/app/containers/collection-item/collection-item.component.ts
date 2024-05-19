import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Book } from 'src/app/models/book.model';
import { Collection } from 'src/app/models/collection.model';
import { BibliotechService } from 'src/app/service/bibliotech.service';
import { mockedBook, mockedCollection } from 'src/app/utils/test.utils';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.css'],
})
export class CollectionItemComponent implements OnInit {
  constructor(private service: BibliotechService, private router: Router) { }

  collectionItem: Collection = mockedCollection
  books: Book[] = [mockedBook];

  ngOnInit() {
    initFlowbite();
  }

  goToDetails(value :Book) {
    this.service.bookItem = value
    this.router.navigate(['book-details'])
  }

  onEdit() {
    this.service.collectionItem = this.collectionItem
    this.router.navigate(['new-collection', 'edit'])
  }
}
