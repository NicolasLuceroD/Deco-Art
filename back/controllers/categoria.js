const {connection}= require('../database/config')


const ver = (req,res)=>{
    connection.query('SELECT*FROM Categoria',
    (error,results)=>{
        if(error)throw error
        res.json(results)
    })
}

const crear=(req,res)=>{
    connection.query('INSERT INTO Categoria SET ?',
    {
        idCategoria:req.body.idCategoria,
        nombreCategoria:req.body.nombreCategoria
    },
    (error,results)=>{
        if(error)throw error
        res.json(results)
        }
    )
}

const editar = (req,res)=>{
    const idCategoria= req.params.idCategoria
    const {nombreCategoria}=req.body
    connection.query(`UPDATE Categoria SET
                                            nombreCategoria='${nombreCategoria}'
                                            
                                            WHERE idCategoria=${idCategoria}`,
                                            (error,results)=>{
                                                if(error)throw error
                                                res.json('registro editado')
                                            })
}

const eliminar=(req,res)=>{
    const idCategoria=req.params.idCategoria
    connection.query('DELETE FROM Categoria WHERE idCategoria=' + idCategoria,
    (error,results)=>{
        if(error)throw error
        res.json('registro eliminado')
    })
}

module.exports = {ver,crear,editar ,eliminar}