import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Sala } from "../models/sala";

@Injectable({
  providedIn: "root",
})
export class SalaService {
  api = environment.api;

  url = `${this.api}salas`;

  constructor(private http: HttpClient) {}

  getSalas() {
    return this.http.get<Sala>(this.url);
  }
}
