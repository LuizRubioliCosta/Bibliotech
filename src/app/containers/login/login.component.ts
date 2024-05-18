import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BibliotechService } from 'src/app/service/bibliotech.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private service: BibliotechService, private fb: FormBuilder, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(){
    this.service.login(this.loginForm.value).subscribe( login => {
      const jwt = login.cookie.value
      if(!!jwt) {
      this.service.jwtToken = jwt
      this.cookieService.set('user', jwt,);
      this.router.navigate(['collection'])
      console.log('jwt' + this.service.jwtToken )
    }})

    ///RETIRAR O NAVIGATE ABAIXO QUANDO BACK TIVER PRONTO
    //this.router.navigate(['books'])
  }


  books(): void {
    this.service.getBooks().subscribe()
  }
}
