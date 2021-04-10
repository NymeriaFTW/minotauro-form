import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tamanho: number;

  constructor() {}

  voltarMenu() {
    this.tamanho = null;
  }
}
