import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './containers/clientes/clientes.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ListaClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
