import { Obra } from "src/app/obras/models/Obra"

export interface Cliente {
  _id: string
  name: string
  address: string
  works: Obra[]
  number: string
  showWorks: boolean
  arrowDirection: 'up' | 'down'

}
