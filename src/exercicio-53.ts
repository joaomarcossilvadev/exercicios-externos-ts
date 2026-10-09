const produto: unknown = {
  nome: 'Notebook',
  preco: 3500
};

const produtoConvertido = produto as {
  nome: string,
  preco: number
};

console.log(`Produto: ${produtoConvertido.nome}`);
console.log(`Produto: ${produtoConvertido.preco}`);