const valor: unknown = 27;
const idade = valor as number;
const idadeDaquiCinco = idade + 5;

console.log(`Idade atual: ${idade}`);
console.log(`Daqui a 5 anos: ${idadeDaquiCinco}`);