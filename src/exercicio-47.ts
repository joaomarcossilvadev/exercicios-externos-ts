type Pessoais = {
  nome: string,
  idade: number,
  cidade: string
}

type Profissionais = {
  cargo: string,
  salario: number
}

type Dados = Pessoais & Profissionais;

const usuario1: Dados = {
  nome: 'João',
  idade: 27,
  cidade: 'Rio de Janeiro',
  cargo: 'Desenvolvedor',
  salario: 5_000
};

const usuario2: Dados = {
  nome: 'Maria',
  idade: 32,
  cidade: 'São Paulo',
  cargo: 'Designer',
  salario: 4_500
};

const usuario3: Dados = {
  nome: 'Carlos',
  idade: 24,
  cidade: 'Belo Horizonte',
  cargo: 'Suporte',
  salario: 3_000
};

const mostrarDados = (obj: Dados): string => {
  return `${obj.nome} - ${obj.cargo} - R$ ${obj.salario} - ${obj.cidade}`;
}

console.log(mostrarDados(usuario1));
console.log(mostrarDados(usuario2));
console.log(mostrarDados(usuario3));