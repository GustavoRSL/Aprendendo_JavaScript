const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function ler(caminho) {
  return new Promise((resolve) => {
    fs.readFile(caminho, function (__, conteudo) {
      resolve(conteudo.toString())
    })
  })
}

ler(caminho).then(conteudo => conteudo.split('\n')).then(qtdLinhas => console.log(qtdLinhas.length))
