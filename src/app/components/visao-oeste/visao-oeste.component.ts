import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Sala } from "../../models/sala";

@Component({
  selector: "app-visao-oeste",
  templateUrl: "./visao-oeste.component.html",
  styleUrls: ["./visao-oeste.component.scss"],
})
export class VisaoOesteComponent {
  sala: Sala;
  hasSaidaOeste = false;
  hasSaidaSul = false;
  hasSaidaNorte = false;

  @Input() set salaAtual(value: Sala) {
    if (value) {
      this.sala = value;
      this.hasSaidaOeste = value.saidas.includes("O");
      this.hasSaidaSul = value.saidas.includes("S");
      this.hasSaidaNorte = value.saidas.includes("N");
    }
  }

  @Input() qtdeVisualizacaoMapa

  @Output() portaEscolhida = new EventEmitter<any>();
  constructor() {}

  abrirMapa() {
    if (this.qtdeVisualizacaoMapa >= this.sala.tamanho-2) {
      return;
    }
    this.qtdeVisualizacaoMapa+=1;
    //abrir o mapa
  }
}
