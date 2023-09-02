import { Cliente } from "src/app/clientes/models/Cliente";

export interface Obra {
  _id: string;
  name: string;
  cliente: Cliente;
  address: string;
  serviceType: "Marmoraria" | "Vidraçaria" | "Ambos" | ''
  initialDate: Date | string;
  finishDate: Date | string;
}
