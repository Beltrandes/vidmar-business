import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = '/api/clientes'

  constructor(private http: HttpClient) { }

  listClients() {
    return this.http.get<Cliente[]>(this.API)
      .pipe(
        first()
      )
  }

  listClienteById(id: string) {
    return this.http.get<Cliente>(`${this.API}/${id}`)
      .pipe(
        first()
      )
  }

  save(record: Partial<Cliente>) {
    if(record._id) {
      return this.update(record), this.updateWorks(record)
    }

    return this.create(record)
  }

  private create(record: Partial<Cliente>) {
    return this.http.post<Cliente>(this.API, record).pipe(first())
  }

  private update(record: Partial<Cliente>) {
    return this.http.put<Cliente>(`${this.API}/${record._id}`, record).pipe(first())
  }

  private updateWorks(record: Partial<Cliente>) {
    return this.http.put<Cliente>(`${this.API}/obras/${record._id}`, record).pipe(first())
  }



}
