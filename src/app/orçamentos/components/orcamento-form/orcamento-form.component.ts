import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormArray } from '@angular/forms';
import { Cliente } from 'src/app/clientes/models/Cliente';
import { ClientesService } from 'src/app/clientes/services/clientes.service';
import { Orçamento } from '../../models/Orçamento';
import { ItemOrçamento } from '../../models/ItemOrçamento';

@Component({
  selector: 'app-orcamento-form',
  templateUrl: './orcamento-form.component.html',
  styleUrls: ['./orcamento-form.component.sass']
})
export class OrcamentoFormComponent implements OnInit{

  clientes!: Cliente[]
  form!: FormGroup

  constructor(private clienteService: ClientesService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      _id: [''],
      cliente: [''],
      descricaoGeral: [''],
      prazoDeEntrega: [''],
      formaDePagamento: [''],
      itens: this.formBuilder.array([])

    })
  }

  ngOnInit(): void {
      this.load()
  }

  load() {
    this.clienteService.listClients().subscribe({
      next: (clientes) => {
        this.clientes = clientes
      }
    })
  }

  retrieveItens(orcamento: Orçamento) {
    const itens = []
    if (orcamento.itens.length) {
      orcamento.itens.forEach(item => itens.push(this.createItem(item)))
    } else {
      itens.push(this.createItem())
    }
    return itens
  }

  private createItem(item: ItemOrçamento = { _id: '', nome: '', material: '', medidaX: 0.0, medidaY: 0.0, quantidade: 0, m2: 0.0, detalhes: '', m2Valor: 0, m2Total: 0, valorItem: 0, valorTotal: 0 }) {
    return this.formBuilder.group({
      _id: [item._id],
      nome: [item.nome],
      material: [item.material],
      medidaX: [item.medidaX],
      medidaY: [item.medidaY],
      quantidade: [item.quantidade],
      m2: [item.m2],
      detalhes: [item.detalhes],
      m2Valor: [item.m2Valor],
      m2Total: [item.m2Total],
      valorItem: [item.valorItem],
      valorTotal: [item.valorTotal],
    })
  }

  getItensFormArray() {
    return (<UntypedFormArray>this.form.get('itens')).controls
  }

  addNewItem() {
    const itens = this.form.get('itens') as UntypedFormArray
    itens.push(this.createItem())
  }

  removeItem(index: number) {
    const itens = this.form.get('itens') as UntypedFormArray
    itens.removeAt(index)
  }



}
