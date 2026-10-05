const formatarProduto = (
  categoria: 'eletronico' | 'roupa' | 'alimento',
  preco: number | null
): string => {
  if(preco === null) return 'Preço não informado';

  if(categoria === 'eletronico'){
    return `Produto eletrônico: R$ ${preco}`;
  } else if(categoria === 'roupa'){
    return `Produto de roupa: R$ ${preco}`;
  } else if(categoria === 'alimento'){
    return `Produto alimenticio: R$ ${preco}`;
  }

  return 'Categoria inválida';
}

console.log(formatarProduto('eletronico', 1500));
console.log(formatarProduto('roupa', 200));
console.log(formatarProduto('alimento', 50));
console.log(formatarProduto('eletronico', null));