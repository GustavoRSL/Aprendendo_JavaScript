function logParams(a,b,c) {
  console.log(a,b,c)
}

logParams(1,2,3,4,5)
logParams(1,2,3)
logParams(1,2)
logParams(1)
logParams()

function defaultParams(a,b,c = 0){
  console.log(a,b,c)
}

defaultParams(4,5,6)
defaultParams()

// Spread/rest
function logNum(num){
  console.log(num)
  for(let n of num){
    console.log(n)
  }
}

logNum([1,2,3])

// Spread/rest
function logNums(...nums){
  console.log(nums)
  for(let n of nums){
    console.log(n)
  }
}

logNums([1,2,3])

function sumAll(...nums) {
  let total = 0
  for(let n of nums) {
    total += n
  }
  return total
}

console.log(sumAll(1,2,3,4,5,6,7,8,9))