const vendas: {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number,
  status: string
}[] = [
  {
    cliente: 'João',
    produto: 'Teclado Mecânico',
    categoria: 'Tecnologia',
    preco: 250,
    quantidade: 2,
    status: 'concluida'
  },
  {
    cliente: 'Maria',
    produto: 'Mouse Gamer',
    categoria: 'Tecnologia',
    preco: 150,
    quantidade: 1,
    status: 'concluida'
  },
  {
    cliente: 'Carlos',
    produto: 'Tênis Esportivo',
    categoria: 'Vestuário',
    preco: 400,
    quantidade: 2,
    status: 'pendente'
  },
  {
    cliente: 'João',
    produto: 'Monitor 29"',
    categoria: 'Tecnologia',
    preco: 1200,
    quantidade: 1,
    status: 'concluida'
  },
  {
    cliente: 'Fernanda',
    produto: 'Perfume Ferrari',
    categoria: 'Beleza',
    preco: 180,
    quantidade: 3,
    status: 'concluida'
  },
  {
    cliente: 'Carlos',
    produto: 'Camisa Polo',
    categoria: 'Vestuário',
    preco: 120,
    quantidade: 4,
    status: 'pendente'
  },
  {
    cliente: 'Maria',
    produto: 'Notebook',
    categoria: 'Tecnologia',
    preco: 3500,
    quantidade: 1,
    status: 'concluida'
  }
];

function vendasConcluidas(obj: {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number,
  status: string
}[]): {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number,
  status: string
}[]{
  return obj.filter(venda => venda.status === 'concluida');
}

function valorTotalVendas(obj: {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number,
  status: string
}[]): number{
  return obj.reduce((ac, venda) => {
    return ac + (venda.preco * venda.quantidade);
  }, 0);
}

function vendaMaisCara(obj: {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number,
  status: string
}[]): {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number,
  status: string
}{
  return obj.reduce((ac, venda) => {
    if((venda.preco * venda.quantidade) > (ac.preco * ac.quantidade)){
      return venda;
    } else {
      return ac;
    }
  }, obj[0]!);
}

function totalCliente(nomeCliente: string, obj: {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number,
  status: string
}[]): number{
  const clienteEncontrado = obj.filter(venda => venda.cliente === nomeCliente);
  return clienteEncontrado.reduce((ac, venda) => {
    return ac + (venda.preco * venda.quantidade);
  }, 0);
}

function resumoVendas(obj: {
  cliente: string,
  produto: string,
  categoria: string,
  preco: number,
  quantidade: number,
  status: string
}[]): {
  totalVendas: number,
  vendasConcluidas: number,
  valorTotal: number
} {
  return {
    totalVendas: obj.length,
    vendasConcluidas: vendasConcluidas(obj).length,
    valorTotal: valorTotalVendas(obj)
  }
}

// console.log(vendasConcluidas(vendas));
// console.log(valorTotalVendas(vendas));
// console.log(vendaMaisCara(vendas));
// console.log(totalCliente('Maria', vendas));
// console.log(resumoVendas(vendas));