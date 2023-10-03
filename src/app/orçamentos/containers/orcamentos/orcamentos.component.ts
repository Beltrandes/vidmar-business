import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Orçamento } from '../../models/Orçamento';
import { OrçamentoService } from '../../services/orçamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orcamentos',
  templateUrl: './orcamentos.component.html',
  styleUrls: ['./orcamentos.component.sass']
})
export class OrcamentosComponent {

  orcamentos$!: Observable<Orçamento[]>

  constructor(private orcamentoService: OrçamentoService, private route: ActivatedRoute, private router: Router) {
    this.load()
  }

  load() {
    this.orcamentos$ = this.orcamentoService.listOrçamentos()
  }

  openOrcamentoForm() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
