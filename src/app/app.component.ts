import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SalaService } from "./services/sala.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private router: Router, private salaService: SalaService) {
    this.salaService.getSalas().subscribe((res) => console.log(res));
  }
}
