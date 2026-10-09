const pedido: unknown = {
  id: 101,
  cliente: 'João',
  produtos: [
    { nome: 'Notebook', preco: 3500 },
    { nome: 'Mouse', preco: 150 },
    { nome: 'Teclado', preco: 250 }
  ]
};

const pedidoFormatado = pedido as {
  id: number,
  cliente: string,
  produtos: {
    nome: string,
    preco: number,
  }[]
};

const processarPedido = (obj: {
  id: number,
  cliente: string,
  produtos: {
    nome: string,
    preco: number,
  }[]
}) => {
  const totalProdutos = obj.produtos.reduce((ac, produto) => ac + produto.preco, 0);
  return `Pedido #${obj.id}\nCliente: ${obj.cliente}\nTotal: R$ ${totalProdutos}`;
}

console.log(processarPedido(pedidoFormatado));