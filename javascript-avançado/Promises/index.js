function Sort(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function stopHere(msg, time) {
    return new Promise((resolve, reject) => { //Funções que vão ser chamadas dependendo do que ocorrer lá dentro.
         setTimeout(() => {
        resolve(msg);
    }, 2000);
    });
    //Resolve quer dizer -> Esse código executou com sucesso então resolve ele para mim.
    //Reject quer dizer -> Deu um erro no código então rejeita isso aqui para mim.
}

stopHere("Conexão com o B", rand(1, 3))
Sort("Frase 1", rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return stopHere("Buscando dados da BASE:", rand(1, 3));//Posso retornar outra Promise dentro desse then()
}).then((resposta) => {
    console.log(resposta);
    return stopHere("Tratando os dados da base:", rand(1, 3));
})
.then((resposta) => {
    console.log("Exibi os dados na tela:",resposta);
})
.catch(); 

//Sempre quando chamar o .then() o resolve será executado.
//Smepre quando chamar o .catch() o reject será executado, vai capturar o erro.


//Reject seria como se fosse o try catch porém a cada checkagem você não precisa checkar.
//Posso rejeitar com um new Error()

//catch é erro.

//Você cria uma Promise usando o construtor da Promise e você vai receber um parâmetro, que não precisa chamar nem o resolver e o reject

//Reject vai direto pro catch, é como se fosse um if else, o resolve é o if e o reject o else.