import { Component } from '@angular/core';
import { Sala } from '../../models/sala';
import { SalaService } from '../../services/sala.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  salaAtual: Sala;

  constructor(private salaService: SalaService) {
    this.salaService.comecarJogo().subscribe((res) => {
      this.salaAtual = res;
    });
  }


  doSomething() {
    console.log('porta escolhida')
  }
}
