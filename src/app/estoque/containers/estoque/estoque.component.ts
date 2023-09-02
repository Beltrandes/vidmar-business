import { Component } from '@angular/core';
import { Observable, Subscription, debounceTime, delay, distinctUntilChanged, map, of, switchMap } from 'rxjs';
import { ItemEstoque } from '../../models/ItemEstoque';
import { EstoqueService } from '../../services/estoque.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.sass']
})
export class EstoqueComponent {
  itens$!: Observable<ItemEstoque[]>

  searchTerm  = ''

  selectedType = 'Todos'

  itensFiltrados$!: Observable<ItemEstoque[]>

  onAddState = false

  private subscription: Subscription | undefined

  constructor(private estoqueService: EstoqueService, private router: Router, private route: ActivatedRoute) {
    this.load()
  }

  load() {
    this.itens$ = this.estoqueService.listItems()

  }

  onAdd() {
    this.onAddState = !this.onAddState
  }

  onEdit(item: ItemEstoque) {
    console.log('emitiu')
    this.router.navigate(['edit', item._id], {relativeTo: this.route})
  }

  onRemove(item: ItemEstoque) {
    this.estoqueService.remove(item._id).subscribe({
      next: () => this.load(),
      error: (error) => console.log(error)
    })
  }

  filterItems(itens: ItemEstoque[], selectedType: string, searchTerm: string): ItemEstoque[] {
    return itens.filter(item =>
      (selectedType === 'Todos' || item.type === selectedType) &&
      (searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  }

  filterByTypeAndSearch(selectedType: string, searchTerm: string) {
    this.itens$ = this.estoqueService.listItems().pipe(
      delay(100),
      debounceTime(2000),
      distinctUntilChanged(),
      switchMap((itens) => {
        const filteredItems = this.filterItems(itens, selectedType, searchTerm)
        return of(filteredItems)
      })
    )
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm
    this.filterByTypeAndSearch(this.selectedType, this.searchTerm)
  }

  addItem() {
    console.log(this.itens$)
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onChangeItemAmount(event: { index: number, newAmount: number }) {
    this.itens$.subscribe(items => {
      const updatedItems = [...items];
      const updatedItem = { ...updatedItems[event.index], amount: event.newAmount };

      updatedItems[event.index] = updatedItem;

      this.estoqueService.updateAmount(updatedItem, event.newAmount)
        .subscribe(() => {
          this.itens$ = of(updatedItems);
          this.onAddState = false;
        });
    });
  }
}
