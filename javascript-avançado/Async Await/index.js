//Promises vieram para solucionar os problemas de callback.

//Executando de forma síncrona:
stopHere('Fase 1', rand(0, 3))
.then(value => {
    console.log(value)
    return stopHere("Fase 2", rand(0, 3))
}) //Para pegar a outra Promise precisamos usar novamente um then()
.then(phase => {
    console.log(phase);
    return stopHere("Fase", rand())
    return phase
}) //Para pegar a outra fase novamente vamos usar um then()
.then(phase => {
    console.log("Terminamos na fase:",phase)
}) //Tratando o erro com catch().
.catch(e => console.log(e))
