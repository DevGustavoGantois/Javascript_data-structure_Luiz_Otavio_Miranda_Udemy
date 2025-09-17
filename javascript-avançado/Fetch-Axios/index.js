fetch('pessoas.json') //fetch para buscar os dados
.then(response => response.json()) //Aqui retorna uma nova promise.
.then(json => loadingElementsPage(json));

function loadingElementsPage(json) {
    const table = document.createElement("table"); //parar criar um elemento de tabela
    for (let person of json) { //for para percorrer o json.
        const tr = document.createElement("tr");

        let td = document.createElement("td");
        td.innerHTML = person.name; //para mostrar a person.name na tabela:
        tr.appendChild(td) //para inserir o tr dentro do td (inserir o elemento filho).

        td = document.createElement("td");
        td.innerHTML = person.age;
        tr.appendChild(td)

        td = document.createElement("td");
        td.innerHTML = person.salary;
        tr.appendChild(td)

        table.appendChild(tr);

        console.log(person.name);
    }

    const result = document.querySelector(".result");
    result.appendChild(table);
}


//AXIOS:

axios("pessoa.json") //Passa direto e em vez de passar o .json passa o .data
.then(response => loadingElementsPage(response.data))