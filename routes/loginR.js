const expres =require("express")
const DB=require("../models/praecDB")


const route=expres.Router()

route.get('/login',(req,res)=>{
res.render("layouts/login/login")
})

route.post('/check',(req,res)=>{
 
})



route.get('/categorias',(req,res)=>{
res.render("admin/categorias")
})
route.get('/categorias/add',(req,res)=>{
    res.render("admin/addcategoria")
    })


module.exports=route