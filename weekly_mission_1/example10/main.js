//importar pokemon para que pueda ser usado debo usar el package.json para importarlo
import MyPokemon from './pokemon.js'

const pikachu = new MyPokemon("pikachu")
const bulbasaur = new MyPokemon("bulbasaur")
const squirtle = new MyPokemon("squirtle")
const charmander = new MyPokemon("charmander")

pikachu.sayHello()
pikachu.sayMessage("soy pikachu!")

bulbasaur.sayHello()
bulbasaur.sayMessage("soy balbausour!")

charmander.sayHello()
charmander.sayMessage("soy charmander!")

squirtle.sayHello()
squirtle.sayMessage("soy squirtle!")