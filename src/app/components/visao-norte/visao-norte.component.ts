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

  @Output() portaEscolhida = new EventEmitter<any>();
  constructor() {}

}
