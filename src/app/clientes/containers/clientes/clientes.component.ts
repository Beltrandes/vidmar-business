import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../models/Cliente';
import { ClientesService } from '../../services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.sass']
})
export class ClientesComponent implements OnInit {


  clientes$!: Observable<Cliente[]>

  constructor(private clientesService: ClientesService, private route: ActivatedRoute, private router: Router) {
    this.load()
  }

  ngOnInit(): void {
      this.clientesService.clienteAdicionado$.subscribe(() => this.load())
  }

  load() {
    console.log('passou aqui')
    this.clientes$ = this.clientesService.listClients()
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onRemoveCliente(cliente: Cliente) {
    this.clientesService.deleteCliente(cliente._id).subscribe({
      next: () => this.load(),
      error: (err) => console.log(err)
    })
  }
}
