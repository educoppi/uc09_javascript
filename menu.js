let prompt = require('prompt-sync')()
// CRUD

//windows + . abre janela de emojis

//ASCII Art

let nome, idade, ativo

main()
function main(){
    console.log("---- SISTEMA ----")
    console.log("1 - 😋 Cadastrar")
    console.log("2 - 👻 Listar usuários")
    console.log("3 - 😭 Sair")
    let opcao = prompt("Escolha uma opção: ")
    
    if(opcao == "1"){
        cadastrar()
    }else if(opcao == "2"){
        listar()
    }else if(opcao == "3"){
        return
    }else{
        cleanTerminal()
    }
}
    
function cadastrar(){
    console.log("---- CADASTRO ----")
    nome = prompt("Digite o nome: ")
    idade = parseInt(prompt("Digite a idade: "))
    ativo = true 
    main()
}


function listar(){
    console.log("---- LISTAR ----")
    if(nome == null && idade == null && ativo == null){
        prompt("Nenhum usuario cadastrado, pressione enter para continuar...")
        main()
    }

    let resposta = "SIM"
    if(!ativo){
        resposta = "NÃO"
    }
    console.log("1 - Nome: ["+nome+"] | Idade: ["+idade+"] | Ativo: ["+resposta+"]")
    prompt("Pressione enter para continuar...")
    main()
}

function cleanTerminal(){
    console.clear()
    console.log("Opção inválida")
    main()
}