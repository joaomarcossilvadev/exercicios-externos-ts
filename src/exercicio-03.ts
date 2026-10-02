// Parte 1
// const notas: number[] = [5, 8, 6, 2, 7];

// console.log(notas);

// const somaNotas = notas.reduce((ac, nota) => {
//   return ac + nota;
// });

// const media = somaNotas / notas.length;

// console.log(media);

// Parte 2
const nomes: string[] = ['Maria', 'Joana', 'Roberto', 'João', 'Magno'];

nomes.forEach(nome => {
  console.log(nome);
});

const nomesComCincoLetras = nomes.filter(nome => nome.length > 5);

console.log(nomesComCincoLetras);
