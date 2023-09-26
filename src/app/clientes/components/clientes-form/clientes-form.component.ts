import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/Cliente';
import { ActivatedRoute } from '@angular/router';
import { Obra } from 'src/app/obras/models/Obra';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.sass']
})
export class ClientesFormComponent implements OnInit {

  form!: FormGroup

  @Output() load = new EventEmitter(false)

  toastMessage: string = ''

  isLoading: boolean = false

  cliente!: Cliente

  private subscription: Subscription | undefined

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private clienteService: ClientesService,
    private route: ActivatedRoute,
    private renderer: Renderer2) {

    this.form = this.formBuilder.group({
      _id: [''],
      name: [''],
      number: [''],
      address: [''],
      arrowDirection: ['down'],
      works: this.formBuilder.array([])
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const clienteId = params.get('id')
      if (clienteId) {
        this.loadCliente(clienteId)
      }
    })
  }

  onCancel() {
    this.location.back()
  }

  onSubmit() {
    if (this.form.valid) {
      this.subscription = this.clienteService.save(this.form.value).subscribe({
        next: (cliente: Cliente) => {
          if (this.form.value.works.length > 0) {
            const obras = this.form.value.works.map((obra: Obra) => {
              obra.cliente = cliente

              return obra
            })

            this.clienteService.updateWorks(cliente._id, obras).subscribe({
              next: () => {
                this.clienteService.successAddCliente()
              },
            })


          }



        },
        error: () => {
        },
        complete: () => this.onCancel()
      })
    }
  }

  loadCliente(clienteId: string) {
    this.subscription = this.clienteService.listClienteById(clienteId).subscribe({
      next: (cliente: Cliente) => {
        this.cliente = cliente
        this.form.patchValue({
          _id: cliente._id,
          name: cliente.name,
          number: cliente.number,
          address: cliente.address,
        })
        const obraControls = this.retrieveObras(cliente)

        const obraFormArray = this.formBuilder.array(obraControls)

        this.form.setControl('works', obraFormArray)
      }
    })
  }

  retrieveObras(cliente: Cliente) {
    const obras = []
    if (cliente.works.length) {
      cliente.works.forEach(obra => obras.push(this.createObra(obra)))
    } else {
      obras.push(this.createObra())
    }
    return obras
  }

  private createObra(obra: Obra = { _id: '', name: '', cliente: this.cliente, address: '', serviceType: '', initialDate: '', finishDate: '' }) {
    return this.formBuilder.group({
      _id: [obra._id],
      name: [obra.name],
      cliente: [obra.cliente],
      address: [obra.address],
      serviceType: [obra.serviceType],
      initialDate: [obra.initialDate],
      finishDate: [obra.finishDate],
    })
  }

  getObrasFormArray() {
    return (<UntypedFormArray>this.form.get('works')).controls
  }

  addNewWork() {
    const obras = this.form.get('works') as UntypedFormArray
    obras.push(this.createObra())
  }

  removeWork(index: number) {
    const obras = this.form.get('works') as UntypedFormArray
    obras.removeAt(index)
  }


}
