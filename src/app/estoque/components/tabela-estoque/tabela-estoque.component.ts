import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemEstoque } from 'src/app/models/ItemEstoque';

@Component({
  selector: 'app-tabela-estoque',
  templateUrl: './tabela-estoque.component.html',
  styleUrls: ['./tabela-estoque.component.sass']
})
export class TabelaEstoqueComponent {

  @Input() itens: ItemEstoque[] = []

  @Input() onAddState!: boolean

  activeItemIndex: number | null = null;

  amount = 0

  @Output() add = new EventEmitter(false)
  @Output() edit = new EventEmitter(false)
  @Output() remove = new EventEmitter(false)

  @Output() changeItemAmount = new EventEmitter(false)

  changeAmount(index: number | null) {
    this.activeItemIndex = index
    this.add.emit(true)
  }

  onSubmitAmount(index: number, newAmount: number) {
    this.changeItemAmount.emit({index, newAmount})
    this.amount = 0
  }

  onEdit(item: ItemEstoque) {
    this.edit.emit(item)
  }

  onRemove(item: ItemEstoque) {
    this.remove.emit(item)
  }

  addAmount() {
    this.amount += 1
  }

  decreaseAmount() {
    this.amount -= 1
  }


}
