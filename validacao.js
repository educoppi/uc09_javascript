let prompt = require("prompt-sync")()

main()
function main(){
    
    let nome = prompt("Digite seu nome: ")
    
    if( nome.length < 3 ){
        console.log("Nome inválido...")
    }

    let idade = prompt("Digite sua idade: ")

    if( idade < 18 || idade >= 120 ){
        console.log("Idade menor que 18 ou idade absurda!")
    }

    let cpf = prompt("Digite seu cpf: ")
    cpf = cpf.replaceAll("-", "")
    cpf = cpf.replaceAll(".", "")

    if( !cpf.length == 11 ){
        console.log("CPF inválido...")
    }

    let email = prompt("Digite seu email: ")

    if( !email.includes("@") && !email.includes(".") && email.length <= 10 ){
        console.log("Email inválido...")
    }

    let senha = prompt("Digite sua senha: ")
    if( senha.length >= 6 ){
        let confirmaSenha = prompt("Digite sua senha novamente: ")

        if( !senha == confirmaSenha ){
            console.log("Senhas não são compatíveis")
        }
    }else{
        console.log("Senha inválida...")
    }

}