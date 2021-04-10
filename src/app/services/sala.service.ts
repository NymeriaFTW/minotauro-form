import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Sala } from "../models/sala";

@Injectable({
  providedIn: "root",
})
export class SalaService {
  private api = environment.api;
  private url = `${this.api}sala`;

  constructor(private http: HttpClient) {}

  comecarJogo(tamanho: number) {
    const url = `${this.url}/${tamanho}`;
    return this.http.get<Sala>(url);
  }

  proximaSala(idSala: number, portaEscolhida: string, tamanho: number) {
    const url = `${this.url}/${idSala}/${portaEscolhida}/${tamanho}`;
    return this.http.get<Sala>(url);
  }

  salvarSaida() {
    const url = `${this.url}save`;
    return this.http.post<Sala>(url, null);
  }

  alterarSala(id: number) {
    const url = `${this.url}${id}`;
    return this.http.put<Sala>(url, null);
  }

  deleteSala(id: number) {
    const url = `${this.url}${id}`;
    return this.http.delete<Sala>(url, null);
  }
}
