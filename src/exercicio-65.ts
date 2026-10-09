class ContaBancaria {
  constructor(
    readonly titular: string,
    readonly saldo: number
  ){}
}

const conta1 = new ContaBancaria('João', 230);
const conta2 = new ContaBancaria('Maria', 670);

console.log(`${conta1.titular} - R$ ${conta1.saldo}`);
console.log(`${conta2.titular} - R$ ${conta2.saldo}`);