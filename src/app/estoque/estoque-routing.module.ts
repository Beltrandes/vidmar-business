import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueComponent } from './containers/estoque/estoque.component';
import { EstoqueFormComponent } from './components/estoque-form/estoque-form.component';

const routes: Routes = [
  {path: '', component: EstoqueComponent, children: [
    {path: 'new', component: EstoqueFormComponent},
    {path: 'edit/:id', component: EstoqueFormComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
