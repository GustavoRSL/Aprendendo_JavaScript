let p = new Promise(function(resolve){
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

function primeiroElemento(array){
  return array[0]
}

function primeiraLetra(string) {
  return string[0]
}

function letraMinuscula(letra) {
  return letra.toLowerCase()
}

function imprimir(txt) {
  return console.log(txt)
}

p
  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(imprimir)
  /* 
  .then(v => console.log(v))
  .then(console.log) 
  */


/* p
  .then(valor => valor[0])
  .then(primeiro => primeiro[0])
  .then(letra => letra.toLowerCase())
  .then(minuscula => console.log(minuscula)) */