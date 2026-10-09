class Pedido {
  constructor(
    readonly numero: number,
    readonly cliente: string,
    readonly valorTotal: number
  ){}
}

const pedido1 = new Pedido(20260716, 'João', 1_900);
const pedido2 = new Pedido(20260908, 'Fernanda', 10_000);
const pedido3 = new Pedido(20251205, 'Mateus', 500);

console.log(`Pedido n°: ${pedido1.numero} - Cliente: ${pedido1.cliente} - Total: R$ ${pedido1.valorTotal}`);
console.log(`Pedido n°: ${pedido2.numero} - Cliente: ${pedido2.cliente} - Total: R$ ${pedido2.valorTotal}`);
console.log(`Pedido n°: ${pedido3.numero} - Cliente: ${pedido3.cliente} - Total: R$ ${pedido3.valorTotal}`);