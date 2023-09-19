import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObrasComponent } from './containers/obras/obras.component';
import { ObrasFormComponent } from './components/obras-form/obras-form.component';

const routes: Routes = [
  {path: '', component: ObrasComponent, children: [
    {path: 'new', component: ObrasFormComponent},
    {path: 'edit/:id', component: ObrasFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObrasRoutingModule { }
