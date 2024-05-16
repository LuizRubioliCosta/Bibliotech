import { Component, OnInit } from '@angular/core';
import { BibliotechService } from 'src/app/service/bibliotech.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: BibliotechService) { }

  ngOnInit(): void {
  }

  test(){
    this.service.get().subscribe()
  }
}
