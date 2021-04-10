import { Component, Input, OnInit } from "@angular/core";
import { Sala } from "../../models/sala";

@Component({
  selector: "app-visao-sul",
  templateUrl: "./visao-sul.component.html",
  styleUrls: ["./visao-sul.component.scss"],
})
export class VisaoSulComponent implements OnInit {
  sala: Sala;
  hasSaidaNorte = false;
  hasSaidaSul = false;
  hasSaidaLeste = false;

  @Input() set salaAtual(value: Sala) {
    this.sala = value;
    this.hasSaidaSul = value.saidas.includes("S");
    this.hasSaidaLeste = value.saidas.includes("L");
    this.hasSaidaNorte = value.saidas.includes("N");
  }

  constructor() {}

  ngOnInit() {}
}
