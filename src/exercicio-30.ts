const processarPedido = (
  cliente: string,
  status: 'pendente' | 'pago' | 'cancelado',
  valor: unknown
): string => {
  if(typeof valor === 'number') {
    if(status === 'pendente'){
      return `Pedido de ${cliente} está ${status}: R$ ${valor}`;
    } else if(status === 'pago'){
      return `Pedido de ${cliente} está ${status}: R$ ${valor}`;
    } else if(status === 'cancelado'){
      return `Pedido de ${cliente} foi ${status}: R$ ${valor}`;
    } 
  } else {
    return 'Valor inválido';
  }


  return 'Status inválido';
}

console.log(processarPedido('João', 'pendente', 150));
console.log(processarPedido('Maria', 'pago', 300));
console.log(processarPedido('Carlos', 'cancelado', 500));
console.log(processarPedido('Fernanda', 'pago', '300'));
console.log(processarPedido('Roberto', 'pendente', true));