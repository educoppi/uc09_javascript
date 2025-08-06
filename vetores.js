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
    let opcao = prompt("Digite 1 para cadastrar, 2 para listar ou 3 para buscar: ")
    if (opcao == 1) {

        let nome = prompt("Digite o nome: ")
        let idade = prompt("Digite a idade: ")
        let id = usuarios.length + 1
        usuarios.push({nome, idade, id})
        main()
    } else if (opcao == 2) {

        for (let i = 0; i < usuarios.length; i++) { // for(let i = nomes.length; i > 0; i--) pode ser utilizado para mostrar de forma reversa
            console.log(`ID: [${usuarios[i].id}] | Nome: ${usuarios[i].nome} | Idade: ${usuarios[i].idade}`)
        }
        prompt("Aperte ENTER para continuar")
        main()

    } else if (opcao == 3) {
        let posicao = prompt("Digite a posição do usuário que deseja buscar: ")

        if (usuarios.length >= posicao) {
            console.log(`O usuário na posição ${posicao} é: ${usuarios[posicao - 1].nome}`)
            alterar(posicao - 1)
        } else {
            console.log("Não existe um usuário cadastrado nessa posição!")
        }

    }
}


function alterar(posicao) {
    let novo_nome = prompt("Digite o novo nome: ")
    usuarios[posicao].nome = novo_nome
    console.log("Nome alterado com sucesso")
    setTimeout(() => {
        main()
    }, 1000);
}


function exemplo() {
    let nomes = ["Rafael", "Gustavo", "Laranja"]
    console.log(`O usuário ${nomes[1]} toma suco de ${nomes[2]}`)

    nomes[1] = "Ricardo"
    console.log(`O usuário ${nomes[1]} toma suco de ${nomes[2]}`)

    nomes.push("Doce") // Adiciona um item no final do Array
    console.log(`O usuário ${nomes[1]} toma suco de ${nomes[2]} ${nomes[3]}`)
}