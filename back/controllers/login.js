const {connection} = require ("../database/config")


const Login = (req,res)=>{
   const nombreUsuario =req.body.nombreUsuario
   const claveUsuario = req.body.claveUsuario
   connection.query("SELECT * FROM usuario  WHERE nombreUsuario = ? AND claveUsuario= ? ",
   [nombreUsuario,claveUsuario],

    (error,results)=>{
        if(error)  throw error
        if(results.length > 0){
            res.status(200).send(results[0])
        }else {
            res.status(400).send('Documento y/o Clave incorrecta')
        }
    }
    )
}


const Registrar = (req, res) => {
    connection.query("INSERT INTO usuario SET ?",
    {
       idUsuario:req.body.idUsuario,
       nombreUsuario:req.body.nombreUsuario,
       claveUsuario:req.body.claveUsuario,
       
    }, 

    (error, results) => {
       if (error) throw error;
       res.json(("Usuario registrado"));
    })

}


module.exports = {Login,Registrar}