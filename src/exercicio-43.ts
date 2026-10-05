type Basicas = {
  nome: string,
  categoria: string
};

type Comerciais = {
  preco: number,
  estoque: number
};

type Informacoes = Basicas & Comerciais;

const produto: Informacoes = {
  nome: 'Notbook',
  categoria: 'Eletrônicos',
  preco: 3_500,
  estoque: 8
};

console.log(`${produto.nome} - ${produto.categoria} - R$ ${produto.preco} - Estoque: ${produto.estoque}`);