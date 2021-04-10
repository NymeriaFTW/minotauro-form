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

  comecarJogo() {
    return this.http.get<Sala>(this.url);
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
