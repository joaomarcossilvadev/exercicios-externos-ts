const resposta: unknown = {
  id: 10,
  nome: 'João',
  email: 'joao@email.com',
  ativo: true
};

const respostaConvertida = resposta as {
  id: number,
  nome: string,
  email: string,
  ativo: boolean
};

const dadosUsuario = (obj: {
  id: number,
  nome: string,
  email: string,
  ativo: boolean
}) => {
 return `Usuário ${obj.id}: ${obj.nome} - ${obj.email} - ${obj.ativo ? 'Ativo' : 'Inativo'}`;
}

console.log(dadosUsuario(respostaConvertida));