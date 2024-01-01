class heroi{
constructor (nome, idade, tipo, ataque) {
this.nome = nome
this.idade = idade
this.tipo = tipo
this.ataque=ataque
}
escrever (){
    console.log(`o ${this.tipo} atacou usando ${this.ataque}`)

}
}

let heroiGuerreiro = new heroi('Beto',47,'guerreiro','Espada')
let heroiMago = new heroi('Bruno', 34,'mago','magia')
let heroimonge = new heroi('Bruce',40,'Monge','artes marciais')
let heroiNinja = new heroi('Joao','2','Ninja','shuriken')
heroiGuerreiro.escrever()
heroiMago.escrever()
heroimonge.escrever()
heroiNinja.escrever()