import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Obra } from '../../models/Obra';
import { ObraService } from '../../services/obra.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.sass']
})
export class ObrasComponent implements OnInit {

  obras$!: Observable<Obra[]>

  constructor(private obraService: ObraService, private router: Router, private route: ActivatedRoute) {
    this.load()
  }

  ngOnInit(): void {
      this.obraService.obraAdicionada$.subscribe(() => {
        this.load()
      })
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

  removeObra(obra: Obra) {
    this.obraService.deleteObra(obra._id).subscribe(() => this.load())
  }
}
