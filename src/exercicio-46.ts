type Funcionario = {
  nome: string,
  idade: number,
  cargo: string,
  salario: number
};

type DadosFuncionario = (obj: Funcionario) => string;

const usuario1 = {
  nome: 'João',
  idade: 27,
  cargo: 'Desenvolvedor',
  salario: 5_000
}

const usuario2 = {
  nome: 'Maria',
  idade: 32,
  cargo: 'Designer',
  salario: 4_500
}

const exibirDados: DadosFuncionario = (obj) => {
  return `${obj.nome} é ${obj.cargo} e recebe R$ ${obj.salario}`;
}

console.log(exibirDados(usuario1));
console.log(exibirDados(usuario2));