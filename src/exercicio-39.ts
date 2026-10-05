type Pagamento = {
  cliente: string,
  valor: number,
  formaPagamento: string
};

const pagamentos: Pagamento[] = [
  {
    cliente: 'João',
    valor: 500,
    formaPagamento: 'cartão'
  },
  {
    cliente: 'Maria',
    valor: 300,
    formaPagamento: 'pix'
  },
  {
    cliente: 'Carlos',
    valor: 750,
    formaPagamento: 'boleto'
  },
  {
    cliente: 'Ana',
    valor: 1_200,
    formaPagamento: 'cartão'
  },
  {
    cliente: 'Pedro',
    valor: 450,
    formaPagamento: 'pix'
  },
]

const MostrarTodosPagamentos = (arr: Pagamento[]) => {
  return arr.map(pagamento => {
    return `${pagamento.cliente} - R$ ${pagamento.valor} - ${pagamento.formaPagamento}`;
  });
}

const MostrarPagamentosCartao = (arr: Pagamento[]) => {
  return arr.filter(pagamento => pagamento.formaPagamento === 'cartão');
}

const calcularTotalPagamentos = (arr: Pagamento[]) => {
  return arr.reduce((ac, pagamento) => {
    return ac + pagamento.valor;
  }, 0)
}

console.log(MostrarTodosPagamentos(pagamentos));
console.log(MostrarPagamentosCartao(pagamentos));
console.log(calcularTotalPagamentos(pagamentos));