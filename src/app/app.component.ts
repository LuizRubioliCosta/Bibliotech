import { Component, OnInit } from '@angular/core';
import { BibliotechService } from './service/bibliotech.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private service:BibliotechService) {}

  title = 'bibliotech';

  ngOnInit(): void {
    initFlowbite();
  }
}
