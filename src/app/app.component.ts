import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Sala } from "./models/sala";
import { SalaService } from "./services/sala.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  salaAtual: Sala;

  constructor(private router: Router, private salaService: SalaService) {
    this.salaService.comecarJogo().subscribe((res) => {
      this.salaAtual = res;
    });
  }
}
