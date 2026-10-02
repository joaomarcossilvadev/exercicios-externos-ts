const pedidos: {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number
}[] = [
  { 
    cliente:'Rafael', 
    produto: 'Kit upgradeRyzen',
    categoria: 'Tecnologia',
    preco: 500,
    quantidade: 50
  },
  { 
    cliente:'Bernardo', 
    produto: 'Bananada',
    categoria: 'Doces',
    preco: 2.50,
    quantidade: 5
  },
  { 
    cliente:'Carol', 
    produto: 'Vestido Rainha',
    categoria: 'Vestuário',
    preco: 300,
    quantidade: 1
  },
  { 
    cliente:'Renata', 
    produto: 'Aspirador eletrolux',
    categoria: 'Eletrodomesticos',
    preco: 250,
    quantidade: 2
  },
  { 
    cliente:'Marcos', 
    produto: 'Perfume Ferrari',
    categoria: 'Beleza',
    preco: 90,
    quantidade: 7
  },
];

function pedidosAcimaDe(valorMinimo: number, obj: {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number
}[]): {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number
}[] {
  return obj.filter( pedido => (pedido.preco * pedido.quantidade) >= valorMinimo);
};

function nomesClientes(obj: {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number
}[]): string[]{
  return obj.map(pedido => pedido.cliente);
}

function valorTotalPedidos(obj: {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number
}[]): number{
  return obj.reduce((ac, pedido) => {
    const valorTotal = (pedido.preco * pedido.quantidade);
    return ac + valorTotal;
  }, 0);
}

function pedidoMaisCaro(obj: {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number
}[]): {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number
} {
  return obj.reduce((ac, pedido) => {
    const valorTotal = (pedido.preco * pedido.quantidade);
    if(valorTotal > ac.preco * ac.quantidade){
      return pedido;
    } else {
      return ac;
    }
  }, obj[0]!);
}

function pedidosPorCategoria(nomeCategoria: string, obj: {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number
}[]): {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number
}[]{
  return obj.filter(pedido => pedido.categoria === nomeCategoria);
}

function totalCompradoCliente(nomeCliente: string, obj: {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number
}[]): number{
  const clienteEncontrado = obj.filter(pedido => pedido.cliente === nomeCliente);
  return clienteEncontrado.reduce((ac, pedido) => {
    return ac + (pedido.preco * pedido.quantidade);
  }, 0);
}

function pedidoDoCliente(nomeCliente: string, obj: {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number
}[]): {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number
} | undefined{
  const cliententEncontrado = obj.find(pedido => pedido.cliente === nomeCliente);
  if(!cliententEncontrado){
    return;
  } else {
    return cliententEncontrado;
  }
}

console.log(pedidosAcimaDe(10, pedidos));
console.log(nomesClientes(pedidos));
console.log(valorTotalPedidos(pedidos));
console.log(pedidoMaisCaro(pedidos));
console.log(pedidosPorCategoria('Tecnologia', pedidos));
console.log(totalCompradoCliente('Rafael', pedidos));
console.log(pedidoDoCliente('Rafael', pedidos));
