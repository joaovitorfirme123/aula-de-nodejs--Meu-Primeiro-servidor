const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.send("Seja Bem-vindo Ao Nosso Site")
});

app.get("/artigos",function(req,res){

    res.send("todos os artigos")
});
app.get("/contato",function(req,res){
    res.send("Deixe a sua dúvida aqui.")
})

app.listen(8081,function(){
    console.log('o servidor está rodando');
});