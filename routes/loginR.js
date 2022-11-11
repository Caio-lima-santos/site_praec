const expres =require("express")
const DB=require("../models/praecDB")


const route=expres.Router()

route.get('/login',(req,res)=>{
res.render("layouts/login/login")
})

route.post('/check',(req,res)=>{
DB.usuario.findAll({
    where:{
        usuario:req.body.usuario
        ,senha:req.body.senha
      } }).then((post)=>{  
        if(post[0] != undefined){
        console.log("usuario:"+post[0].usuario +"  senha: " +post[0].senha)
        
        res.redirect(`/inic`)
      
      
      
      }
        else{ 
        res.redirect("/login")
        }

      }) 
})



route.get('/categorias',(req,res)=>{
res.render("admin/categorias")
})
route.get('/categorias/add',(req,res)=>{
    res.render("admin/addcategoria")
    })


module.exports=route