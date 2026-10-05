type Profissional = {
  nome: string,
  idade: number,
  profissao: string
  empresa: string
}

const pessoa: Profissional = {
  nome: 'João',
  idade: 27,
  profissao: 'Desenvolvedor',
  empresa: 'Tech Solutions'
}

console.log(`${pessoa.nome}, ${pessoa.idade} anos, é ${pessoa.profissao} na empresa ${pessoa.empresa}.`);