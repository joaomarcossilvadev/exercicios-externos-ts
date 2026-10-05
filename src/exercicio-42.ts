type Usuario = {
  nome: string,
  idade: number
}

type Conta = {
  email: string,
  saldo: number,
  ativo: boolean
}

type Dados = Usuario & Conta;

const usuario1: Dados = {
  nome: 'Maria',
  idade: 32,
  email: 'maria@email.com',
  saldo: 2_500,
  ativo: true
}

console.log(`${usuario1.nome}, ${usuario1.idade} anos, email: ${usuario1.email}, saldo: R$ ${usuario1.saldo}, conta ativa: ${usuario1.ativo}`);