const alunos: {
  nome: string;
  idade: number;
  nota1: number;
  nota2: number;
}[] = [
  { nome: 'Carlos', idade: 15, nota1: 5, nota2: 7 },
  { nome: 'Fernando', idade: 12, nota1: 8, nota2: 10 },
  { nome: 'Renata', idade: 16, nota1: 5, nota2: 3 },
  { nome: 'Carla', idade: 14, nota1: 2, nota2: 1 },
  { nome: 'Roberta', idade: 10, nota1: 6, nota2: 7 },
];

function calcularMedia(nome: string, obj: {
  nome: string;
  idade: number;
  nota1: number;
  nota2: number;
}[]): number{
  const alunoEncontrado = obj.find(aluno => aluno.nome === nome);
  if(!alunoEncontrado){
    return 0;
  } else {
    return (alunoEncontrado.nota1 + alunoEncontrado.nota2) / 2;
  }
}

function alunosAprovados(obj: {
  nome: string;
  idade: number;
  nota1: number;
  nota2: number;
}[]): {
  nome: string;
  idade: number;
  nota1: number;
  nota2: number;
}[] {
  return obj.filter(aluno => calcularMedia(aluno.nome, obj) >= 7);
}

function nomesAprovados(obj: {
  nome: string;
  idade: number;
  nota1: number;
  nota2: number;
}[]): string[] {
  return alunosAprovados(obj).map(aluno => aluno.nome);
}

function maiorMedia(obj: {
  nome: string;
  idade: number;
  nota1: number;
  nota2: number;
}[]): {
  nome: string;
  idade: number;
  nota1: number;
  nota2: number;
} {

  return obj.reduce((ac, aluno) => {
    if(calcularMedia(aluno.nome, obj) > calcularMedia(ac.nome, obj)){
      return aluno;
    } else {
      return ac;
    }
  }, obj[0]!);

}

console.log(calcularMedia('Fernando', alunos));
console.log(alunosAprovados(alunos));
console.log(nomesAprovados(alunos));
console.log(maiorMedia(alunos));