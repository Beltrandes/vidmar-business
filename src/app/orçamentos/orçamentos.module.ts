import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrçamentosRoutingModule } from './orçamentos-routing.module';
import { OrcamentosComponent } from './containers/orcamentos/orcamentos.component';
import { OrcamentoFormComponent } from './components/orcamento-form/orcamento-form.component';
import { OrcamentoListComponent } from './components/orcamento-list/orcamento-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    OrcamentosComponent,
    OrcamentoFormComponent,
    OrcamentoListComponent,
  ],
  imports: [
    CommonModule,
    OrçamentosRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  exports: [  ]
})
export class OrçamentosModule { }
