import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  items = ['a', 'b', 'd', 'e'];

  constructor() {}

  ngOnInit() {}
}
