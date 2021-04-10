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

  qtdeVisualizacaoMapa: number;

  @Input() set tamanho(value: number) {
    if (value) {
      this.size = value;
      this.start();
    }
  }

  salaAtual: Sala;

  constructor(private salaService: SalaService) {}

  start() {
    this.qtdeVisualizacaoMapa = 0;
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

        this.mensagemVitoria();

        this.mensagemDerrota();


        if (this.salaAtual.nome === "Sala 7" && !this.salaAtual.chegada) {
          this.logs.push({
            mensagem: `Você chegou na Sala 7, lamentamos, mas você encontrou a besta. DERROTA!;`,
          });
        }

        if (this.salaAtual.chegada) {
          this.logs.push({
            mensagem: `PARABÉNS, você chegou ao final do labirinto, a ${this.salaAtual.nome} garante a sua liberdade!`,
          });
        }

        if (this.salaAtual.nome === "Sala 5" && !this.salaAtual.chegada) {
          this.logs.push({
            mensagem: `Você está chegando no lado obscuro do labirinto! Fuja, a besta está perto!`,
          });
        }

        if (this.salaAtual.nome === "Sala 6" && !this.salaAtual.chegada) {
          this.logs.push({
            mensagem: `Você chegou a Sala 6, o cheiro vindo dos infelizes que foram mortos pelo minotauro é quase insuportável,
                     mas agora você precisa seguir para sair dessa situação.`,
          });
        }

        if (this.salaAtual.nome === "Sala 4" && !this.salaAtual.chegada) {
          this.logs.push({
            mensagem: `Você pode sentir o cheiro do minotauro e precisa correr,
                        uma decisão precisa ser tomada.`,
          });
        }

        if (this.salaAtual.nome === "Sala 11" && !this.salaAtual.chegada) {
          this.logs.push({
            mensagem: `Conseguiu ouvir? A Besta está próxima. Quer desistir? Ou vai Conseguir Sair.`,
          });
        }

        if (this.salaAtual.nome === "Sala 3" && !this.salaAtual.chegada) {
          this.logs.push({
            mensagem: `Uma leve brisa pode ser sentida a saída deve estar próxima`,
          });
        }

        if (this.salaAtual.nome === "Sala 12" && !this.salaAtual.chegada) {
          this.logs.push({
            mensagem: `Que estranho está decisão?! Continue se tiver coragem`,
          });
        }

        if (this.salaAtual.nome === "Sala 20" && !this.salaAtual.chegada) {
          this.logs.push({
            mensagem: `Obaa! Um pouco de água fresca!`,
          });
        }

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

  addMensagemMapa() {
    this.logs.push({
      mensagem: `Maps :/`,
    });
  }
}
