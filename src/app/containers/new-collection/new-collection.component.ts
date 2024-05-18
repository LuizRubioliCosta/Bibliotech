import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.css'],
})
export class NewCollectionComponent implements OnInit {
  items = [
    {
      title: 'The Lord of the Rings',
      authors: ['J. R. R. Tolkien', 'test'],
    },
    {
      title: 'The Lord of the Rings',
      authors: ['J. R. R. Tolkien', 'test'],
    },
  ];

  isEdit = true;

  constructor() {}

  ngOnInit() {}
}
