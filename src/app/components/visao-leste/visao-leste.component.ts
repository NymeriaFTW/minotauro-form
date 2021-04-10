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

  @Output() portaEscolhida = new EventEmitter<string>();

  constructor() {}
}
