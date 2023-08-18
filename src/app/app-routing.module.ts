import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'painel', pathMatch: 'full'},
  {
    path: 'estoque',
    loadChildren: () => import('./estoque/estoque.module').then(e => e.EstoqueModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then(c => c.ClientesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
