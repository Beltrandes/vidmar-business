import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orçamento } from '../models/Orçamento';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrçamentoService {

  constructor(private http: HttpClient) { }

  private readonly API = '/api/orcamentos'

  listOrçamentos() {
    return this.http.get<Orçamento[]>(this.API).pipe(first())
  }
}
