import { Component, Input, OnInit } from "@angular/core";
import { Sala } from "../../models/sala";

@Component({
  selector: "app-visao-leste",
  templateUrl: "./visao-leste.component.html",
  styleUrls: ["./visao-leste.component.scss"],
})
export class VisaoLesteComponent implements OnInit {
  sala: Sala;
  hasSaidaNorte = false;
  hasSaidaSul = false;
  hasSaidaLeste = false;

  @Input() set salaAtual(value: Sala) {
    this.sala = value;
    this.hasSaidaLeste = value.saidas.includes('L');
    this.hasSaidaNorte = value.saidas.includes('N');
    this.hasSaidaSul = value.saidas.includes('S');
  }

  constructor() {}

  ngOnInit() {}
}
