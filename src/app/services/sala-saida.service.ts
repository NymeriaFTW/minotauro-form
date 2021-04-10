import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SalaSaida } from '../models/salaSaida';

@Injectable({
  providedIn: 'root',
})
export class SalaSaidaService {
  private api = environment.api;
  private url = `${this.api}salaSaida`;

  constructor(private http: HttpClient) {}

  getSalaSaidas() {
    return this.http.get<SalaSaida>(this.url);
  }

  deleteSalaSaidas(id: number) {
    const url = `${this.url}id`;
    return this.http.delete<SalaSaida>(url);
  }
}
