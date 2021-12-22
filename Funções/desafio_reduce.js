const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99},
  { nome: 'Impressora', qtde: 1, preco: 500.00},
  { nome: 'Lapis', qtde: 10, preco: 1.50},
  { nome: 'Tesoura', qtde: 7, preco: 5.00},
]

const getTotal = (array) => {
  return (array.qtde * array.preco)
}

Array.prototype.meuReduce = function(fn, acc) {
  let resultado = acc
  for(let i = 0; i < this.length; i++){
    resultado += getTotal(this[i])
  }
  return resultado
}

console.log(carrinho.meuReduce(getTotal, 0))