import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Register } from 'src/app/models/register.model';
import { BibliotechService } from 'src/app/service/bibliotech.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private service: BibliotechService, private route: ActivatedRoute) {}
  user!: Register
  navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ];

  isOpen = true;
  hasLogin = false;

  ngOnInit(): void {
    this.user = this.service.user
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  isSelect(value: string): boolean {
    if(this.route.snapshot.url[0].path === value) {
      return true
    }
    return false
  }
}
