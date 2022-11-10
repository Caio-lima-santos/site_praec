const Sequelize=require("sequelize")
const sequelize=  new Sequelize.Sequelize()


const model_usuario=  sequelize.define("usuario",{
    id:{
        type:Sequelize.STRING,
        autoIncrement:true,
        primaryKey:true
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

module.exports={usuario:model_usuario}











