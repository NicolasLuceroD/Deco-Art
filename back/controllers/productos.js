const {connection}= require('../database/config')

const ver=(req,res)=>{
    connection.query('SELECT*FROM Producto',
    (error,results)=>{
        if(error)throw error
        res.json(results)
    })
}

const crear=(req,res)=>{
    connection.query('INSERT INTO Producto SET ?',
    {
        idProducto:req.body.idProducto,
        Categoria_idCategoria:req.body.Categoria_idCategoria,
        Proveedores_idProveedores:req.body.Proveedores_idProveedores,
        nombre:req.body.nombre,
        descripcion: req.body.descripcion,
        precio:req.body.precio,
        imagen: req.body.imagen,
        cantidad: req.body.cantidad
    },
    (error,results)=>{
        if(error)throw error
        res.json(results)
    })
}


const editar = (req,res)=>{
    const idProducto=req.params.idProducto
    const {Categoria_idCategoria,nombre,precio,Proveedores_idProveedores,imagen,descripcion,cantidad}=req.body
    connection.query(`UPDATE Producto SET

                                        Categoria_idCategoria='${Categoria_idCategoria}',
                                        Proveedores_idProveedores= '${Proveedores_idProveedores}',
                                        nombre='${nombre}',
                                        descripcion='${descripcion}',
                                        precio='${precio}',
                                        imagen='${imagen}',
                                        cantidad= '${cantidad}'


                                        WHERE idProducto =${idProducto}`,
                                        
                                        (error,results)=>{
                                            if(error)throw error
                                            res.json('producto actualizado')
                                        })
}


const eliminar=(req,res)=>{
    const idProducto=req.params.idProducto
    connection.query('DELETE FROM Producto WHERE idProducto='+ idProducto,
    (error,results)=>{
        if(error)throw error
        res.json('registro eliminado')
    })
}

module.exports= {ver,crear,editar,eliminar}