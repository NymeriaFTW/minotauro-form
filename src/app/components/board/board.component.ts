import { Component } from "@angular/core";
import { Sala } from "../../models/sala";
import { SalaService } from "../../services/sala.service";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent {
  salaAtual: Sala;

  constructor(private salaService: SalaService) {
    this.salaService.comecarJogo(4).subscribe((res) => {
      this.salaAtual = res;
    });
  }

  irParaProximaPorta(portaEscolhida: string) {
    console.log("porta escolhida");

    this.salaService
      .proximaSala(this.salaAtual.id, portaEscolhida, this.salaAtual.tamanho)
      .subscribe((res) => {
        this.salaAtual = res;
      });
  }
}
