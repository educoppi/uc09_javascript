console.log("Olá!\nBem vindo ao sistema de usuários do Conradito\nAbaixo estão as informações"
    + "dos usuários cadastrados no sistema")


let cliente1 = "Conrado"
let cliente2 = "Pedrita"
let idade1 = 15
let idade2 = 19
let isCliente1 = false
let isCliente2 = true

console.log("---- Lista de usuários:")
console.log("1 - Nome:"+ cliente1 + ", idade: "+ idade1 + ". É cliente: " + isCliente1)
console.log("2 - Nome:"+ cliente2 + ", idade: "+ idade2 + ". É cliente: " + isCliente2)

let cafes1 = 187
let cafes2 = 5

console.log("---- Quantidade de cafés:")
console.log("O cliente " + cliente1 + "já tomou " + cafes1 + " cafés!")
console.log("O cliente " + cliente2 + "já tomou " + cafes2 + " cafés!")

let cafesTotais = cafes1 + cafes2

console.log("---- Soma dos cafés tomados:")
console.log("Juntos, os clientes " + cliente1 + " e " + cliente2 + " tomaram " + cafesTotais + " cafés!")

let faltamParaCliente1 = 200 - cafes1
let faltamParaCliente2 = 200 - cafes2

console.log("---- Quantos cafés falta para chegar em 200?")
console.log("Faltam " + faltamParaCliente1 + " para " + cliente1)
console.log("Faltam " + faltamParaCliente2 + " para " + cliente2)

cafes1 = cafes1 + 15
cafes2 = cafes2 + 3

desembolsouCafes1 = cafes1 * 3.5
desembolsouCafes2 = cafes2 * 3.5

cafesComDesconto1 = cafes1 * (3.5 / 2)
cafesComDesconto2 = cafes2 * (3.5 / 2)

console.log("ATIVIDADE EXTRA")
console.log("1 -> " + cliente1 + ": " + cafes1 + " cafés  ||||||||| " +cliente2 + ": " + cafes2 + " cafés")
console.log("2 -> " + cliente1 + ": R$" + desembolsouCafes1 + " ||||||||| " +cliente2 + ": R$" + desembolsouCafes2)
console.log("3 -> " + cliente1 + ": R$"+ cafesComDesconto1 + " ||||||||| " + cliente2 + ": R$" + cafesComDesconto2)