type ProdutoBasico = {
  nome: string,
  categoria: string
}

type ProdutoComercial = {
  preco: number,
  estoque: number
}

type DadosProduto = ProdutoBasico & ProdutoComercial;

const produto1: DadosProduto = {
  nome: 'Notebook',
  categoria: 'Eletrônicos',
  preco: 3_500,
  estoque: 8
}

const produto2: DadosProduto = {
  nome: 'Mouse',
  categoria: 'Eletrônicos',
  preco: 150,
  estoque: 25
}

const produto3: DadosProduto = {
  nome: 'Camiseta',
  categoria: 'Roupas',
  preco: 100,
  estoque: 40
} 

const mostrarDados = (obj: DadosProduto): string => {
  return `${obj.nome} - ${obj.categoria} - R$ ${obj.preco} - Estoque: ${obj.estoque}`;
}

console.log(mostrarDados(produto1));
console.log(mostrarDados(produto2));
console.log(mostrarDados(produto3));