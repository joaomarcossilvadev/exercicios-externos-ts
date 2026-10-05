type Funcionario = {
  nome: string,
  profissao: string,
  cargo: string,
  salario: number
};

const funcionarios: Funcionario[] = [
  {
    nome: 'João',
    profissao: 'Desenvolvedor',
    cargo: 'Front-end',
    salario: 5_000
  },
  {
    nome: 'Maria',
    profissao: 'Designer',
    cargo: 'UI/UX',
    salario: 4_500
  },
  {
    nome: 'Carlos',
    profissao: 'Desenvolvedor',
    cargo: 'Back-end',
    salario: 6_000
  },
  {
    nome: 'Ana',
    profissao: 'Analista',
    cargo: 'Dados',
    salario: 5_500
  },
  {
    nome: 'Pedro',
    profissao: 'Desenvolvedor',
    cargo: 'Front-end',
    salario: 5_200
  }
];

const MostrarTodos = (arr: Funcionario[]) => {
  return arr.map(funcionario => {
    return `${funcionario.nome} - ${funcionario.cargo} - R$ ${funcionario.salario}`;
  })
}

const MostrarDesenvolvedores = (arr: Funcionario[]) => {
  return arr
    .filter(funcionario => funcionario.profissao === 'Desenvolvedor')
    .map(funcionario => funcionario.nome)
  ;
}

const calcularSalarioDesenvolvedores = (arr: Funcionario[]) => {
  const desenvolvedores = arr.filter(funcionario => funcionario.profissao === 'Desenvolvedor')
  return desenvolvedores.reduce((ac, funcionario) => {
    return ac + funcionario.salario;
  }, 0)
}

console.log(MostrarTodos(funcionarios));
console.log(MostrarDesenvolvedores(funcionarios));
console.log(calcularSalarioDesenvolvedores(funcionarios));