const buscarUsuario = (id: number): string | undefined => {
  if(id === 1){
    return 'João';
  } else if(id === 2){
    return 'Maria'
  } else {
    return undefined;
  }
};

console.log(buscarUsuario(1));
console.log(buscarUsuario(2));
console.log(buscarUsuario(3));