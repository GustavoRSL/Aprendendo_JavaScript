const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: false},
  { nome: 'Impressora', qtde: 1, preco: 500.00, fragil: true},
  { nome: 'Lapis', qtde: 10, preco: 1.50, fragil: false},
  { nome: 'Tesoura', qtde: 7, preco: 5.00, fragil: true},
]

const getFragil = (array) => {
    return array.fragil
}

const getTotal = (array) => {
  return array.qtde * array.preco
}

const getMedia = (acc, el) => {

}

const media = carrinho
  .filter((el) => el.fragil)
  .map((el) => el.qtde * el.preco)
  .reduce((acc, el) => {
    const novaQtd = acc.qtde + 1
    const novoTotal = acc.total + el 
    return {
      qtde: novaQtd,
      total: novoTotal,
      media: novoTotal / novaQtd
      }
    },{qtde: 0, total: 0, media: 0});

console.log(media)

