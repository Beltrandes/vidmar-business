import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrcamentosComponent } from './containers/orcamentos/orcamentos.component';
import { OrcamentoFormComponent } from './components/orcamento-form/orcamento-form.component';

const routes: Routes = [
  {path: '', component: OrcamentosComponent, children: [
    {path: 'new', component: OrcamentoFormComponent},
    {path: 'edit/:id', component: OrcamentoFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrçamentosRoutingModule { }
