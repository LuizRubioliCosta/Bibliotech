import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() {}

  items = ['a', 'b', 'd'];

  ngOnInit(): void {
    initFlowbite();
  }
}
