const botao = document.querySelector('#btn');
const botaoConvertido = botao as HTMLButtonElement;

botaoConvertido.textContent = 'Cadastrado!';
console.log(botaoConvertido.textContent);