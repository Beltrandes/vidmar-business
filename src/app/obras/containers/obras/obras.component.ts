import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Obra } from '../../models/Obra';
import { ObraService } from '../../services/obra.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.sass']
})
export class ObrasComponent {

  obras$!: Observable<Obra[]>

  constructor(private obraService: ObraService, private router: Router, private route: ActivatedRoute) {
    this.load()
  }

  load() {

    this.obras$ = this.obraService.listObras()
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  editObra(obra: Obra) {
    console.log(obra)
    this.router.navigate([`edit/${obra._id}`], {relativeTo: this.route})
  }
}
