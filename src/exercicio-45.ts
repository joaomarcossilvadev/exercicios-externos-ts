type Pessoais = {
  nome: string,
  idade: number,
  cidade: string
}

type Conta = {
  email: string,
  plano: string,
  status: string
}

type Informacoes = Pessoais & Conta;

const usuarios: Informacoes[] = [
  {
    nome: 'João',
    idade: 27,
    cidade: 'Rio de Janeiro',
    email: 'joao@email.com',
    plano: 'Premium',
    status: 'ativo'
  },
  {
    nome: 'Maria',
    idade: 32,
    cidade: 'São Paulo',
    email: 'maria@email.com',
    plano: 'Básico',
    status: 'ativo'
  }
]

const mostrarDados  = (arr: Informacoes[]) => {
  return arr.map(usuario => {
    return `${usuario.nome} - ${usuario.idade} - ${usuario.cidade} - ${usuario.email} - ${usuario.plano} - ${usuario.status}`;
  })
}

console.log(mostrarDados(usuarios));