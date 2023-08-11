import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemEstoque } from 'src/app/models/ItemEstoque';
import { EstoqueService } from '../../services/estoque.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.sass']
})
export class EstoqueComponent {
  itens$!: Observable<ItemEstoque[]>

  constructor(private estoqueService: EstoqueService) {
    this.load()
  }

  load() {
    const mock = this.estoqueService.listItems()
    this.itens$ = of(mock)

  }
}
