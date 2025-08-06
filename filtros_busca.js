let prompt = require("prompt-sync")()

// VETORES (ARRAYS): guardar vários dados em uma só variável

let usuarios = [
    {
        id: 1,
        nome: "Chaves",
        idade: 8
    },
    {
        id: 2,
        nome: "Quico",
        idade: 10
    },
    {
        id: 3,
        nome: "Seu Madruga",
        idade: 44
    },
    {
        id: 4,
        nome: "Chiquinha",
        idade: 8
    },
    {
        id: 5,
        nome: "Nhonho",
        idade: 9
    },
    {
        id: 6,
        nome: "Bruxa do 71",
        idade: 300
    }
]

main()
function main() {
    console.clear()
    console.log("\n----- MENU PRINCIPAL -----\n")
    console.log("Opções:")
    console.log("1 - Listar Todos")
    console.log("2 - Buscar por nome")
    console.log("3 - Buscar pelo começo do nome")
    let opcao = prompt("Digite uma opção: ")

    if( opcao == "1" ){
        //Listar todos...
        let ordem = prompt("Digite 1 para ordem crescente ou 2 para ordem decrescente")

        if( ordem == "1" ){
            ordemCrescente()
        }else if( ordem == "2" ){
            ordemDecrescente()
        }
        prompt("Aperte ENTER para continuar...")
        main()
    }else if( opcao == "2" ){
        let nome = prompt("Digite o nome que você deseja procurar: ")
        buscaPorNome(nome)
        main()
    }else if( opcao == "3" ){
        let nome = prompt("Digite o nome que você deseja procurar: ")
        buscaQualquerParteDoNome(nome)
    }


}

function ordemCrescente(){
    for(let i = 0; i < usuarios.length; i++){
        console.log(`ID [${usuarios[i].id}] - Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade}`)
    }
}

function ordemDecrescente(){
    for(let i = usuarios.length - 1; i >= 0; i--){
        console.log(`ID [${usuarios[i].id}] - Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade}`)
    }
}

function buscaPorNome(nome){
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].nome.toUpperCase() == nome.toUpperCase()){
            console.log(`ID [${usuarios[i].id}] - Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade}`)
        }
    }
    prompt("Aperte ENTER para continuar...")
}

function buscaQualquerParteDoNome(nome){
    for( let i = 0; i < usuarios.length; i++ ){
        if(usuarios[i].nome.toUpperCase().includes(nome.toUpperCase())){
            console.log(`ID [${usuarios[i].id}] - Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade}`)
        }
    }
    prompt("Aperte ENTER para continuar...")
}