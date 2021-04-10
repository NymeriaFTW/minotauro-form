import { Component, Input, OnInit } from '@angular/core';
import { Sala } from '../../models/sala';

@Component({
  selector: 'app-visao-norte',
  templateUrl: './visao-norte.component.html',
  styleUrls: ['./visao-norte.component.scss']
})
export class VisaoNorteComponent implements OnInit {

  sala: Sala;
  hasSaidaNorte = false;
  hasSaidaOeste = false;
  hasSaidaLeste = false;

  @Input() set salaAtual(value: Sala) {
    this.sala = value;
    this.hasSaidaNorte = value.saidas.includes('N');
    this.hasSaidaOeste = value.saidas.includes('O');
    this.hasSaidaLeste = value.saidas.includes('L');
  }

  constructor() { }

  ngOnInit() {
  }

}
