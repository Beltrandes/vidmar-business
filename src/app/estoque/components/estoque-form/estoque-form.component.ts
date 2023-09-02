import { Location } from '@angular/common';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { EstoqueService } from '../../services/estoque.service';
import { ActivatedRoute } from '@angular/router';
import {  Subscription } from 'rxjs';
import { ItemEstoque } from 'src/app/estoque/models/ItemEstoque';


@Component({
  selector: 'app-estoque-form',
  templateUrl: './estoque-form.component.html',
  styleUrls: ['./estoque-form.component.sass'],
})
export class EstoqueFormComponent implements OnInit {

  toastMessage = ''

  form: FormGroup


  item: ItemEstoque | undefined

  private subscription: Subscription | undefined

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private estoqueService: EstoqueService,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {
    this.form = this.formBuilder.group({
      _id: [''],
      amount: [0],
      name: [''],
      type: ['']

    })
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const itemId = params.get('id')
      if(itemId) {
        this.loadItem(itemId)
      }
    })
}


  loadItem(itemId: string) {
    this.subscription = this.estoqueService.loadById(itemId).subscribe({
      next: (item: ItemEstoque) => {
        this.item = item
        this.form.setValue({
          _id: item._id,
          amount: item.amount,
          name: item.name,
          type: item.type
        })
      },
      error: (error) => {
        this.triggerToast('Erro ao carregar os dados do Item.')
      }
    })
  }

  onCancel() {
    this.location.back()
  }

  triggerToast(message: string) {
    const toastElement = document.getElementById('toast')
    this.renderer.addClass(toastElement, 'show')
    setTimeout(() => {
      this.renderer.removeClass(toastElement, 'show')
    }, 3000)

    this.toastMessage = message

  }

  onSubmit() {
    if ( this.form.value.name !== '' && this.form.value.type !== null) {
      this.estoqueService.save(this.form.value).subscribe({
        next: () => console.log('deu certo'),
        error: (erro) => this.triggerToast('Erro ao salvar os dados do Item.'),
        complete: () => this.onCancel()
      })
    }
  }
}
