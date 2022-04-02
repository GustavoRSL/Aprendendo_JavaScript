// Funcional
function helloWorld() {
  console.log('Hello World!');
}
helloWorld();

// Poo
var objMessage = {
  message: 'Hello World!',
  printmessage: function() {
    console.log(this.message);
  }
}

objMessage.printmessage();