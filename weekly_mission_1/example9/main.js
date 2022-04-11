//aqui importamos la de pokemon para poder usarla   //
const Pokemon = require('./pokemon')

const pikachu = new Pokemon("pikachu")
const bulbasaur = new Pokemon("bulbasaur")
const squirtle = new Pokemon("squirtle")
const charmander = new Pokemon("charmander")

pikachu.sayHello()
pikachu.sayMessage("Heey soy pika!")

bulbasaur.sayHello()
bulbasaur.sayMessage("Heey! bulbasaur!")

charmander.sayHello()
charmander.sayMessage("Heey! charmander")

squirtle.sayHello()
squirtle.sayMessage("Heey!")