import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Book } from 'src/app/models/book.model';
import { BibliotechService } from 'src/app/service/bibliotech.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookItem!: Book

  constructor(private service: BibliotechService, private router: Router) {}

  ngOnInit(): void {
    initFlowbite();
    this.bookItem = this.service.bookItem
  }


  goToEdit() {
    this.service.bookItem = this.bookItem
    this.router.navigate(['/book-edition', 'edit'])
  }
}
