const express = require('express');
const server = express();
const  { pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages');

//configura o nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/view',{
  express:server,
  noCache:true,
});

server
//receber os dados pelo req.body
.use(express.urlencoded({extended: true}))
//configurar aquivos staticos(css, scripts, img)
.use(express.static("public"))
//rotas da aplicação
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)