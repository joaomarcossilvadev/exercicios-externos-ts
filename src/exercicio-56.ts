const produtos: unknown = [
  { nome: 'Notebook', preco: 3500 },
  { nome: 'Mouse', preco: 150 },
  { nome: 'Teclado', preco: 250 }
];

const produtosConvertidos = produtos as {
  nome: string,
  preco: number
}[];

const produtoMaisCaro = produtosConvertidos.reduce((ac, produto) => {
  if(ac.preco > produto.preco){
    return ac;
  } else {
    return produto;
  }
});

console.log(`Produto mais caro: ${produtoMaisCaro.nome}`);
console.log(`Preço: R$ ${produtoMaisCaro.preco}`);