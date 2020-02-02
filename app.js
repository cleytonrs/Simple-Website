var express = require("express");
var app = express();

app.use(express.static("public"));

var path = require("path");

// first argument (rote)
// request é o objeto que vai encapsular os dados que estão sendo recebidos
// response é o objeto que vai encapsular o que servir como resposta a essa requisição
app.get("/", function(request, response){
    response.sendFile(__dirname + "/public/page/index.html");
});

app.get("/about", function(request, response){
    response.sendFile(__dirname + "/public/page/about.html");
});

app.get("/contact", function(request, response){
    response.sendFile(__dirname + "/public/page/contact.html");
});

app.listen(8080, function(){
    console.log("Running.");
});