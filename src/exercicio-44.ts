type Pessoais = {
  nome: string,
  idade: number
}

type Profissionais = {
  cargo: string,
  departamento: string,
  salario: number
}

type Informacoes = Pessoais & Profissionais;

const usuarios: Informacoes[] = [
  { nome: 'João',
    idade: 27,
    cargo: 'Desenvolvedor',
    departamento: 'Tecnologia',
    salario: 5_000
  }, 
  { nome: 'Maria',
    idade: 32,
    cargo: 'Designer',
    departamento: 'Design',
    salario: 4_500
  }, 
]
  
const mostrarUsuarios  = (arr: Informacoes[]) => {
  return arr.map(usuario => {
    return `${usuario.nome} - ${usuario.cargo} - ${usuario.departamento} - R$ ${usuario.salario}`
  })
}

console.log(mostrarUsuarios(usuarios));