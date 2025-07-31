let salsicha = 3.50
let pureBatata = 2.15
let salada = 1.90
let pao = 0.90
let batataPalha = 0.50

let valorInicial = pao + batataPalha

let hotdogSimples = valorInicial + salsicha + pureBatata
let hotdogDuplo = valorInicial + (salsicha * 2) + pureBatata + salada
let hotdogEspecial = valorInicial + (salsicha * 3) + (pureBatata * 2) + salada

console.log("\n\n--- CARDÁPIO ---\n\nHotdog Simples: " 
    + hotdogSimples.toFixed(2) + "\nHotdog Duplu: " 
    + hotdogDuplo.toFixed(2) + "\nHotdog Especial: " 
    + hotdogEspecial.toFixed(2) + "\n\n")