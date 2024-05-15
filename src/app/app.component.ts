import { Component } from '@angular/core';
import { BibliotechService } from './service/bibliotech.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:BibliotechService) {}

  title = 'bibliotech';

  test(){
    this.service.get().subscribe()
  }
}
