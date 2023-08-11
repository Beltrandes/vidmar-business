import { Injectable } from '@angular/core';
import { ItemEstoque } from 'src/app/models/ItemEstoque';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  itens: ItemEstoque[] = [
    {id: 1, amount: 4, code: 2232, name: 'Disco de maquita(Porcelanato)', type: 'Marmoraria', status: 'Em estoque'},
    {id: 2, amount: 12, code: 2135, name: 'PU40(Branco)', type: 'Marmoraria', status: 'Em estoque'},
    {id: 3, amount: 6, code: 2121, name: 'Silicone Acético(Incolor)', type: 'Vidraçaria', status: 'Em estoque'},
  ]

  constructor() { }

  listItems() {
    return this.itens
  }


}
