const calcularFrete = (
  tipo: 'normal' | 'expresso' | 'retirada', 
  valor: number | null
): string => {

  if(valor === null) return 'Valor da compra não informado';

  if(tipo === 'normal'){
    return 'Frete normal: R$ 20';
  } else if(tipo === 'expresso'){
    return 'Frete expresso: R$ 40';
  } else if(tipo === 'retirada'){
    return 'Retirada grátis';
  }

  return 'Tipo de frete não definido';
}

console.log(calcularFrete('normal', 200));
console.log(calcularFrete('expresso', 500));
console.log(calcularFrete('retirada', 100));
console.log(calcularFrete('normal', null));