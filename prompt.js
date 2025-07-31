let prompt = require('prompt-sync')()

let moment = require('moment')

function atividadeNome(){
    let nome = prompt("Digite seu nome: ")
    let sobrenome = prompt("Digite seu sobrenome: ")
    let nomeCompleto = nome+" "+sobrenome
    console.log("bem vinde", nomeCompleto)
}

//atividadeNome()

function atividadeIdade(){
    let idade = parseInt(prompt("Digite sua idade: "))
    let idadeFutura = idade + 5

    console.log("Daqui 5 anos você terá:", idadeFutura)
}

//atividadeIdade()

function atividadeAnoNascimento(){
    let anoNascimento = parseInt(prompt("Digite o ano do seu nascimento: "))
    let idade = 2025 - anoNascimento
    console.log("Você tem ", idade)
}

function atividadeSoma(){
    let numero1 = parseInt(prompt("Digite um número: "))
    let numero2 = parseInt(prompt("Digite outro número: "))
    let soma = numero1 + numero2
    console.log("A soma dos números é: ", soma)
}

function atividadeMetrosParaKilometros(){
    let metros = parseFloat(prompt("Digite uma distância em metros: "))
    let kilometros = metros / 1000
    console.log("A distância em kilometros é: ", kilometros)
}

function atividadeNotas(){
    let nota1 = parseInt(prompt("Digite a primeira nota: "))
    let nota2 = parseInt(prompt("Digite a segunda nota: "))
    let media = (nota1 + nota2) / 2
    console.log("A média das notas é: ", media)
}

function atividadeTabuada(){
    let numero = parseInt(prompt("Digite um número: "))

    let tabuada1 = numero*1
    let tabuada2 = numero*2
    let tabuada3 = numero*3
    let tabuada4 = numero*4
    let tabuada5 = numero*5
    let tabuada6 = numero*6
    let tabuada7 = numero*7
    let tabuada8 = numero*8
    let tabuada9 = numero*9
    let tabuada10 = numero*10

    console.log("A tabua do número " + numero + 
        "é: \n" + numero + " x 1 = "+ tabuada1 + 
        "\n"+ numero + " x 2 = "+ tabuada2 + 
        "\n"+ numero + " x 3 = "+ tabuada3 + 
        "\n"+ numero + " x 4 = "+ tabuada4 + 
        "\n"+ numero + " x 5 = "+ tabuada5 + 
        "\n"+ numero + " x 6 = "+ tabuada6 + 
        "\n"+ numero + " x 7 = "+ tabuada7 + 
        "\n"+ numero + " x 8 = "+ tabuada8 + 
        "\n"+ numero + " x 9 = "+ tabuada9 + 
        "\n"+ numero + " x 10 = "+ tabuada10)
}

function dataAtualAmericana(){
    let dataAtual = moment().format()
    console.log(dataAtual)
}

function data7DiasAtras(){
    let data = moment().subtract(7, 'days').calendar()
    console.log(data)
}

function dataAtualBrasileiro(){
    let data = moment().format('DD/MM/YYYY')
    console.log(data)
}

function data2MesesAtras(){
    let data = moment().subtract(2, 'months').calendar()
    console.log(data)
}
data2MesesAtras()