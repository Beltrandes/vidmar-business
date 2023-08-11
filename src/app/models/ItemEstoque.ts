export interface ItemEstoque {
  id: number;
  amount: number;
  code: number;
  name: string;
  type: 'Marmoraria' | 'Vidraçaria';
  status: 'Em estoque' | 'Em falta';
}
