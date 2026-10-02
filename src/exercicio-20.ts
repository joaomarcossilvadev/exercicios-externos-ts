// const usuarios: {
//   nome: string;
//   email: string | null;
// }[] = [
//   {
//     nome: 'João',
//     email: 'joao@email.com'
//   },
//   {
//     nome: 'Maria',
//     email: 'maria@email.com'
//   },
//   {
//     nome: 'Carlos',
//     email: null
//   },
//   {
//     nome: 'Fernanda',
//     email: 'fernanda@email.com'
//   },
//   {
//     nome: 'Roberto',
//     email: 'roberto@email.com'
//   }
// ];

// const lancarErro = (msg: string): never => {
//   throw new Error(msg);
// };

// const buscarEmailUsuario = (nomeUsuario: string, obj: {
//   nome: string;
//   email: string | null;
// }[]): string => {
//   const usuarioEncontrado = obj.find(usuario => usuario.nome === nomeUsuario);
//   if(!usuarioEncontrado){
//     lancarErro('Usuário não encontrado');
//   } else if(usuarioEncontrado.email === null){
//     lancarErro('Usuário não possui e-mail');
//   } else {
//     return usuarioEncontrado.email;
//   }
// };

// console.log(buscarEmailUsuario('João', usuarios));
// console.log(buscarEmailUsuario('Maria', usuarios));
// console.log(buscarEmailUsuario('Pessoa Inexistente', usuarios));