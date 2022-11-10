//caregando modulos
const express =require("express")
const handlebars =require('express-handlebars')
const app =express();
const admin =require("./routes/admin")
const path=require("path");
const route=require("./routes/admin")

//configuracao

//recebe post
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//handlebars
app.engine("handlebars",handlebars.engine({defaultLayout:'main'}))
app.set("view engine","handlebars")

//public
app.use(express.static(path.join(__dirname,"public")))

//mongose




app.get("/cadastro",(req,res)=>{
    res.render("layouts/cadastro")
})
//rotas
app.get("/",(req,res)=>{
res.render("layouts/index")
})

app.get("/post",(req,res)=>{
    res.send("posts")
    })

app.use('/admin',admin)


//outros
app.listen(process.env.PORT||8090,()=>{
    console.log("rodando")
})