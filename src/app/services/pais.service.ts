import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PaisService {
  url = "http://localhost:8088/api/pais";

  constructor(private http: HttpClient) {}

  getCandidatos() {
    return this.http.get<any[]>(this.url);
  }
}
