//Essa página 1 já vai me retornar uma promise, que vem padrão do javascript
fetch("pagina1.html")
.then(response => { //A resposta não vem os dados prontos do que eu preciso, eu preciso converter os dados que eu precisar.
    if (response.status !== 200) throw new Error("ERRO 404 NOSSO")
        return response.text(); //Essa função retorna outra Promise, então tem que ter outro then:
})
.then(html => console.log(html))
.catch(e => console.log(e)) //Console.log() só aparece os erros na tela, se você quiser os erros vermelhos você da console.warn:
.catch(e => console.warn(e)). //Para avisos.
catch(e => console.error(e)); //Para erros.

async function loadingPage(el) {
    try {
        const href = el.getAttribute("href");
    const response = await fetch(href)
    const html = await response.text();
    loadingPage(href);
       fetch(href)
    .then(response => {
        if(response.status !== 200) throw new Error("ERRO 404!")
        response.text()
    })
    .then(html => loadingPage(html))
    .catch(e => console.log(e));
    } catch (e) {
        console.log(e)
    }
} 