const verificarStatus = (status: string): string => {
  switch(status){
    case 'sucesso':
      return 'Operação realizada com sucesso';
    case 'erro':
      return 'Ocorreu um erro'
    case 'pendente':
      return 'Operação pendente';
    default:
      return lancarErro('Status inválido');
  }
}

const lancarErro = (msg: string): never => {
  throw new Error(msg);
};

console.log(verificarStatus("sucesso"));
console.log(verificarStatus("erro"));
console.log(verificarStatus("pendente"));
console.log(verificarStatus("cancelado"));