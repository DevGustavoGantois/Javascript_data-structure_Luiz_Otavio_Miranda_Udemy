//Promise.all Promise.race Promise.resolve Promise.reject

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function stopHere(msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false); //Se eu quero que a função pare de executar eu dou return;

        setTimeout(() => {
            resolve(msg)
        }, time);
    })
}

const promises = [
"Primeiro valor",
stopHere('Primeira promise'),
stopHere("Promise 2", 500),
stopHere("Promise 3", 1000),
"Outro valor"
];

//Resolva todas as promises e retorne 1 then
Promise.all(promises)
.then(function(value) {
    console.log(value)
})
.catch(function(erro) {
    console.log(erro)
}); //Para capturar qualquer erro que tenha no caminho.

//Temos o Promise.race que vai ser tipo uma corrida, a primeira que ela resolver, ela me entrega, sempre vai entregar o primeiro valor.
Promise.race(promises)
.then(function(value) {
    console.log(value)
})
.catch(function(erro) {
    console.log(erro)
});

//Promise.resolve espera que o que seja retornado dela seja uma promessa, já vou entregar uma promessa resolvida.

function downloadPage() {
    const inCache = true; //Se a página estiver em cache vai gerar uma promessa rejeitada, promise.reject()

    if (inCache) {
        return Promise.resolve("Página em cache")
    }
    else {
        return stopHere("Baixei a página", 3000)
    }
}

downloadPage()
.then(dataPage => {
    console.log(dataPage);
})
.catch(e => console.log("ERRO" ,e))

//Sempre quando botamos um reject na promise ele dará página em Cache.

//Promise.all() ele pega e checka todas as promessas do array resolvidas, se der falha ele vai te retornar a falha, ou temos Promise.race() ele vai pegar a 1 Promessa e vai resolver direto, ele vai retornar resolvida ou vai retornar rejeitada
//no then quando for positivo e se der erro vai cair no catch() e tratar o erro.