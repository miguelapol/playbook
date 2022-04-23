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
//respondien al texto para el localhost:3000
//aqui creamos el server
//localhost:3000/launchx
app.get('/launchx',(req,res)=>{
    res.send('bienvenido a la nave espacial');
});
//agregamos una nueva ruta
//localhost:3000/explorersInNode
app.get('/explorersInNode',(req,res)=>{
    const explorer={
        name:'juan',
        age:20,
        country:'mexico',
        msg:'hola'
    }
    res.send(explorer);
});
//aqui regresamos el objeto del explorer
//localhost:3000/explorersInNode/juan
//aqui usamos los query parameters

app.get('/explorers/:name',(req,res)=>{
    const explorer={
        name:req.params.name,
        age:20,
        country:'mexico',
        msg:'hola'
    }
    res.send(explorer);
});