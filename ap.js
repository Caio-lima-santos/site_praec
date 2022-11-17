//caregando modulos
const express =require("express")
const handlebars =require('express-handlebars')
const app =express();
const admin =require("./routes/admin")
const path=require("path");
const route=require("./routes/admin")
const Db=require("./models/praecDB")
const routeL=require("./routes/loginR");
const { where } = require("sequelize");

//configuracao

//recebe post
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//handlebars
app.engine("handlebars",handlebars.engine({defaultLayout:'main',runtimeOptions:{ allowProtoPropertiesByDefault:true
    ,allowProtoMethodsByDefault:true}}))
    
app.set("view engine","handlebars")

//public
app.use(express.static(path.join(__dirname,"public")))

//mongose




app.get("/cadastro/form",(req,res)=>{
    res.render("layouts/cadastro/cadastro")

})

app.post("/cadastro/add",(req,res)=>{
    if(req.body.nome,req.body.usuario, req.body.email,req.body.senha!=null){
       Db.usuario.create({
        nome:    req.body.nome ,
        usuario: req.body.usuario ,
        email:   req.body.email ,
        senha:   req.body.senha 
    
    
    }).then(()=>{console.log("enviado pro db");
    res.redirect("/login")
   
}).catch((er)=>{console.log("erro ao enviar: " + er)})


    }
 
    
    
  


})

//rotas
app.post("/",(req,res)=>{

 //busca usuario
 Db.usuario.findAll({
    where:{
        usuario:req.body.usuario
        ,senha:req.body.senha
      } }).then((post)=>{  
        if(post[0] != undefined){
        console.log("usuario:"+post[0].usuario +"  senha: " +post[0].senha)
        //renderiza home page
       Db.comentarios.findAll().then((coment)=>{

        Db.valores.findAll().then((valores)=>{
      res.render("layouts/index",{coment:coment,usuario:post[0],valores:valores[0]})
      });
  
  
       })
      }
        else{ 
          //redireciona
        res.redirect("/login")
        }

      }) 

}
)

app.get("/login",(req,res)=>{
 Db.usuario.findAll().then((post)=>{
    
    res.render("layouts/login/login",{post:post})
 })})

 app.post("/coment",(req,res)=>{
 Db.comentarios.create(
    {   
      
        nome_comentarios:req.body.name,
        texto_comentarios:req.body.message
       }
 ).then(()=>{console.log("enviado pro db");
 res.render("layouts/redir",{usuario:req.body.usuario ,senha:req.body.senha})

}).catch((er)=>{console.log("erro ao enviar: " + er)})



 })



        
   //
   

app.use('/admin',route)
app.use('/login',routeL)


//outros
app.listen(process.env.PORT||8090,()=>{
    console.log("rodando")
})