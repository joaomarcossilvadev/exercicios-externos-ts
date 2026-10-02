const produtos: {

  nome: string,

  preco: number

}[] = [

    {

      nome: 'Teclado',

      preco: 250

    },

    {

      nome: 'Mouse',

      preco: 150

    },

    {

      nome: 'Monitor',

      preco: 1200

    },

    {

      nome: 'Notebook',

      preco: 3500

    },

    {

      nome: 'Headset',

      preco: 300

    }

  ];

const buscarProduto = (nomeProduto: string, obj: {

  nome: string,

  preco: number

}[]): {

  nome: string,

  preco: number

} | undefined => {

  return obj.find(produto => produto.nome === nomeProduto);

}

console.log(buscarProduto('Teclado', produtos));

console.log(buscarProduto('Celular', produtos));