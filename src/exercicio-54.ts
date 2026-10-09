const usuario: unknown = {
  nome: 'Maria',
  idade: 32,
  cargo: 'Designer'
};

const usuarioConvertido = usuario as {
  nome: string,
  idade: number,
  cargo: string
};

console.log(`${usuarioConvertido.nome} tem ${usuarioConvertido.idade} anos e trabalha como ${usuarioConvertido.cargo}.`);