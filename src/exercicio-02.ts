function somar(x: number, y: number): number{
  return x + y;
}

function saudacao(nome: string): string {
  return `Olá, ${nome}`;
}

function ehMaiorDeIdade(idade: number): boolean{
  if(idade >= 18){
    return true;
  } else {
    return false;
  }
}

console.log(somar(10, 5));
console.log(saudacao('João'));
console.log(ehMaiorDeIdade(27));
console.log(ehMaiorDeIdade(15));