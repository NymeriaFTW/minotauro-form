import { Component, Input, OnInit } from '@angular/core';
import { Sala } from '../../models/sala';

@Component({
  selector: 'app-visao-oeste',
  templateUrl: './visao-oeste.component.html',
  styleUrls: ['./visao-oeste.component.scss']
})
export class VisaoOesteComponent implements OnInit {

  sala: Sala;
  hasSaidaOeste = false;
  hasSaidaSul = false;
  hasSaidaLeste = false;

  @Input() set salaAtual(value: Sala) {
    this.sala = value;
    this.hasSaidaOeste = value.saidas.includes('O');
    this.hasSaidaSul = value.saidas.includes('S');
    this.hasSaidaLeste = value.saidas.includes('L');
  }

  constructor() { }

  ngOnInit() {
  }

}
