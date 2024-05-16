import { Component, OnInit } from '@angular/core';
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

  test(){
    this.service.get().subscribe()
  }
}
