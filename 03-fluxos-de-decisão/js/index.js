//MINHA SOLUÇÃO:

const escolhaArea = prompt('Olá! Vamos começar com a pergunta mais importante...Você quer seguir na área de Front-End ? (Digite 1 ) ou Back-End? (Digite 2)');

if (escolhaArea == 1) {
    const escolhaEspecializacao = prompt('Legal! E você pretende se especializar em React ou Vue? Se quiser React DIGITE 1, se quiser Vue DIGITE 2.')
    if (escolhaEspecializacao == 1 || 2) {
        const escolhaReactOuVue = prompt('Ótima escolha! Se quiser seguir se especializando apenas nesta tecnologia, DIGITE 1.\nJá se sua vontade for se tornar um(a) Fullstack, DIGITE 2 .')

        if (escolhaReactOuVue == 1 || 2) {
            const escolhaDeTecnologias = prompt('Que bom, torcemos para que dê tudo certo! Aliás, existe mais alguma tecnologia que gostaria de aprender? Se SIM tecle 1, se NÃO tecle 2.')

            if (escolhaDeTecnologias == 1) {
                const aprenderTecnologia = prompt('Pode digitar aqui as tecnologias que gostaria de aprender:')

                alert('Excelente! Aprender ' + aprenderTecnologia + '. Vai ser muito importante para o seu desenvolvimento. \n Agradecemos sua participação neste Quiz!')

            } if (escolhaDeTecnologias == 2) {
                alert('Tudo bem! Desejamos que tenha uma excelente jornada na área que almeja trabalhar! \n Agradecemos muito sua participação no Quiz!')
            }
        }
    }
}else if (escolhaArea == 2) {
    const escolhaEspecializacao = prompt('Legal! E você pretende se especializar em C# ou Java? Se quiser C# DIGITE 1, se quiser Java DIGITE 2.')

    if (escolhaEspecializacao == 1 || 2) {
        const escolhaLinguagem = prompt('Ótima escolha! Se quiser seguir se especializando apenas nesta tecnologia, DIGITE 1.\nJá se sua vontade for se tornar um(a) Fullstack, DIGITE 2 .')

        if (escolhaLinguagem == 1 || 2) {
            const escolhaDeTecnologias = prompt('Que bom, torcemos para que dê tudo certo! Aliás, existe mais alguma tecnologia que gostaria de aprender? Se SIM tecle 1, se NÃO tecle 2.')

            if (escolhaDeTecnologias == 1) {
                const aprenderTecnologia = prompt('Pode digitar aqui as tecnologias que gostaria de aprender:')

                alert('Excelente! Aprender ' + aprenderTecnologia + '. Vai ser muito importante para o seu desenvolvimento.\n Agradecemos sua participação neste Quiz!')

            } if (escolhaDeTecnologias == 2) {
                alert('Tudo bem! Desejamos que tenha uma excelente jornada na área que almeja trabalhar! \n Agradecemos muito sua participação no Quiz!')
            }
        }
    }
}

//CORREÇÃO:

// const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
// let linguagem = "";
// if (area === "Front-End"){
//     linguagem = prompt("Você quer aprender React ou Vue?");
// }
// else if (area === "Back-End"){
//     linguagem = prompt("Você quer aprender C# ou Java?");
// }
// else {
//     alert("Você não inseriu uma área válida!");
// }

// const especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
// if (especialidadeOuFullstack == 1){
//     alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
// }
// else if (especialidadeOuFullstack == 2){
//     alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
// }
// else {
//     alert("Você não inseriu um valor válido!");
// }

// let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
// while (msg === "ok"){
//     let novaTecnologia = prompt("Qual?");
//     alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
//     msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
// }