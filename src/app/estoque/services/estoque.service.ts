import { Injectable } from '@angular/core';
import { ItemEstoque } from 'src/app/estoque/models/ItemEstoque';
import { HttpClient } from '@angular/common/http';
import { first, Observable, reduce } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  private readonly API = '/api/itens-estoque'

  constructor(private http: HttpClient) { }

  listItems() {
    return this.http.get<ItemEstoque[]>(this.API)
      .pipe(
        first()
      )
  }

  loadById(id: string) {
    return this.http.get<ItemEstoque>(`${this.API}/${id}`)
  }

  save(record: Partial<ItemEstoque>) {
    if(record._id) {
      return this.update(record)
    }

    return this.create(record)
  }

  private create(record: Partial<ItemEstoque>) {
    return this.http.post<ItemEstoque>(this.API, record).pipe(first())
  }

  private update(record: Partial<ItemEstoque>) {
    return this.http.put<ItemEstoque>(`${this.API}/${record._id}`, record).pipe(first())
  }

  updateAmount(record: Partial<ItemEstoque>, newAmount: number): Observable<ItemEstoque> {
    return this.http.patch<ItemEstoque>(`${this.API}/${record._id}/amount`, newAmount).pipe(first())
  }

  remove(id: string) {
    return this.http.delete<ItemEstoque>(`${this.API}/${id}`).pipe(first())
  }


}
