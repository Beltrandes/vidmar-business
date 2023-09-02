import { Component, Input } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.sass'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in')
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class ListaClientesComponent {

  @Input() clientes: Cliente[] = []

  constructor(private router: Router, private route: ActivatedRoute) {}

  toggleObras(cliente: Cliente) {
    cliente.showWorks = !cliente.showWorks
    cliente.arrowDirection = cliente.showWorks ? 'up' : 'down'
  }

  onEdit(cliente: Cliente) {
    this.router.navigate(['edit', cliente._id], {relativeTo: this.route})
  }
}
