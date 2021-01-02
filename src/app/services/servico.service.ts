import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servico } from '../models/Servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private url = "http://localhost:8080/servicos"

  constructor(private http: HttpClient) { }

  public list() {
    return this.http.get(this.url + '/todos');
  }

  public create(servico: Servico) {
    return this.http.post(this.url, servico);
  }
}
