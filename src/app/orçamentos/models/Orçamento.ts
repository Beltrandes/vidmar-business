import { Cliente } from "src/app/clientes/models/Cliente"
import { ItemOrçamento } from "./ItemOrçamento"

export interface Orçamento {
  _id: string
  cliente: Cliente
  data: Date
  contato: string
  descricao: string
  arquivos: string[]
  status: 'Não fechado' | 'Fechado'
  total: number
  prazoDeEntrega: string
  formaDePagamento: string
  itens: ItemOrçamento[]

}
