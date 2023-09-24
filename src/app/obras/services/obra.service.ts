import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Obra } from '../models/Obra';
import { first } from 'rxjs';
import { Cliente } from 'src/app/clientes/models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ObraService {
  private readonly API = '/api/obras'

  constructor(private http: HttpClient) { }

  listObras() {
    return this.http.get<Obra[]>(this.API)
      .pipe(
        first()
      )
  }

  findById(id: string) {
    return this.http.get<Obra>(`${this.API}/${id}`)
      .pipe(
        first()
      )
  }

  save(record: Partial<Obra>) {
    if(record._id) {
      return this.update(record)
    }

    return this.create(record)
  }

  private create(record: Partial<Obra>) {
    console.log(record)
    return this.http.post<Obra>(this.API, record).pipe(first())
  }

  private update(record: Partial<Obra>) {
    return this.http.put<Obra>(`${this.API}/${record._id}`, record).pipe(first())
  }
}
