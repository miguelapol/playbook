//una clase de pokemon
export default class Pokemon {
    constructor(name){
        this.name = name;
    }
    //metodo que pokemon saluda

    sayHello(){
        console.log(`mi pokemon ${this.name} te saluda`);
    }
    //metodo que pokemon da un ataque
    sayMessage(message){
        console.log(`mi pokemon ${this.name} envia este mensaje :${message}`);
    }

}
