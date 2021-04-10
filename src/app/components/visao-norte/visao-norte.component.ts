import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Sala } from "../../models/sala";

@Component({
  selector: "app-visao-norte",
  templateUrl: "./visao-norte.component.html",
  styleUrls: ["./visao-norte.component.scss"],
})
export class VisaoNorteComponent {
  sala: Sala;
  hasSaidaNorte = false;
  hasSaidaOeste = false;
  hasSaidaLeste = false;

  @Input() set salaAtual(value: Sala) {
    if (value) {
      this.sala = value;
      this.hasSaidaNorte = value.saidas.includes("N");
      this.hasSaidaOeste = value.saidas.includes("O");
      this.hasSaidaLeste = value.saidas.includes("L");
    }
  }

  @Input() qtdeVisualizacaoMapa: number;

  @Output() portaEscolhida = new EventEmitter<any>();

  @Output() qtdeVisualizacaoMapaExcedida = new EventEmitter<void>();

  abrirMapa() {
    if (this.qtdeVisualizacaoMapa >= this.sala.tamanho - 2) {
      this.qtdeVisualizacaoMapaExcedida.emit();

      return;
    }

    this.qtdeVisualizacaoMapa += 1;
    console.log("aqui " + this.qtdeVisualizacaoMapa);
    //abrir o mapa
  }
}
