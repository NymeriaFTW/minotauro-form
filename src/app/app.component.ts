import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  tamanho: number;

  showBtnVitoria = false;

  constructor() {}

  voltarMenu() {
    this.showBtnVitoria = false;
    this.tamanho = null;
  }
}
