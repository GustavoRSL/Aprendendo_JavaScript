function desafio(...a) {
  tam = a.length
  let vetor = []
  if (tam == 1) {
    let n = 0
    while (n < a) {
      n += 1
      vetor.push(n)
    }
    return vetor
  }

  else if (tam == 2) {
    if (a[0] < a[1]) {
      let n = a[0]
      while (n < a[1]) {
        n += 1
        vetor.push(n)
      }
      return vetor
    }

    else {
      let n = a[0]
      while (n >= a[1]) {
        vetor.push(n)
        n -= 1
      }
      return vetor
    }
  }

  else if (tam == 3) {
    if (a[0] < a[1]) {
      let n = a[0]
      let soma = a[2]
      while (n < a[1]) {
        vetor.push(n)
        n += soma
      }
      return vetor
    }

    else {
      let n = a[0]
      let soma = a[2]
      while (n > a[1]) {
        vetor.push(n)
        n -= soma
      }
      return vetor
    }
  }
}


console.log(desafio(8, -10, 4))
//range(5)        -> [1,2,3,4,5]
console.log(desafio(5))
//range(6,11)     -> [6,7,8,9,10,11]
console.log(desafio(6, 11))
//range(10,19,2)  -> [10,12,14,16,18]
console.log(desafio(10, 19, 2))
//range(6,2)      -> [6,5,4,3,2]
console.log(desafio(6, 2))
//range(8,-3, 0)  -> [8, 4, 0]
// console.log(desafio(8, 3, 0))

console.log('Implementação da Cod3r')

function range(a, b, s = 1) {
  const n1 = b === undefined ? 1 : a
  const n2 = b === undefined ? a : b
  const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)

  const nums = []
  for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {
    nums.push(i)
  }
  return nums
}

console.log(range(8, -10, 4))
//range(5)        -> [1,2,3,4,5]
console.log(range(5))
//range(6,11)     -> [6,7,8,9,10,11]
console.log(range(6, 11))
//range(10,19,2)  -> [10,12,14,16,18]
console.log(range(10, 19, 2))
//range(6,2)      -> [6,5,4,3,2]
console.log(range(6, 2))
//range(8,-3,-4)  -> [8, 4, 0]
console.log(range(8, -3, -4))