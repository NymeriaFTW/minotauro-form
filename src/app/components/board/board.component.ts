import { Component, Input } from "@angular/core";
import { Sala } from "../../models/sala";
import { SalaService } from "../../services/sala.service";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent {
  size: number;
  @Input() set tamanho(value: number) {
    if (value) {
      this.size = value;
      this.start()
    }
  }

  salaAtual: Sala;

  constructor(private salaService: SalaService) {}

  start() {
    this.salaService.comecarJogo(this.size).subscribe((res) => {
      this.salaAtual = res;
    });
  }

  irParaProximaPorta(portaEscolhida: string) {
    this.salaService
      .proximaSala(this.salaAtual.id, portaEscolhida, this.salaAtual.tamanho)
      .subscribe((res) => {
        this.salaAtual = res;
      });
  }
}
