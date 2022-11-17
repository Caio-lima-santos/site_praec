const expres =require("express")
const db =require("../models/praecDB")
const route=expres.Router()



route.get("/",(res,req)=>{


req.render("layouts/red")

})

route.post('/data_base',(req,res)=>{
    

console.log(req.body.key)
if(req.body.ph != null){

    db.valores.destroy({where:{
        id:1
     
    }})
    console.log(req.body.ph)
    db.valores.create({
        id:1,
    ph:req.body.ph,
    oxigenio:req.body.oxigenio,
    condutividade:req.body.condutividade,
    salinidade:req.body.salinidade,
    temperatura:req.body.temperatura,
    

   
})
res.render("layouts/admin")
}else{
db.admin.findAll(
    {where:{
        admin:req.body.key
    }}
).then((admin)=>{




    res.render("layouts/admin")







})}
   
    
    })
route.get('/categorias',(req,res)=>{
res.render("admin/categorias")
})
route.get('/categorias/add',(req,res)=>{
    res.render("admin/addcategoria")
    })


module.exports=route