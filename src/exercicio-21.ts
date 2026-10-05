const mostrarValor = (valor: unknown): string => {
  if(typeof valor === 'string') return `Texto: ${valor}`;
  
  return `O valor deve ser uma string`;
};

console.log(mostrarValor('João'));
console.log(mostrarValor(27));
console.log(mostrarValor(true));