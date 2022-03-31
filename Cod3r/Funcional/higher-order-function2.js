/* 
function finalPrice(tax, price) {
  return price * (1 + tax)
} 
*/

// Curring
function finalPrice(tax) {
  return function(price){
    return price * (1 + tax)
  }
}

const nycFinalPrice = finalPrice(0.0875)

// Utilizar quando tiver uma constante
console.log(finalPrice(0.0875, 35.1))
console.log(finalPrice(0.0875)(25.1))
console.log(nycFinalPrice(25.1))