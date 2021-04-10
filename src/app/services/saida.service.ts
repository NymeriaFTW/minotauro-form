import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Saida } from '../models/saida';

@Injectable({
  providedIn: 'root'
})
export class SaidaService {

  private api = environment.api;
  private url = `${this.api}saida`;

  constructor(private http: HttpClient) { }


  getTodasAsSaidas(): Observable<Saida[]> {
    return this.http.get<Saida[]>(this.url);
  }

  salvarSaida() {
    const url = `${this.url}save`;
    return this.http.post<Saida>(url, null);
  }

  alterarSaida(id: number) {
    const url = `${this.url}${id}`;
    return this.http.put<Saida>(url, null);
  }

  deleteSaida(id: number) {
    const url = `${this.url}${id}`;
    return this.http.delete<Saida>(url, null);
  }
}
