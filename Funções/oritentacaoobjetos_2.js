class Produto {
  
  constructor(nome, preco, desc = 0.15) {
    this.nome = nome
    this.preco = preco
    this.desc = desc
  }

  get precoFinal() {
    return this.preco * (1 - this.desc)
  }
}

const p1 = new Produto('Caneta', 10)
console.log(p1.precoFinal)