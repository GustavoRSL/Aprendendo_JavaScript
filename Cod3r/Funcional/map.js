// Função map retorna mesma quantidade de elementos do array original.
// Transformar elementos.

const numbers = [1, 2, 3, 4, 5, 6]

const numbers2 = numbers.map((el) =>{
  return el * 2
})

console.log(numbers2)

const students = [
  { name: 'Jake', score: 6.4 },
  { name: 'Susan', score: 8.6 },
  { name: 'Emma', score: 9.4 },
  { name: 'Script', score: 9.1 },
]

const getScore = el => el.score
console.log(students.map(getScore).map(Math.ceil))
