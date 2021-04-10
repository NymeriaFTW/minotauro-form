import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaisService } from './services/pais.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private paisService: PaisService) {
    this.paisService.getCandidatos().subscribe(res => console.log(res));
  }
}
