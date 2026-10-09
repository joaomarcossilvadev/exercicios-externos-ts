class Filme {
  constructor(
    readonly titulo: string,
    readonly genero: string,
    readonly duracao: number
  ){}
}

const filme1 = new Filme('Batman 2020', 'ação', 150);
const filme2 = new Filme('Homem Aranha', 'ação', 250);

console.log(`${filme1.titulo} - ${filme1.genero} - ${filme1.duracao} minutos`);
console.log(`${filme2.titulo} - ${filme2.genero} - ${filme2.duracao} minutos`);