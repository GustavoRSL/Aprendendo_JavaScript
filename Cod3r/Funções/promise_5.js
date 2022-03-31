function funcionarOuNao(chanceErro) {
  return new Promise((resolve, reject) => {
    const numero = Math.random()
    try {
      if (numero < chanceErro) {
        reject(numero)
      } else {
        resolve(numero)
      }
    } catch (e) {
      reject(e)
    }
  })
}

funcionarOuNao(0.5)
  .then(numero => console.log(`Valor: ${numero}`), err => console.log(`Fiz certo ${err}`))
  .catch(err => console.log(`Erro: ${err}`))