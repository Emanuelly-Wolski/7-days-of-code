const nome = prompt('Qual o seu nome?');
const idade = prompt('Qual a sua idade?');
const linguagem = prompt('Qual linguagem de programação você está estudando?');
const mensagem = ('Olá ' + nome + '!' + ' Você tem ' + idade + ' anos e já está aprendendo ' + linguagem + '!');

alert(mensagem);

const gosta = prompt('Você gosta de estudar ' + linguagem + '?' + ' Responda com o número 1 - SIM ou 2 - NÃO');
if(gosta == 1){
    alert('Muito bom! Continue estudando e você vai ter muito sucesso.');
}if(gosta == 2){
    alert('Ahh que pena... Já tentou aprender outra linguagem?');
}