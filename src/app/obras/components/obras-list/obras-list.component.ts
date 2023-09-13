import { Component, Input } from '@angular/core';
import { Obra } from '../../models/Obra';

@Component({
  selector: 'app-obras-list',
  templateUrl: './obras-list.component.html',
  styleUrls: ['./obras-list.component.sass']
})
export class ObrasListComponent {

  @Input() obras!: Obra[]
}
