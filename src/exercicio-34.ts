type Funcionario = {
  nome: string,
  cargo: string,
  salario: number,
  ativo: boolean
};

const funcionarios: Funcionario[] = [
  {
    nome: 'João',
    cargo: 'Desenvolvedor',
    salario: 5_000,
    ativo: true
  },
  {
    nome: 'Maria',
    cargo: 'Designer',
    salario: 42_000,
    ativo: true
  },
  {
    nome: 'Carlos',
    cargo: 'Suporte',
    salario: 3_000,
    ativo: false
  },
  {
    nome: 'Ana',
    cargo: 'Desenvolvedora',
    salario: 5_500,
    ativo: true
  },
];

funcionarios
  .filter(funcionario => funcionario.ativo === true)
  .map(funcionario => console.log(`${funcionario.nome} - ${funcionario.cargo} - R$ ${funcionario.salario}`))
;