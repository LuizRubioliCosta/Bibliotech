import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BibliotechService } from 'src/app/service/bibliotech.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  optParam!: string;

  constructor(private service: BibliotechService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeForm();

    this.route.params.subscribe(params => {
      this.optParam = params['opt'];
    });
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register(){
    this.service.register(this.registerForm.value).subscribe( register => {
      console.log('register' + register)})
  }
}
