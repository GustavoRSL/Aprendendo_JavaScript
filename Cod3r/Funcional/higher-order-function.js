// Passar uma função para outra função ou retorar um função de outra função

function run(fn){
  return `Result: ${fn()}`
  //return fn()
}

function sayHello() {
  console.log('Hello!')
}

run(sayHello)

run(() => {
  console.log('Run!!!')
})

const result = run(Math.random)
console.log(result)