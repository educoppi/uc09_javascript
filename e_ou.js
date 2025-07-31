let prompt = require('prompt-sync')()

function CNH(){
    let idade = parseInt(prompt("Digite sua idade: "))

    if( idade >= 18 && idade <= 65 ){
        console.log("Você já pode tirar sua CNH")
    }else if(idade < 18){
        console.log("Você ainda não tem idade o suficiente")   
    }else if(idade > 65 && idade < 120){
        console.log("Teste espeial para renovar a cnh")
    }else{
        console.log("Idade Invalida...")
    }
}

function login(){
    let usuario = prompt("DIGITE SEU USUARIO: ")
    let senha = prompt("DIGITE SUA SENHA: ")

    if(usuario == "admin" && senha == "123"){
        console.log("entrou")
    }else{
        console.log("usuario ou senha errada")
    }
}

function gols(){
    let time1 = prompt("Digite o nome de um time: ")
    let gol1 = parseInt(prompt("Digite a quantidade de gols desse time: "))

    let time2 = prompt("Digite o nome do outro time: ")
    let gol2 = parseInt(prompt("Digite a quantidade de gols desse time: "))

    if(gol1 > gol2){
        console.log("O vencedor foi:", time1)
    }else if(gol2 > gol1){
        console.log("O vencedor foi:", time2)
    }else{
        console.log("empate")
    }
}
gols()