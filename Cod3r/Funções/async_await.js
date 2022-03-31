function esperarPor(tempo = 2000){
  return new Promise(function(resolve){
    setTimeout(function() {
      console.log('Executando promise...')
      resolve()
    }, tempo);
  })
}

async function executar() {
  await esperarPor()
  console.log('Executar')
}

executar()