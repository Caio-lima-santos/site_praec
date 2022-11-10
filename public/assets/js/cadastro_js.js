const nome_in= document.getElementById("nome_in")
const email_in= document.getElementById("email_in")
const usuario_in=document.getElementById("usuario_in")
const senha_in= document.getElementById("senha_in")
const logar_bt=document.getElementById("logar_bt")
import { usuario as _usuario } from "./praecDB"

alert("fist step")

logar_bt.addEventListener("click",()=>{
alert("second step")
if(nome_in.textContent,usuario_in.textContent,email_in.textContent,senha_in.textContent!=null){
    alert("etapa 2")
    _usuario.create({
    nome:nome_in.textContent ===String?nome_in.textContent:"joao",
    usuario:usuario_in.textContent ===String?usuario_in.textContent:" ",
    email:email_in.textContent ===String?email_in.textContent:"nome@exemplo.com",
    senha:  senha_in.textContent ===String?senha_in.textContent:"12345678"


}).then(()=>{console.log("enviado pro db")}).catch((er)=>{console.log("erro ao enviar: " + er)})


}})



