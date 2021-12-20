//Declaração de uma função

function sayHello() {
  console.log('Hello World!')
}

sayHello();

function sayHelloTo(name) {
  console.log('Hello ' + name)
}

sayHelloTo('Gustavo')

function sayHelloBy(name) {
  console.log(`Hello ${name}`)
}

sayHelloBy('Gustavo')

function returnHi(){
  return 'Hi!'
}

let say = returnHi()
console.log(say)
console.log(returnHi())

function returnHiTo(name) {
return `Hi ${name}!`
}

console.log(returnHiTo('Gustavo'))