const produtos: {
  nome: string;
  preco: number;
  quantidade: number;
}[] = [
  {
    nome: 'Teclado',
    preco: 200,
    quantidade: 5
  },
  {
    nome: 'Mouse',
    preco: 20,
    quantidade: 7
  },
  {
    nome: 'Monitor 29"',
    preco: 1500,
    quantidade: 4
  },
  {
    nome: 'Gabinete Metal',
    preco: 6800,
    quantidade: 10
  },
];

produtos.forEach(product => {
  console.log(product.nome);
  console.log(product.preco);
  console.log(product.quantidade + '\n');
});

const produtosMaiorQue100 = produtos.filter(produto => produto.preco > 100);

const nomes = produtos.map(product => {
  return product.nome;
});

const valorTotal = produtos.reduce((ac, produto) => {
  return ac + (produto.preco * produto.quantidade);
}, 0);