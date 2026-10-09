

class Aluno {
  constructor(
    readonly nome: string,
    readonly nota: number
  ){}
}

const aluno1 = new Aluno('Mateus', 10);
const aluno2 = new Aluno('Fernanda', 5);
const aluno3 = new Aluno('Carla', 6);

console.log(`Aluno: ${aluno1.nome} - Nota: ${aluno1.nota}`);
console.log(`Aluno: ${aluno2.nome} - Nota: ${aluno2.nota}`);
console.log(`Aluno: ${aluno3.nome} - Nota: ${aluno3.nota}`);