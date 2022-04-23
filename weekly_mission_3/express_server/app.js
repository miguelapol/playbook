//creando usando el server
const express=require('express');
//siempre usamos el app
const app=express();
//usamos el porto de la maquina
const port =3000;

//inicial la cual respondera el localhost:3000
app.get('/',(req,res)=>{
    res.send('Hello World');
});

//iniciamos la application
app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});