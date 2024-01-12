import axios from 'axios'
import { useState, useEffect } from 'react'

const CrudProductos = () => {

const [idProducto, setIdProducto] = useState("")
const [idCategoria, setIdCategoria] = useState("")
const [idProveedor, setIdProveedor] = useState("")
const [descripcion, setDescripcion] = useState()
const [nombre, setNombre] = useState('')
const [precio, setPrecio] = useState('')
const [editarProducto, seteditarProducto] = useState(false)
const [verProductos, setverProductos] = useState([])
const [imagen,setImagen] = useState("")
const [cantidad,setCantidad] = useState("")

    const ver = () =>{
        axios.get ("http://localhost:3001/productos").then((response)=>{
        setverProductos(response.data)
        })
    }

    const crear =()=>{
        axios.post('http://localhost:3001/productos/post',
        {
            idProducto:idProducto,
            Categoria_idCategoria:idCategoria,
            Proveedores_idProveedores: idProveedor,
            descripcion: descripcion,
            nombre:nombre,
            precio:precio,
            imagen: imagen,
            cantidad: cantidad

        }).then(()=>{
            ver()
            limpiarCampos()
        })
    }

    const editar=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3001/productos/put/${idProducto}`,
        {
            idProducto:idProducto,
            Categoria_idCategoria:idCategoria,
            Proveedores_idProveedores:idProveedor,
            descripcion:descripcion,
            nombre:nombre,
            precio:precio,
            imagen: imagen,
            cantidad:cantidad
        }).then(()=>{
            ver()
            limpiarCampos()
        })
    }

    const eliminar=(val)=>{
        axios.delete(`http://localhost:3001/productos/delete/${val.idProducto}`,{}).then(()=>{
            ver()
            limpiarCampos()
        })
    }

    const updateProd =(val)=>{
        seteditarProducto(true)
        setIdProducto(val.idProducto)
        setIdCategoria(val.Categoria_idCategoria)
        setIdProveedor(val.Proveedores_idProveedores)
        setDescripcion(val.descripcion)
        setNombre(val.nombre)      
        setPrecio(val.precio)
        setImagen(val.imagen)
        setCantidad(val.cantidad)
    }

    const limpiarCampos=()=>{
        seteditarProducto(false)
        setIdCategoria('')
        setIdProveedor('')
        setDescripcion('')
        setNombre('')
        setPrecio('')
        setImagen('')
        setCantidad('')
    }

    useEffect(() => {
      ver()  
    },[])
    

  return (
        <form action='' onSubmit={editar}>
            <br />
                <div className='text-center'>
                    <div className='card-header'>
                        <h1>GESTION DE PRODUCTOS</h1>
                    </div>

               

                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>ID PRODUCTOS</span>
                            <input type="number" className='form-control' value={idProducto} onChange={(e)=>setIdProducto(e.target.value)}/>
                        </div>
                    </div> 


                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>ID CATEGORIA</span>
                            <input type="number" className='form-control' value={idCategoria} onChange={(e)=>setIdCategoria(e.target.value)}/>
                        </div>
                    </div>

                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>ID PROVEEDOR</span>
                            <input type="number" className='form-control' value={idProveedor} onChange={(e)=>setIdProveedor(e.target.value)}/>
                        </div>
                    </div>

                  
                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>NOMBRE DEL PRODUCTO</span>
                            <input type="text" className='form-control' value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>DESCRIPCION DEL PRODUCTO</span>
                            <input type="text" className='form-control' value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} />
                        </div>
                    </div>

                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>PRECIO DEL PRODUCTO</span>
                            <input type="number" className='form-control' value={precio} onChange={(e)=>setPrecio(e.target.value)} />
                        </div>
                    </div>

                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>CANTIDAD DEL PRODUCTO</span>
                            <input type="number" className='form-control' value={cantidad} onChange={(e)=>setCantidad(e.target.value)} />
                        </div>
                    </div>

                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>IMAGEN DEL PRODUCTO</span>
                            <input type="text" className='form-control' value={imagen} onChange={(e)=>setImagen(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <div className='card-footer text-muted'>
                            {
                                editarProducto ?
                                <div>
                                    <button type='submit' className='btn btn-warning m-2' onClick={editar}> ACTUALIZAR </button>
                                    <button type='submit' className='btn btn-info m-2' onClick={limpiarCampos}> CANCELAR </button>
                                </div>
                                :
                                <button type='submit' className='btn btn-success m-2' onClick={crear}> REGISTRAR </button>
                            }
                        </div>
                    </div>
                    
                </div>

                <br /><br />
                
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>ID PRODUCTO </th> 
                            <th scope='col'>ID CATEGORIA </th>
                            <th scope='col'>ID PROVEEDOR</th>
                            <th scope='col'> NOMBRE</th>
                            <th scope='col'> DESCRIPCION</th>
                            <th scope='col'> PRECIO</th>
                            <th scope='col'> CANTIDAD</th>
                
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            verProductos.map((val)=>{
                                return <tr key={val.idProducto}>
                                    <td>{val.idProducto}</td>
                                    <td>{val.Categoria_idCategoria}</td>
                                    <td>{val.Proveedores_idProveedores}</td>
                                    <td>{val.nombre}</td>
                                    <td>{val.descripcion}</td>
                                    <td>{val.precio}</td>
                                    <td>{val.cantidad}</td>
                                    <td>
                                    <div className='btn-group' role='group' aria-label="Basic example">
                                        <button type='button' className='btn btn-info m-2' onClick={()=>{updateProd(val)}}> EDITAR </button>
                                        <button type='button' className='btn btn-danger m-2' onClick={()=>{eliminar(val)}}> ELIMINAR </button>
                                    </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>

                </table> 
                
        </form>
  )
}

export default CrudProductos