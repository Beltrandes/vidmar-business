import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './containers/clientes/clientes.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ClientesFormComponent } from './components/clientes-form/clientes-form.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ListaClientesComponent,
    ClientesFormComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
