const verificarStatus = ( status: 'ativo' | 'inativo' | 'pendente' ): string => {
  if(status === 'ativo'){
    return 'Usuário ativo';
  } else if(status === 'inativo'){
    return 'Usuário inativo';
  } else if(status === 'pendente'){
    return 'Usuário pendente';
  }

  return 'Status não definido';
};

console.log(verificarStatus('ativo'));
console.log(verificarStatus('inativo'));
console.log(verificarStatus('pendente'));