class Pessoa {
  constructor(
    readonly nome: string,
    readonly idade: number
  ){}
}

const pessoa1 = new Pessoa('João', 21);

console.log(pessoa1.nome);
console.log(pessoa1.idade);
