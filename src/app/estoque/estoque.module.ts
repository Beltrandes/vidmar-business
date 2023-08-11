import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueComponent } from './containers/estoque/estoque.component';
import { TabelaEstoqueComponent } from './components/tabela-estoque/tabela-estoque.component';


@NgModule({
  declarations: [
    EstoqueComponent,
    TabelaEstoqueComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule
  ]
})
export class EstoqueModule { }
