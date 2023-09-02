import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../models/Cliente';
import { ClientesService } from '../../services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.sass']
})
export class ClientesComponent {


  clientes$!: Observable<Cliente[]>

  constructor(private clientesService: ClientesService, private route: ActivatedRoute, private router: Router) {
    this.load()
  }

  load() {
    this.clientes$ = this.clientesService.listClients()
    console.log(this.clientes$)
  }

  onAdd() {
    console.log('ok')
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
