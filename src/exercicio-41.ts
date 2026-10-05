type DadosPessoais = {
  nome: string,
  idade: number
}

type DadosProfissionais = {
  cargo: string,
  salario: number
}

type Dados = DadosPessoais & DadosProfissionais;

const funcionario: Dados = {
  nome: 'João',
  idade: 27,
  cargo: 'Desenvolvedor',
  salario: 5_000
} 

console.log(`${funcionario.nome}, ${funcionario.idade} anos, é ${funcionario.cargo} e recebe R$ ${funcionario.salario}`);