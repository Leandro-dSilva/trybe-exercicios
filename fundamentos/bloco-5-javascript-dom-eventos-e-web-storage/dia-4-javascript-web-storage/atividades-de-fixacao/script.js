
console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
localStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
console.log(localStorage.getItem("lastname")) // retorna o valor "Smith"
console.log(localStorage.length) // possui duas entradas, então o retorno é o valor: 2
localStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
console.log(localStorage.length) // possui uma entrada, então o retorno é o valor: 1
localStorage.clear() // limpa todas as entradas salvas em localStorage
console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0

// Parte II

let organization = {
  name: "trybe",
  since: 2019
}

// objeto "storage" pode ser localStorage ou sessionStorage
localStorage.setItem("trybe", JSON.stringify(organization)) // stringify transformou o objeto (qquer elemento javascript) organization em uma string.
console.log(typeof JSON.stringify(organization));

let org = JSON.parse(localStorage.getItem("trybe")) // parse transformou a chave "trybe" de volta em um objeto
console.log(typeof org) // { name: "trybe", since: 2019 }

let classes = ["2019/set", "2019/oct"]
// console.log(classes);

localStorage.setItem("x", JSON.stringify(classes))
// console.log(x);

let cls = JSON.parse(localStorage.getItem("x"))
console.log(cls) // ["2019/set", "2019/oct"] 
console.log(typeof cls)