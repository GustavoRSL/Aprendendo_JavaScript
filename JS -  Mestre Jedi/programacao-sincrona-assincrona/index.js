// Sincrona
var hello = 'Hello World!'
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(hello)

// Assincrona
console.log('Inicio bloco síncrona')

setTimeout(function () {
  console.log('Programação assíncrona')
}, 2000);

console.log('Fim bloco síncrona')