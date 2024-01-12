const {connection}= require('../database/config')


const ver = (req,res)=>{
    connection.query('SELECT*FROM usuario',
    (error,results)=>{
        if(error)throw error
        res.json(results)
    })
}

const crear=(req,res)=>{
    connection.query('INSERT INTO usuario SET ?',
    {
        idUsuario:req.body.idUsuario,
        nombreUsuario:req.body.nombreUsuario,
        claveUsuario:req.body.claveUsuario
    },
    (error,results)=>{
        if(error)throw error
        res.json(results)
        }
    )
}

const editar = (req,res)=>{
    const idUsuario= req.params.idUsuario
    const {nombreUsuario,claveUsuario}=req.body
    connection.query(`UPDATE usuario SET
                                            nombreUsuario='${nombreUsuario}',
                                            claveUsuario='${claveUsuario}'
                                            
                                            WHERE idUsuario=${idUsuario}`
                                            ,
                                            (error,results)=>{
                                                if(error)throw error
                                                res.json('registro editado')
                                            })
}

const eliminar=(req,res)=>{
    const idUsuario=req.params.idUsuario
    connection.query('DELETE FROM usuario WHERE idUsuario=' + idUsuario,
    (error,results)=>{
        if(error)throw error
        res.json('registro eliminado')
    })
}

module.exports = {ver,crear,editar ,eliminar}