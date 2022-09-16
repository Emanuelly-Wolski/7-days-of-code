const nome = prompt('Qual o seu nome?')
const idade = prompt('Quantos anos você tem?')
const cidade = prompt('Em qual cidade você mora?')

const mensagem = ('Olá ' + nome + ' ! ' + ' Através do que você nos contou, sabemos que tem ' + idade + ' anos,' + ' e mora em ' + cidade + '.' )

alert(mensagem)

trabalhaCidade = prompt('Você trabalha em ' + cidade + ' ? Se SIM, responda com o número 1, se NÃO, responda com o número 2')

if(trabalhaCidade == 1){
    alert('Que bom! Deve ser muito mais prático para você.')
}if(trabalhaCidade == 2){
    alert('Ahh puxa vida! Pelo menos você pode conhecer novos lugares.')
}
