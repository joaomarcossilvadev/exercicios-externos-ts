type Usuario = {
  nome: string,
  idade: number,
  cargo: string,
  status: string
}

const usuarios: Usuario[] = [
  {
    nome: 'João',
    idade: 27,
    cargo: 'Desenvolvedor',
    status: 'ativo'
  },
  {
    nome: 'Maria',
    idade: 32,
    cargo: 'Designer',
    status: 'ativo'
  },
  {
    nome: 'Carlos',
    idade: 24,
    cargo: 'Suporte',
    status: 'inativo'
  },
  {
    nome: 'Ana',
    idade: 29,
    cargo: 'Desenvolvedora',
    status: 'ativo'
  },
  {
    nome: 'Pedro',
    idade: 35,
    cargo: 'Gerente',
    status: 'ativo'
  },
];

const mostrarTodos = (arr: Usuario[]) => {
  return arr;
}

const mostrarAtivos = (arr: Usuario[]) => {
  return arr.filter(usuario => usuario.status === 'ativo');
}

const mostrarDevs = (arr: Usuario[]) => {
  return arr.filter(usuario => usuario.cargo === 'Desenvolvedor');
}

const mediaIdadeAtivos = (arr: Usuario[]) => {
  const filtrarAtivos = mostrarAtivos(arr);
  const somarAtivos = filtrarAtivos.reduce((ac, usuario) => {
    return ac + usuario.idade;
  }, 0)

  return somarAtivos / filtrarAtivos.length;
}

const exibirMensagem = (obj: Usuario[]) => {
  return obj.map(usuario => `${usuario.nome} é ${usuario.cargo} e está ${usuario.status}`);
}

console.log(mostrarTodos(usuarios));
console.log(mostrarAtivos(usuarios));
console.log(mostrarDevs(usuarios));
console.log(mediaIdadeAtivos(usuarios));

console.log(exibirMensagem(usuarios));