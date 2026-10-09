class Carro {
  constructor(
    readonly marca: string,
    readonly modelo: string,
    readonly ano: number
  ){}
}

const carro1 = new Carro('Toyota', 'Corolla', 2002);
const carro2 = new Carro('Honda', 'Civic', 2023);

console.log(`${carro1.modelo} - ${carro1.marca} - ${carro1.ano}`);
console.log(`${carro2.modelo} - ${carro2.marca} - ${carro2.ano}`);