class Curso {
  constructor(
    readonly nome: string,
    readonly instrutor: string,
    readonly duracaoHoras: number 
  ){}
}

const cursos: Curso[] = [
  {
    nome: 'Curso de js e ts',
    instrutor: 'Otavio Miranda',
    duracaoHoras: 600
  },
  {
    nome: 'Curso de PHP',
    instrutor: 'Mateus Batisti',
    duracaoHoras: 70
  },
  {
    nome: 'Curso de HTML e CSS',
    instrutor: 'Gustavo Guanabara',
    duracaoHoras: 40
  }
]

const MostrarInfo = (arr: Curso[]) => {
  return arr.map(curso => `${curso.nome} - ${curso.instrutor} - ${curso.duracaoHoras}`);
}

const cursoMaiorDuracao = (arr: Curso[]) => {
  return arr.reduce((ac: Curso, curso) => {
    if(ac.duracaoHoras > curso.duracaoHoras){
      return ac;
    } else {
      return curso;
    }
  }, arr[0]!)
}

console.log(MostrarInfo(cursos));
console.log(cursoMaiorDuracao(cursos));
