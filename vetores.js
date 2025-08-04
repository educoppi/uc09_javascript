let prompt = require('prompt-sync')()

// Vetores = Array

let nomes = [ "Jailson", "Mendes", "Laranja" ]

console.log(`O usuário ${nomes[0]} ${nomes[1]} toma suco de ${nomes[2]}`)

nomes[0] = "Ricardo"
nomes[1] = "Milos"

nomes.push("Doce")
console.log(`O usuário ${nomes[0]} ${nomes[1]} toma suco de ${nomes[2]} ${nomes[3]}`)