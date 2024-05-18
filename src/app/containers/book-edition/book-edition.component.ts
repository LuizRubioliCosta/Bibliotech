import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-edition',
  templateUrl: './book-edition.component.html',
  styleUrls: ['./book-edition.component.css']
})
export class BookEditionComponent implements OnInit {
  constructor() {}

  items = ['drama', 'romance', 'romance'];
  isEdit = false;
  ngOnInit() {}

}
