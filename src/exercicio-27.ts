const verificarNivel = (nivel: unknown): string => {
  
  if(typeof nivel === 'string') {
    if(nivel === 'admin'){
      return 'Acesso administrativo';
    } else if(nivel === 'usuario'){
      return 'Acesso de usuário';
    } else if(nivel === 'visitante'){
      return 'Acesso de visitante';
    } 
  } else {
    return 'Nível inválido';
  }

  return 'Nivel não reconhecido';
}

console.log(verificarNivel('admin'));
console.log(verificarNivel('usuario'));
console.log(verificarNivel('visitante'));
console.log(verificarNivel('moderador'));
console.log(verificarNivel(10));
console.log(verificarNivel(true));
