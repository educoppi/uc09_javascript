let prompt = require("prompt-sync")()

function entradaESaida(){
    let nome = prompt("Digite seu nome: ")
    let idade = parseInt(prompt("Digite sua idade: "))

    console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
}

//entradaESaida()

function decisao(){
    let numero = parseInt(prompt("Digite um número: "))

    if(numero % 2 == 0){
        console.log("Par")
    }else{
        console.log("Impar")
    }
}

//decisao()

function repeticao(){
    for(let i = 1; i < 11; i++){
        console.log(i)
    }
}

//repeticao()

function array(){
    let numeros = [5, 8, 12]

    let soma = 0
    for(let i = 0; i < numeros.length; i++){
        soma = soma + numeros[i]
    }

    console.log(`Soma: ${soma}`)
}

//array()

function objeto(){
    aluno = {
        nome: "Eduardo",
        idade: 20,
        curso: "Técnico em Informática"
    }

    console.log(`Nome: ${aluno.nome}  || Curso: ${aluno.curso}`)
}

// objeto()


const numeros = [2, 6, 10, 11, 21]

function primeiroMultiploDeCinco(lista){
    for(let i = 0; i < lista.length; i++){
        if(lista[i] % 5 == 0){
            return lista[i]
        }
    }

    return "Não tem"
}

//console.log(primeiroMultiploDeCinco(numeros))

function igualDez(numero){
    if(numero === 10){
        return true
    }else{
        return false
    }
}

function primeiroNumMaiorDez(lista){
    for(let i = 0; i < lista.length; i++){
        if(igualDez(lista[i])){
            return lista[i]
        }
    }

    return "Não tem"
}

console.log(primeiroNumMaiorDez(numeros))