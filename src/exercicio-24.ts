const processarValor = (valor: unknown): string => {
  if(typeof valor === 'string'){
    return `Texto: ${valor}`;
  } else if(typeof valor === 'number'){
    return `Número: ${valor}`;
  } else if(typeof valor === 'boolean'){
    return `Booleano: ${valor}`;
  }

  return 'Tipo não suportado';
}

console.log(processarValor('João'));
console.log(processarValor(27));
console.log(processarValor(true));
console.log(processarValor(null));
console.log(processarValor(undefined));