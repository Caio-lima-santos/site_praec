const Sequelize=require("sequelize")
const sequelize=  new Sequelize.Sequelize("praecdb","root","praecadmin",{
    host:"localhost",
    dialect:"mysql"
})


const model_usuario=  sequelize.define("usuarios",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        
    },
    usuario:{
        type:Sequelize.STRING
    },
    nome:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    senha:{
        type:Sequelize.STRING
    }
})

const model_comentario=  sequelize.define("comentarios",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        
    },

  
    nome_comentarios:{
        type:Sequelize.STRING
    },
    texto_comentarios:{
        type:Sequelize.STRING
        }
})








model_comentario.sync({force:true})
model_usuario.sync({})

module.exports={usuario:model_usuario,comentarios:model_comentario}











