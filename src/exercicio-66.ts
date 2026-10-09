class Funcionario {
  constructor(
    readonly nome: string,
    readonly cargo: string,
    readonly salario: number
  ){}
}

const funcionario1 = new Funcionario('João', 'Front end Jr', 5_620);
const funcionario2 = new Funcionario('Carla', 'Suporte', 2_620);
const funcionario3 = new Funcionario('Fernando', 'Estagiario', 1_900);

console.log(`${funcionario1.nome} - ${funcionario1.cargo} - R$ ${funcionario1.salario}`);
console.log(`${funcionario2.nome} - ${funcionario2.cargo} - R$ ${funcionario2.salario}`);
console.log(`${funcionario3.nome} - ${funcionario3.cargo} - R$ ${funcionario3.salario}`);