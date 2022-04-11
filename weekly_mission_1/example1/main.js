console.log("Hello World!");
let myCar= new Object();
myCar.make="Ford";
myCar.model="Mustang";
myCar.year=1964;
console.log(myCar);

const myModules =(()=>{
    const privateFoo="Soy un valor privado,solo se usan dentro de la funcion";
    const privateBar=[1,2,3,4,5];
    const baz="soy un valor que va ser expuesto";
    const exported={
        publicFoo:'Soy un valor publico desde donde me llamen',
        publicBar:'Otro valor publico',
        publicBaz:baz
    }
    return exported;
})

console.log(myModules);