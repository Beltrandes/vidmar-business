import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Cliente } from 'src/app/clientes/models/Cliente';
import { ClientesService } from 'src/app/clientes/services/clientes.service';
import { ObraService } from '../../services/obra.service';
import { Obra } from '../../models/Obra';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-obras-form',
  templateUrl: './obras-form.component.html',
  styleUrls: ['./obras-form.component.sass']
})
export class ObrasFormComponent implements OnInit {

  form: FormGroup

  obra: Obra | undefined

  clientes$: Observable<Cliente[]> | undefined

  clientes: Cliente[] = []

  subscription: Subscription | undefined

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private clienteService: ClientesService, private obraService: ObraService) {
    this.form = this.formBuilder.group({
      _id: [''],
      name: [''],
      address: [''],
      serviceType: [''],
      cliente: [''],
      initialDate: [''],
      finishDate: ['']
    })
    this.loadClientes()
    console.log(this.form)
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const obraId = params.get('id')
        if (obraId) {
        this.loadObra(obraId)
       }
    })
  }

  loadClientes() {
    this.clienteService.listClients().subscribe({
      next: (clientes: Cliente[]) => {
        this.clientes = clientes
      }
    })
  }

  loadObra(obraId: string) {
    this.subscription = this.obraService.findById(obraId).subscribe({
      next: (obra: Obra) => {
        this.obra = obra
        if (this.obra._id) {
          this.form.setValue({
            _id: this.obra._id,
            name: this.obra.name,
            address: this.obra.address,
            cliente: this.obra.cliente._id,
            serviceType: this.obra.serviceType,
            initialDate: this.obra.initialDate,
            finishDate: this.obra.finishDate
          })

        }
      },
      error: (err) => console.log(`erro: ${err}`)
    })
  }


    onSubmit() {
      if ( this.form.value.name !== '' && this.form.value.type !== null) {
        this.obraService.save(this.form.value).subscribe({
          next: () => {},
          error: (erro) => console.log(erro),
          complete: () => {}
        })
      }

  }
}
