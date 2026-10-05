type Pessoa = {
  nome: string,
  idade: number
}

const pessoas: Pessoa[] = [
  {
    nome: 'João',
    idade: 27
  },
  {
    nome: 'Maria',
    idade: 32
  },
  {
    nome: 'Carlos',
    idade: 19
  },
]

pessoas.map(pessoa => console.log(`${pessoa.nome} tem ${pessoa.idade} anos.`));