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
  logs: { mensagem: string }[] = [];

  primeiraRodada = true;

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
      this.logs.push({
        mensagem: `${mensagens[0].mensagem}. Você está na ${this.salaAtual.nome}`,
      });
    });
  }

  irParaProximaPorta(portaEscolhida: string) {
    this.salaService
      .proximaSala(this.salaAtual.id, portaEscolhida, this.salaAtual.tamanho)
      .subscribe((res) => {
        this.salaAtual = res;

        this.addSalaAtual();

        this.mensagemDerrota();

        this.mensagemVitoria();

        this.primeiraRodada = false;
      });
  }

  private mensagemDerrota() {
    if (
      !this.primeiraRodada &&
      this.salaAtual.nome === "Sala 7" &&
      !this.salaAtual.chegada
    ) {
      this.logs.push({
        mensagem: `Você chegou na Sala 7, lamentamos, mas você encontrou a besta. DERROTA!;`,
      });
    }
  }

  private mensagemVitoria() {
    if (!this.primeiraRodada && this.salaAtual.chegada) {
      this.logs.push({
        mensagem: `PARABÉNS, você chegou ao final do labirinto, a ${this.salaAtual.nome} garante a sua liberdade!`,
      });
    }
  }

  private addSalaAtual() {
    this.logs.push({
      mensagem: `${this.salaAtual.nome}`,
    });
  }
}
