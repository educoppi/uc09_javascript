let prompt = require("prompt-sync")()

let usuarios = [
    { nome: "conrado", senha: "123", admin: "true"},
    { nome: "marcos", senha: "321", admin: "false"},
    { nome: "eduardo", senha: "213", admin: "false"}
]

let usuarioLogado = null

main()
function main(){

    console.log("--- SISTEMA DE LOGIN ---")
    let nome = prompt("Digite seu nome: ")
    let senha = prompt("Digite sua senha: ")

    autenticar(nome, senha)

    if( usuarioLogado.admin){
        //buscaTodos()
    }else{
        //buscaId(id)
        
    }

}

function autenticar(nome, senha){
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].nome == nome && usuarios[i].senha == senha){
            usuarioLogado = usuarios[i]
            console.log(`Usuário [${usuarioLogado.nome}] autenticado com sucesso!`)
        }
    }
    if(usuarioLogado == null){
        console.log("Nome ou senha incorretos...")
    }
}