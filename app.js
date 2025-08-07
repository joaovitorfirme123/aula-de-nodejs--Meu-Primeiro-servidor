const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.send("Seja Bem-vindo Ao Nosso Site")
});

app.get("/artigos/:id",function(req,res){
    if(req.params.id == "1"){
        res.send("1 - como criar aplicativos android e ios")
    }
    else if(req.params.id == "3"){
        res.send("Como usar o node js")
    }
    else{
        res.send("Nenhum artigo foi encontrado")
    }
})
app.get("/contato",function(req,res){
    res.send("Deixe a sua dúvida aqui.")
})

app.listen(8081,function(){
    console.log('o servidor está rodando');
});