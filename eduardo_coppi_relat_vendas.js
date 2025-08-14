const produtos = require('./produtos.json')
const vendas = require('./vendas.json')
const vendasProdutos = require('./vendaProdutos.json')

const vendaExtendida = vendas.map(function(v){
    const produtosVenda = vendasProdutos.filter(vp => vp.idVenda ==  v.id).map( pv => {
        const produto = produtos.find( p => p.id == pv.idProduto )

        return {
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: pv.quantidade
        }
    })

    valorTotal = produtosVenda.reduce((total, pv) => total + pv.preco * pv.quantidade, 0)

    return {
        id: v.id,
        data: v.data,
        produtos: produtosVenda,
        valorTotal: valorTotal
    }
})


console.log(JSON.stringify(vendaExtendida, null, 2))