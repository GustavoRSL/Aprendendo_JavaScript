function exec(fn, a, b) {
  return fn(a, b)
}

function somarNoTerminal(a, b) {
  return a + b
}

function subtrairNoTerminal(a, b) {
  return a - b
}

console.log(exec(somarNoTerminal, 56, 38))
console.log(exec(subtrairNoTerminal, 56, 38))

setInterval(() =>{
  console.log('Tic, Tac')
}, 1000)

