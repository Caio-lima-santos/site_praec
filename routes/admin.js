const expres =require("express")

const route=expres.Router()

route.get('/',(req,res)=>{
res.render("admin/index")
})

route.get('/posts',(req,res)=>{
    res.send("pagina de posts")
    })
route.get('/categorias',(req,res)=>{
res.render("admin/categorias")
})
route.get('/categorias/add',(req,res)=>{
    res.render("admin/addcategoria")
    })


module.exports=route