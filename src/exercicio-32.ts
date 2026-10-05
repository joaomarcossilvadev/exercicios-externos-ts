type Produto = {
  nome: string,
  preco: number,
  categoria: string
};

const produtos : Produto[] = [
  {
    nome: 'Teclado',
    preco: 250,
    categoria: 'Eletrônicos'
  },
  {
    nome: 'Mouse',
    preco: 150,
    categoria: 'Eletrônicos'
  },
  {
    nome: 'Camiseta',
    preco: 150,
    categoria: 'Roupas'
  }
]

produtos.map(produto => console.log(`${produto.nome} - R$ ${produto.preco} - ${produto.categoria}`));