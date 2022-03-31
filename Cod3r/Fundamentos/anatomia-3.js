// Function expression

const incremente1 = function(n) {
  return n + 1
}

// Arrow Function is always anonymous

const incremente2 = (n) => {
  return n + 1
}

const incremente3 = n => {
  return n + 1
}

const incremente4 = n => n + 1

console.log(incremente1(1))
console.log(incremente2(1))
console.log(incremente3(1))
console.log(incremente4(1))