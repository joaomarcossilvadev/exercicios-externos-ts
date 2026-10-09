class Estoque {
  constructor(
    readonly produto: string,
    readonly quantidade: number,
  ){}
}

const produto1 = new Estoque('Teclado Gamer', 10);
const produto2 = new Estoque('Notbook Asus', 8_000);
const produto3 = new Estoque('Cadeira ergonomica', 500);

console.log(`${produto1.produto} - ${produto1.quantidade}`);
console.log(`${produto2.produto} - ${produto2.quantidade}`);
console.log(`${produto3.produto} - ${produto3.quantidade}`);