function executarQualquerCoisa(fn) {
  fn()
}

function bomDia() {
  console.log('Bom dia!')
}

const boaTarde = () => console.log('Boa tarde')

executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

function potencia(base) {
  return (exp) => Math.pow(base,exp)
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))
console.log(potencia(2)(8))