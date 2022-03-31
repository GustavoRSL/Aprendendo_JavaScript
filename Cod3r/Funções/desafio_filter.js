const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99},
  { nome: 'Impressora', qtde: 0, preco: 500.00},
  { nome: 'Lapis', qtde: 10, preco: 1.50},
  { nome: 'Tesoura', qtde: 7, preco: 5.00},
]

Array.prototype.meuFilter = function(fn) {
  const newArray = []
  for(let i = 0; i < this.length; i++) {
    if(fn(this[i])){
      newArray.push(this[i])
    }
  }
  return newArray
}

const maiorQue = (array) => {
  if (array.qtde > 5) {
    console.log(array.qtde)
    return true
  }
}

carrinho.meuFilter(maiorQue)

