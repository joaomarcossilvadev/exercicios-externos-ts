const alunos: {
  nome: string,
  idade: number,
  nota: number
}[] = [
  {nome: 'João Marcos', idade: 27, nota: 5},
  {nome: 'Fernanda', idade: 15, nota: 6},
  {nome: 'Roberto', idade: 20, nota: 8},
  {nome: 'Carlos', idade: 30, nota: 10},
  {nome: 'Bernardo', idade: 17, nota: 9}
];

function maiorNota(obj: {
  nome: string,
  idade: number,
  nota: number
}[]): {
  nome: string,
  idade: number,
  nota: number
} {
  return obj.reduce((ac, aluno) => {
    if(aluno.nota > ac.nota){
      return aluno;
    } else {
      return ac;
    }
  }, obj[0]!);
};

function calcularMedia(obj: {
  nome: string,
  idade: number,
  nota: number
}[]): number {
  const somaNotas = obj.reduce((ac, aluno) => {
    return ac + aluno.nota;
  }, 0);

  return somaNotas / obj.length;
};

function alunosAprovados(obj: {
  nome: string,
  idade: number,
  nota: number
}[]): {
  nome: string,
  idade: number,
  nota: number
}[] {
  return obj.filter(aluno => aluno.nota >= 7);
};

function nomesAlunos(obj: {
  nome: string,
  idade: number,
  nota: number
}[]): string[] {
  return obj.map(aluno => {
    return aluno.nome;
  });
}

console.log(maiorNota(alunos));
console.log(calcularMedia(alunos));
console.log(alunosAprovados(alunos));
console.log(nomesAlunos(alunos));