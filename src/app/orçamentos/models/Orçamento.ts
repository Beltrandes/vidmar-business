import { Cliente } from "src/app/clientes/models/Cliente"

export interface Orçamento {
  _id: string
  cliente: Cliente | string
  data: Date
  contato: string
  descricao: string
  arquivos: string[]
  status: 'Não fechado' | 'Fechado'
  itens: {
    descricao: string
    quantidade: number
    precoUnitario: number
    total: number
  }
  total: number

}
