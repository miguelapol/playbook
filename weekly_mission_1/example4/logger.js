class Logger{
    constructor(name){
        this.name = name;
    }
    info(message){
        console.log(`${this.name}: ${message}`);
    }
    verbose(message){
        console.log(`${this.name}: ${message}`);
    }
}
//exportamos la clase
module.exports = Logger;