import { Component, Input } from '@angular/core';
import { Orçamento } from '../../models/Orçamento';

@Component({
  selector: 'app-orcamento-list',
  templateUrl: './orcamento-list.component.html',
  styleUrls: ['./orcamento-list.component.sass']
})
export class OrcamentoListComponent {

  @Input() orcamentos: Orçamento[] = []

  mostrarDetalhes: boolean = false

  detalhesToggleText: string = 'Ver'

  verDetalhes() {
    this.mostrarDetalhes = !this.mostrarDetalhes

    if (this.detalhesToggleText == 'Ver') {
      this.detalhesToggleText = 'Ocultar'
    } else {
      this.detalhesToggleText = 'Ver'
    }
  }
}
