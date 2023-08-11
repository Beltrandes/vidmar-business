import { Component, Input } from '@angular/core';
import { ItemEstoque } from 'src/app/models/ItemEstoque';

@Component({
  selector: 'app-tabela-estoque',
  templateUrl: './tabela-estoque.component.html',
  styleUrls: ['./tabela-estoque.component.sass']
})
export class TabelaEstoqueComponent {
  @Input() itens: ItemEstoque[] = []


}
