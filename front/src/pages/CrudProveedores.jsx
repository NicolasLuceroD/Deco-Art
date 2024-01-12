import axios from 'axios'
import { useState, useEffect } from 'react'

const CrudProveedores = () => {

const [idProveedores, setIdProveedores] = useState("")
const [nombre, setNombre] = useState()
const [cuil, setCuil] = useState('')
const [correo, setCorreo] = useState('')
const [telefono, setTelefono] = useState('')
const [direccion, setDireccion] = useState('')
const [provincia, setProvincia] = useState('')
const [verProveedores, setVerProveedores] = useState([])
const [editarProv, setEditarprov] = useState("")

    const ver = () =>{
        axios.get ("http://localhost:3001/proveedores").then((response)=>{
        setVerProveedores(response.data)
        })
    }

    const crear =()=>{
        axios.post('http://localhost:3001/proveedores/post',
        {
            idProveedores:idProveedores,
            nombre:nombre,
            cuil:cuil,
            correo:correo,
            telefono: telefono,
            direccion:direccion,
            provincia:provincia
        }).then(()=>{
            ver()
            limpiarCampos()
        })
    }

    const editar=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3001/proveedores/put/${idProveedores}`,
        {
            idProveedores: idProveedores,
            nombre: nombre,
            cuil:cuil,
            correo: correo,
            telefono:telefono,
            direccion: direccion,
            provincia: provincia
        }).then(()=>{
            ver()
            limpiarCampos()
        })
    }

    const eliminar=(val)=>{
        axios.delete(`http://localhost:3001/proveedores/delete/${val.idProveedores}`,{}).then(()=>{
            ver()
            limpiarCampos()
        })
    }

    const updateProveedor =(val)=>{

        setEditarprov(true)
        setIdProveedores(val.idProveedores)
        setNombre(val.nombre)
        setCuil(val.cuil)
        setCorreo(val.correo)
        setTelefono(val.telefono)
        setDireccion(val.direccion)
        setProvincia(val.provincia)
    }

    const limpiarCampos=()=>{
        setEditarprov(false)
        setNombre('')
        setCuil('')
        setCorreo('')
        setTelefono('')
        setDireccion('')
        setProvincia('')
    }

    useEffect(() => {
      ver()  
    },[])
    

  return (
        <form action='' onSubmit={editar}>
            <br />
                <div className='text-center'>
                    <div className='card-header'>
                        <h1>GESTION DE PROVEEDORES</h1>
                    </div>

                     <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>ID PROVEEDOR</span>
                            <input type="num" className='form-control' value={idProveedores} onChange={(e)=>setIdProveedores(e.target.value)}/>
                        </div>
                    </div> 
                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>NOMBRE</span>
                            <input type="text" className='form-control' value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>CUIL</span>
                            <input type="text" className='form-control' value={cuil} onChange={(e)=>setCuil(e.target.value)}/>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>CORREO</span>
                            <input type="text" className='form-control' value={correo} onChange={(e)=>setCorreo(e.target.value)} />
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>TELEFONO</span>
                            <input type="text" className='form-control' value={telefono} onChange={(e)=>setTelefono(e.target.value)} />
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>DIRECCION</span>
                            <input type="text" className='form-control' value={direccion} onChange={(e)=>setDireccion(e.target.value)} />
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>PROVINCIA</span>
                            <input type="text" className='form-control' value={provincia} onChange={(e)=>setProvincia(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <div className='card-footer text-muted'>
                            {
                                editarProv ?
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
                            <th scope='col'>ID CATEGORIA </th> 
                            <th scope='col'>NOMBRE PROVEEDOR </th>
                            <th scope='col'>CUIL</th>
                            <th scope='col'>CORREO</th>
                            <th scope='col'>TELEFONO</th>
                            <th scope='col'>DIRECCION</th>
                            <th scope='col'>PROVINCIA</th>
                          
                
                    
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            verProveedores.map((val)=>{
                                return <tr key={val.idProveedores}>
                                    <td>{val.idProveedores}</td>
                                    <td>{val.nombre}</td>
                                    <td>{val.cuil}</td>
                                    <td>{val.correo}</td>
                                    <td>{val.telefono}</td>
                                    <td>{val.direccion}</td>
                                    <td>{val.provincia}</td>
                                    
                                    <td>
                                    <div className='btn-group' role='group' aria-label="Basic example">
                                        <button type='button' className='btn btn-info m-2' onClick={()=>{updateProveedor(val)}}> EDITAR </button>
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

export default CrudProveedores