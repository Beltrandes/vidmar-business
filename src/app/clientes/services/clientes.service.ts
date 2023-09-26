import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { Subject, first } from 'rxjs';
import { Obra } from 'src/app/obras/models/Obra';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = '/api/clientes'

  private addClienteSource = new Subject<void>()

  clienteAdicionado$ = this.addClienteSource.asObservable()

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
      return this.update(record)
    }

    return this.create(record)
  }

  private create(record: Partial<Cliente>) {
    return this.http.post<Cliente>(this.API, record).pipe(first())
  }

  private update(record: Partial<Cliente>) {
    return this.http.put<Cliente>(`${this.API}/${record._id}`, record).pipe(first())
  }

  updateWorks(clienteId: string, obras: Partial<Obra[]>) {
    return this.http.put<void>(`${this.API}/obras/${clienteId}`, obras).pipe(first())
  }

  deleteCliente(id: string) {
    return this.http.delete<Cliente>(`${this.API}/${id}`).pipe(first())
  }

  successAddCliente() {
    this.addClienteSource.next()
  }

}
