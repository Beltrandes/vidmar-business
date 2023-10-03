import { Component, Input } from '@angular/core';
import { Orçamento } from '../../models/Orçamento';

@Component({
  selector: 'app-orcamento-list',
  templateUrl: './orcamento-list.component.html',
  styleUrls: ['./orcamento-list.component.sass'],
})
export class OrcamentoListComponent {

  @Input() orcamentos: Orçamento[] = []

  mostrarDetalhes: boolean = false

  detalhesVisiveis: { [key: string]: boolean} = {}

  idOrcamentoSelecionado: string | null = null



  verDetalhes(orcamentoId: string) {
    this.detalhesVisiveis[orcamentoId] = !this.detalhesVisiveis[orcamentoId]

  }
}
