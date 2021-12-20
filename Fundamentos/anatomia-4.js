// Anonymous function
// IIFE - Immediately Invoked Function Expression

(function (a, b, c) {
  return console.log(`Result: ${a + b + c}`)
})(1,2,3);

(function () {
  const x = 3
  return console.log(x)
})();

(() => {
  console.log('Arrow')
})();

(() => console.log('Arrow2'))();