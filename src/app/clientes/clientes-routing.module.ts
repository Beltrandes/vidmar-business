import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './containers/clientes/clientes.component';
import { ClientesFormComponent } from './components/clientes-form/clientes-form.component';

const routes: Routes = [
  {
    path: '', component: ClientesComponent, children: [
      { path: 'new', component: ClientesFormComponent },
      { path: 'edit/:id', component: ClientesFormComponent }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
