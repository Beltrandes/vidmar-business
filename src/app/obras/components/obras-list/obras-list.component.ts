import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Obra } from '../../models/Obra';

@Component({
  selector: 'app-obras-list',
  templateUrl: './obras-list.component.html',
  styleUrls: ['./obras-list.component.sass']
})
export class ObrasListComponent {

  @Input() obras!: Obra[]

  @Output() edit = new EventEmitter(false)

  onEdit(obra: Obra) {
    this.edit.emit(obra)
    console.log(obra)
  }
}
