import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObrasRoutingModule } from './obras-routing.module';
import { ObrasComponent } from './containers/obras/obras.component';
import { ObrasListComponent } from './components/obras-list/obras-list.component';
import { ObrasFormComponent } from './components/obras-form/obras-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ObrasComponent,
    ObrasListComponent,
    ObrasFormComponent
  ],
  imports: [
    CommonModule,
    ObrasRoutingModule,
    ReactiveFormsModule
  ]
})
export class ObrasModule { }
