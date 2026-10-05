type Pedido = {
  cliente: string,
  produto: string,
  preco: number,
  status: string 
}

const pedidos: Pedido[] = [
  {
    cliente: 'João',
    produto: 'Notbook',
    preco: 3_500,
    status: 'pago'
  },
  {
    cliente: 'Maria',
    produto: 'Mouse',
    preco: 150,
    status: 'pendente'
  },
  {
    cliente: 'Carlos',
    produto: 'Teclado',
    preco: 250,
    status: 'pago'
  },
  {
    cliente: 'Ana',
    produto: 'Monitor',
    preco: 1_200,
    status: 'cancelado'
  },
  {
    cliente: 'Pedro',
    produto: 'Headset',
    preco: 300,
    status: 'pago'
  },
];


pedidos
  .filter(pedido => pedido.status === 'pago')
  .map(pedido => console.log(`${pedido.cliente} - ${pedido.produto} - R$ ${pedido.preco}`));
;