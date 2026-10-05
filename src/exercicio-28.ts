const processarPagamento = (
  metodo: 'pix' | 'cartao' | 'boleto',
  valor: unknown
): string => {
  if(typeof valor === 'number'){
    if(metodo === 'pix'){
      return `Pagamento via PIX: R$ ${valor}`;
    } else if(metodo === 'cartao'){
      return `Pagamento via cartão: R$ ${valor}`;
    } else if(metodo === 'boleto'){
      return `Pagamento via boleto: R$ ${valor}`;
    }
  } else {
    return 'Valor inválido';
  }

  return 'Método de pagamento Inválido';
}

console.log(processarPagamento('pix', 100));
console.log(processarPagamento('cartao', 250));
console.log(processarPagamento('boleto', 80));
console.log(processarPagamento('pix', '100'));
console.log(processarPagamento('cartao', true));
// console.log(processarPagamento('bitcoin', 100));