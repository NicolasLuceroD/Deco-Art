const {connection}= require('../database/config')

const ver=(req,res)=>{
    connection.query('SELECT*FROM Proveedores',
    (error,results)=>{
        if(error)throw error
        res.json(results)
    })
}

const crear=(req,res)=>{
    connection.query('INSERT INTO Proveedores SET ?',
    {
        idProveedores:req.body.idProveedores,
        nombre:req.body.nombre,
        cuil: req.body.cuil,
        correo:req.body.correo,
        telefono: req.body.telefono,
        direccion:req.body.direccion,
        provincia: req.body.provincia
    },
    (error,results)=>{
        if(error)throw error
        res.json(results)
    })
}


const editar = (req,res)=>{
    const idProveedores=req.params.idProveedores
    const {nombre,cuil,correo,direccion,telefono,provincia}=req.body
    connection.query(`UPDATE Proveedores SET
                                        nombre='${nombre}',
                                        cuil= '${cuil}',
                                        correo='${correo}',
                                        telefono='${telefono}',
                                        direccion='${direccion}',
                                        provincia='${provincia}'
                                        
                                        WHERE idProveedores =${idProveedores}`,
                                        
                                        (error,results)=>{
                                            if(error)throw error
                                            res.json('producto actualizado')
                                        })
}


const eliminar=(req,res)=>{
    const idProveedores=req.params.idProveedores
    connection.query('DELETE FROM Proveedores WHERE idProveedores='+ idProveedores,
    (error,results)=>{
        if(error)throw error
        res.json('registro eliminado')
    })
}

module.exports= {ver,crear,editar,eliminar}