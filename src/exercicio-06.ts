const produtos: {
  nome: string;
  preco: number;
  categoria: string
  estoque: number;
}[] = [
  {
    nome: 'Teclado',
    preco: 200,
    categoria: 'Periféricos',
    estoque: 50
  },
  {
    nome: 'Camisa Pollo',
    preco: 150,
    categoria: 'Roupas',
    estoque: 10
  },
  {
    nome: 'Relogio',
    preco: 600,
    categoria: 'Acessórios',
    estoque: 500
  },
  {
    nome: 'Perfume ferrari',
    preco: 90,
    categoria: 'Beleza',
    estoque: 5
  },
  {
    nome: 'bananade',
    preco: 2.50,
    categoria: 'doces',
    estoque: 60
  },
  
];

function produtosEmEstoque(obj: {
  nome: string;
  preco: number;
  categoria: string
  estoque: number;
}[]): {
  nome: string;
  preco: number;
  categoria: string
  estoque: number;
}[]{
  return obj.filter(produto => produto.estoque > 0);
}

function nomesProdutos(obj: {
  nome: string;
  preco: number;
  categoria: string
  estoque: number;
}[]): string[] {
  return obj.map(produto => {
    return produto.nome;
  });
}

function valorEstoque(obj: {
  nome: string;
  preco: number;
  categoria: string
  estoque: number;
}[]): number{
  return obj.reduce((ac, produto)=>{
    return ac + produto.preco * produto.estoque;
  }, 0);
}

function produtoMaisCaro(obj: {
  nome: string;
  preco: number;
  categoria: string
  estoque: number;
}[]):  {
  nome: string;
  preco: number;
  categoria: string
  estoque: number;
}{
  return obj.reduce((ac, produto) => {
    if(produto.preco > ac.preco){
      return produto;
    } else {
      return ac;
    }
  }, obj[0]!);
}

console.log(produtosEmEstoque(produtos));
console.log(nomesProdutos(produtos));
console.log(valorEstoque(produtos));
console.log(produtoMaisCaro(produtos));