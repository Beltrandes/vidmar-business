import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObrasRoutingModule } from './obras-routing.module';
import { ObrasComponent } from './containers/obras/obras.component';
import { ObrasListComponent } from './components/obras-list/obras-list.component';


@NgModule({
  declarations: [
    ObrasComponent,
    ObrasListComponent
  ],
  imports: [
    CommonModule,
    ObrasRoutingModule
  ]
})
export class ObrasModule { }
