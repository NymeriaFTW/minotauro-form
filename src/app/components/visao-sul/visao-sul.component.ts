import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Sala } from "../../models/sala";

@Component({
  selector: "app-visao-sul",
  templateUrl: "./visao-sul.component.html",
  styleUrls: ["./visao-sul.component.scss"],
})
export class VisaoSulComponent {
  sala: Sala;
  hasSaidaOeste = false;
  hasSaidaSul = false;
  hasSaidaLeste = false;

  @Input() set salaAtual(value: Sala) {
    if (value) {
      this.sala = value;
      this.hasSaidaSul = value.saidas.includes("S");
      this.hasSaidaLeste = value.saidas.includes("L");
      this.hasSaidaOeste = value.saidas.includes("O");
    }
  }

  @Output() portaEscolhida = new EventEmitter<any>();

  constructor() {}
}
