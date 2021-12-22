// arro function
const felizNatal = () => console.log('Feliz Natal!')
felizNatal()

const saudacao = (nome) => console.log(`Feliz Natal! ${nome}`)
saudacao('Tadeu')

const soma = a => b => c => a + b + c

console.log(soma(1)(2)(3))

// this
Array.prototype.log = function(){
  console.log(this)
}
const numeros = [1, 2, 3]

numeros.log()