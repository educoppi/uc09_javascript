let prompt = require('prompt-sync')()
/* let idade = 15

if(idade > 18){
    console.log("Já pode tirar CNH")
}else{
    console.log("Não vai nao")
}
 */
/* let senha = prompt("Digite a senha: ")

if ( senha == "admin" ){
    console.log("Acesso concedido!")
}else{
    console.log("Acesso Negado...")
} */

function kiloPeixe(){
    
    let kiloPeixe = parseInt(prompt("Digite o kilo do seu pexe: "))
    let preco
    if(kiloPeixe > 100){
        preco = kiloPeixe * 55.90
        console.log("Custa R$" + preco.toFixed(2))
    }else{
        preco = kiloPeixe * 50
        console.log("Custa R$" + preco.toFixed(2))
    }
    
}

function positivoOuNegativo(){
    let numero = parseInt(prompt("Digite um número: "))

    if( numero < 0 ){
        console.log("Número negativo")
    }else{
        console.log("Número positivo")
    }
}

function compra(){
    let valor = parseFloat(prompt("Digite o valor da compra: "))
    let formaPag = prompt("Digite 1 para crédito e 2 para débito: ")

    let valorFinal
    if(formaPag == "1"){
        valorFinal = valor / 0.5
        console.log("No crédito o valor é: ", valorFinal)
    } else if(formaPag == "2") {
        valorFinal = valor / 0.10
        console.log("No débito o valor é: ", valorFinal)
    } else {
        console.log("Entrada de forma de pagamento invalida")
    }
}

function cpf(){
    let cpf = prompt("Digite seu cpf sem pontuações: ")

    if (cpf.length == 11){
        console.log("CPF valido")
    }else{
        console.log("CPF invalido")
    }
}

function somaDoisNumero(){
    let numero1 = parseInt(prompt("Digite um numero: "))
    let numero2 = parseInt(prompt("Digite outro numero: "))

    let somaDosNumeros = numero1 + numero2

    if( somaDosNumeros > 50 ){
        somaDosNumeros = somaDosNumeros + 10
    }else{
        somaDosNumeros =  somaDosNumeros - 20
    }
    console.log(somaDosNumeros)
}

function ordemCrescente(){
    let numero1 = parseInt(prompt("Digite um numero: "))
    let numero2 = parseInt(prompt("Digite outro numero: "))

    if(numero1 > numero2){
        console.log(numero2 +"..."+numero1)
    }else if(numero2 > numero1){
        console.log(numero1 +"..."+numero2)
    }else{
        console.log("Os numeros são iguais")
    }
}

