//Promises vieram para solucionar os problemas de callback.

//Executando de forma síncrona:
// stopHere('Fase 1', rand(0, 3))
// .then(value => {
//     console.log(value)
//     return stopHere("Fase 2", rand(0, 3))
// }) //Para pegar a outra Promise precisamos usar novamente um then()
// .then(phase => {
//     console.log(phase);
//     return stopHere("Fase", rand())
//     return phase
// }) //Para pegar a outra fase novamente vamos usar um then()
// .then(phase => {
//     console.log("Terminamos na fase:",
//         phase)
// }) //Tratando o erro com catch().
// .catch(e => console.log(e))

//Async e await vão permitir que a gente utilize Promises dentro do corpo da função como essa função fosse igual a de cima, de forma síncrona.

async function execution() { //Podemos englobar todas elas em um try catch, vai executar tudo no try, porém se der erro vai cair no catch().
    const level1 = await stopHere("Fase 1", rand())
    console.log(level1) //Depois que a Promise for resolvida ou rejeitada eu posso pegar o valor depois
    setTimeout(function() {
        console.log("Essa promise estava pendente:", level1)
    }, 11000);
    const level2 = await stopHere("Fase 2", rand())
    console.log(level2)
    const level3 = await stopHere("Fase 3", rand())
    console.log(level3)
    console.log("Terminamos na fase:", level3)
}
execution();

//pending -> quando você manda executar ela vai estar pendente.
//fullfilled -> Representação de sucesso/resolvida.
//rejected -> Quando a Promise foi rejeitada.