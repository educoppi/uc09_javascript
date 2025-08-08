/*          SISTEMA DE MÉDICOS 

*/

let prompt = require("prompt-sync")()

let usuarios = [
    { nome: "Eduardo", senha: "123", tipo: "Médico"},
    { nome: "Conrado Saúde", senha: "123", tipo: "Médico"}
]

let pacientes = [
    {codigo: 1, nome: "Pedro", cpf: "12345678911", alergia: null},
    {codigo: 2, nome: "Marquinhos", cpf: "78945612312", alergia: "Cabelo"}
]

let remedios = [
    {codigo: 1, nome: "Pentacil", dataValidade: "12-06-2030"},
    {codigo: 2, nome: "Dipirona", dataValidade: "05-02-2029"}
]

let encaminhamentos = [
    {codigo: 1, nome: "Raio-x"},
    {codigo: 1, nome: "enfermaria"},
]

let receitas = []

let usuarioLogado = null

main()
function main(){
    console.clear()
    console.log("--------------------------")
    console.log("----- SISTEMA DA UPA -----")
    console.log("--------------------------")
    console.log("----- Faça seu login:")
    let nome = prompt("Digite seu nome de usuário: ")
    let senha = prompt("Digite sua senha: ")

    autenticar(nome, senha)
}


function autenticar(nome, senha){
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].nome.toLowerCase() == nome.toLowerCase() && usuarios[i].senha == senha){
            usuarioLogado = usuarios[i]
            console.log(`Bem vindo Doutor(a) ${usuarioLogado.nome}`)
            telaInicial()
        }
    }
    if(usuarioLogado == null){
        console.log("Nome ou senha incorretos...")
        prompt("Pressione ENTER para continuar...")
        main()
    }
}

function telaInicial(){
    console.clear()
    console.log("-----------------------------")
    console.log("----- TELA INICIAL -----")
    console.log("-----------------------------")
    console.log("[1] - Consulte e Altere a ficha de Pacientes")
    console.log("[2] - Consulte Remédios no estoque")
    console.log("[3] - Realize Receitas Médicas")
    console.log("[4] - Realize Encaminhamentos")
    let opcao = prompt("Escolha uma opção:")

    if( opcao == "1" ){
        gerenciaPacientes()
    }else if( opcao == "2" ){
        consultaDeRemedios()
    }else if( opcao == "3" ){

    }else{
        prompt("Opção inválida, pressione ENTER tentar novamente...")
        telaInicial()
    }
}

//OPCAO 1 TELA INICIAL:

//GERENCIA OS PACIENTES
function gerenciaPacientes(){
    console.clear()
    console.log("-----------------------------------------------")
    console.log("------- Aba de Gerenciamento de Paciente ------")
    console.log("-- [1] - Consultar todas as fichas de Pacientes")
    console.log("-- [2] - Consulte a ficha do Paciente pelo nome")
    console.log("-- [3] - Altere a Ficha de um Paciente")
    let opcao = prompt("Escolha uma opção: ")

    if(opcao == "1"){
        consultaTodasFichas()
    }else if(opcao == "2"){
        buscaPorNome()
    }else if(opcao == "3"){
        alteraFichaPaciente()
    }else{
        prompt("Opção inválida, pressione ENTER tentar novamente...")
        gerenciaPacientes()
    }
}

//OPCAO 1 DE GERENCIA PACIENTES
function consultaTodasFichas(){
    console.clear()
    console.log("------------------------")
    console.log("------- Pacientes ------")
    for(let i = 0; i < pacientes.length; i++){
        console.log(`[${pacientes[i].codigo}] - Nome: ${pacientes[i].nome} - Alergia: ${pacientes[i].alergia}`)
    }
    prompt("Pressione ENTER para voltar para a tela inicial...")
    telaInicial()
}

//OPCAO 2 DE GERENCIA PACIENTES
function buscaPorNome(){
    let aux = true
    let alergia = ""
    let nome = prompt("Digite o nome que deseja pesquisar: ")
    nome = nome.toLowerCase()

    for(let i = 0; i < pacientes.length; i++){

        if(pacientes[i].alergia == null){
            alergia = "Nenhuma"
        }else{
            alergia = pacientes[i].alergia
        }

        if(nome == pacientes[i].nome.toLowerCase()){
            console.log(`[${pacientes[i].codigo}] - Nome: ${pacientes[i].nome} - Alergia: ${alergia}`)
            aux = false
        }
    }
    if(aux){
        console.log("Paciente não encontrado...")
    }
    prompt("Pressione ENTER para voltar para a tela inicial...")
    telaInicial()
}

//OPCAO 3 DE GERENCIA PACIENTES
function alteraFichaPaciente(){
    let alergia = ""
    let aux = true
    let cod = prompt("Digite o codigo do paciente: ")

    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].alergia == null){
            alergia = "Nenhuma"
        }else{
            alergia = pacientes[i].alergia
        }

        if(cod == pacientes[i].codigo){
            aux = false
            console.log(`[${pacientes[i].codigo}] - Nome: ${pacientes[i].nome} - Alergia: ${alergia}`)

            let opcao = prompt("Digite 1 para alterar o nome ou 2 para alterar a alergia: ")

            if(opcao == "1"){
                let novoNome = prompt("Digite a alteração do nome: ")

                pacientes[i].nome = novoNome
                prompt("Alteração feita com sucesso, pressione ENTER para voltar a tela inicial...")
                telaInicial()
            }else if(opcao == "2"){
                let novaAlergia = prompt("Digite a alteração da alergia: ")

                pacientes[i].alergia = novaAlergia
                prompt("Alteração feita com sucesso, pressione ENTER para voltar a tela inicial...")
                telaInicial()
            }else{
                prompt("Opção invalida. Pressione ENTER para voltar para a tela inicial...")
                telaInicial()
            }
        }
    }
     
    if(aux){
        console.log("Código inválido, Pressione enter para voltar para a tela inicial...")
        telaInicial()
    }
}




//CONSULTA DE REMEDIOS
function consultaDeRemedios(){
    console.clear()
    console.log("-----------------------")
    console.log("------- Remédios ------")
    for(let i = 0; i < remedios.length; i++){
        dataValidade = remedios[i].dataValidade.replaceAll("-", "/")
        console.log(`[${remedios[i].codigo}] - Nome: ${remedios[i].nome} - Data de Validade: ${dataValidade}`)
    }
    prompt("Pressione ENTER para voltar para a tela inicial...")
    telaInicial()
}