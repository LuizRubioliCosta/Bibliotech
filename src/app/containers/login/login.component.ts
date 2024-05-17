import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BibliotechService } from 'src/app/service/bibliotech.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: BibliotechService) { }

  ngOnInit(): void {
  }

  login(){
    this.service.login().subscribe( login => {
      console.log('login' + login)})
  }


  books(): void {
    this.service.getBooks().subscribe()
  }
}
