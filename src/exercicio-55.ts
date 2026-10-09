const valores: unknown = [10, 20, 30, 40, 50];

const listaNumeros = valores as number[];

const somaNumeros = listaNumeros.reduce((ac, numero) => {
  return ac + numero;
});

console.log(`Soma: ${somaNumeros}`);