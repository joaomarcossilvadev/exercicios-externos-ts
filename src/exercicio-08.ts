const funcionarios: {
  nome: string,
  idade: number,
  salario: number,
  departamento: string
}[] = [
  { nome: 'Carlos', idade: 30, salario: 4400, departamento: 'Tecnologia' },
  { nome: 'Renata', idade: 27, salario: 9000, departamento: 'Financeiro' },
  { nome: 'Fernanda', idade: 40, salario: 20000, departamento: 'RH' },
  { nome: 'Bruno', idade: 50, salario: 10000, departamento: 'Marketing' }
];

function salariosAcimaDe(valorMinimo: number, obj: {
  nome: string,
  idade: number,
  salario: number,
  departamento: string
}[]): {
  nome: string,
  idade: number,
  salario: number,
  departamento: string
}[]{
  return obj.filter(funcionario => funcionario.salario >= valorMinimo);
};

function nomesDepartamento(nomeDepartamento: string, obj: {
  nome: string,
  idade: number,
  salario: number,
  departamento: string
}[]): string[]{
  return obj
    .filter(funcionario => funcionario.departamento === nomeDepartamento)
    .map(funcionario => funcionario.nome)
  ;
};

function folhaSalarial(obj: {
  nome: string,
  idade: number,
  salario: number,
  departamento: string
}[]): number{
  return obj.reduce((ac, funcionario) => {
    return ac + funcionario.salario;
  }, 0);
};

function funcionarioMaiorSalario(obj: {
  nome: string,
  idade: number,
  salario: number,
  departamento: string
}[]):  {
  nome: string,
  idade: number,
  salario: number,
  departamento: string
}{
  return obj.reduce((ac, funcionario) => {
    if(funcionario.salario > ac.salario){
      return funcionario;
    } else {
      return ac;
    }
  }, obj[0]!);
};

function mediaSalarialDepartamento(nomeDepartamento: string, obj: {
  nome: string,
  idade: number,
  salario: number,
  departamento: string
}[]): number{
  const funcionariosDoDepartamento = obj.filter(funcionario => funcionario.departamento === nomeDepartamento);
  return folhaSalarial(funcionariosDoDepartamento) / funcionariosDoDepartamento.length;
};

console.log(salariosAcimaDe(5000, funcionarios));
console.log(nomesDepartamento('Tecnologia', funcionarios));
console.log(folhaSalarial(funcionarios));
console.log(funcionarioMaiorSalario(funcionarios));
console.log(mediaSalarialDepartamento('Tecnologia', funcionarios));