class Produto {
  constructor(
    readonly nome: string,
    readonly preco: number
  ){}
}

const produto1 = new Produto('Banna Prata', 1.85);
const produto2 = new Produto('Maçã', 0.75);

console.log(`Produto1: ${produto1.nome} - R$ ${produto1.preco}`);
console.log(`Produto2: ${produto2.nome} - R$ ${produto2.preco}`);
