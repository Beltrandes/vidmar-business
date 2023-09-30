import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Orçamento } from '../../models/Orçamento';
import { OrçamentoService } from '../../services/orçamento.service';

@Component({
  selector: 'app-orcamentos',
  templateUrl: './orcamentos.component.html',
  styleUrls: ['./orcamentos.component.sass']
})
export class OrcamentosComponent {

  orcamentos$!: Observable<Orçamento[]>

  constructor(private orcamentoService: OrçamentoService) {
    this.load()
  }

  load() {
    this.orcamentos$ = this.orcamentoService.listOrçamentos()
  }
}
