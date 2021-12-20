// Anonymous Function

(function (a, b, c) {
  return a + b + c
})

// Function Expression

const sum = function (a, b) {
  return a + b
}
console.log(sum(1,3))

const anotherSum = sum
console.log(anotherSum(3,1))