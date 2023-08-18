import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueComponent } from './containers/estoque/estoque.component';
import { TabelaEstoqueComponent } from './components/tabela-estoque/tabela-estoque.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstoqueFormComponent } from './components/estoque-form/estoque-form.component';


@NgModule({
  declarations: [
    EstoqueComponent,
    TabelaEstoqueComponent,
    EstoqueFormComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbToastModule
  ]
})
export class EstoqueModule { }
