type Usuario = {
  nome: string,
  idade: number,
  permissao: string
}

const usuarios: Usuario[] = [
  {
    nome: 'João',
    idade: 40,
    permissao: 'adminstrador'
  },
  {
    nome: 'Maria',
    idade: 25,
    permissao: 'editor'
  },
  {
    nome: 'Carlos',
    idade: 27,
    permissao: 'usuário'
  },
  {
    nome: 'Ana',
    idade: 30,
    permissao: 'adminstrador'
  },
];


const mostrarTodosUsuarios = usuarios.map(usuario => {
  return `${usuario.nome} - ${usuario.permissao}`;
});

const mostrarAdmins = usuarios
  .filter(usuario => usuario.permissao === 'adminstrador')
  .map(usuario => usuario.nome);
;

console.log(mostrarTodosUsuarios);
console.log(mostrarAdmins);