const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99},
  { nome: 'Impressora', qtde: 0, preco: 500.00},
  { nome: 'Lapis', qtde: 10, preco: 1.50},
  { nome: 'Tesoura', qtde: 7, preco: 5.00},
]

const lerNomes = (array) => console.log(array.nome)
const calculaPrecos = (array) => console.log(array.qtde * array.preco)

carrinho.map(lerNomes)
carrinho.map(calculaPrecos)


// Funcionamento do Map
Array.prototype.meuMap = function (fn) {
  const newArray = []
  for(let i = 0; i < this.length; i++){
    newArray.push(fn(this[i]))
  }
  return newArray
}

carrinho.meuMap(lerNomes)
carrinho.meuMap(calculaPrecos)

console.log(typeof(carrinho))