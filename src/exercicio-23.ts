const formatarNome = (nome: string | null): string => {
  if(typeof nome === 'string') return `Nome: ${nome}`;

  return 'Nome não informado';
}

console.log(formatarNome('João'));
console.log(formatarNome('Maria'));
console.log(formatarNome(null));