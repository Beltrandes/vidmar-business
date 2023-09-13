import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Obra } from '../../models/Obra';
import { ObraService } from '../../services/obra.service';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.sass']
})
export class ObrasComponent {

  obras$!: Observable<Obra[]>

  constructor(private obraService: ObraService) {
    this.load()
  }

  load() {

    this.obras$ = this.obraService.listObras()
  }
}
