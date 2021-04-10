import { Component, Input } from "@angular/core";
import { Sala } from "../../models/sala";
import { SalaService } from "../../services/sala.service";
import { mensagens } from "./mensagens";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent {
  size: number;
  logs: any[] = [];

  @Input() set tamanho(value: number) {
    if (value) {
      this.size = value;
      this.start();
    }
  }

  salaAtual: Sala;

  constructor(private salaService: SalaService) {}

  start() {
    this.salaService.comecarJogo(this.size).subscribe((res) => {
      this.salaAtual = res;
      this.logs.push(mensagens[0]);
    });
  }

  irParaProximaPorta(portaEscolhida: string) {
    this.salaService
      .proximaSala(this.salaAtual.id, portaEscolhida, this.salaAtual.tamanho)
      .subscribe((res) => {
        this.salaAtual = res;
        if (this.salaAtual.nome === 'Sala 7' && !this.salaAtual.chegada) {
          this.logs.push({
            mensagem: `Você chegou na Sala 7, lamentamos, mas você encontrou a besta. DERROTA!;`,
          });
        }

        if (this.salaAtual.chegada) {
          this.logs.push({
            mensagem: `PARABÉNS, você chegou ao final do labirinto, a ${this.salaAtual.nome} garante a sua liberdade!`,
          });
        }
      });
  }
}
