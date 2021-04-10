import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Sala } from "../../models/sala";

@Component({
  selector: "app-visao-leste",
  templateUrl: "./visao-leste.component.html",
  styleUrls: ["./visao-leste.component.scss"],
})
export class VisaoLesteComponent {
  sala: Sala;
  hasSaidaNorte = false;
  hasSaidaSul = false;
  hasSaidaLeste = false;

  @Input() set salaAtual(value: Sala) {
    if (value) {
      this.sala = value;
      this.hasSaidaLeste = value.saidas.includes("L");
      this.hasSaidaNorte = value.saidas.includes("N");
      this.hasSaidaSul = value.saidas.includes("S");
    }
  }

  @Input() qtdeVisualizacaoMapa

  @Output() portaEscolhida = new EventEmitter<string>();

  constructor() {}

  abrirMapa() {
    if (this.qtdeVisualizacaoMapa >= this.sala.tamanho-2) {
      return;
    }
    this.qtdeVisualizacaoMapa+=1;
    //abrir o mapa
  }
}
