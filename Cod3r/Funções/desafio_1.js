function soma(a) {
  return (b) => {
    return (c) => a + b + c
  }
}

console.log(soma(1)(2)(3))

function calcular(a){
  return (b) => {
    return (fn) => fn(a, b)
  }
}

function somar(a, b){
  return a + b
}

function subtrair(a, b){
  return a - b
}

console.log(calcular(3)(4)(somar))