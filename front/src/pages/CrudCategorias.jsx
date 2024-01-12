import axios from 'axios'
import { useState, useEffect } from 'react'

const CrudCategorias = () => {

const [idCategoria, setIdCategoria] = useState("")
const [nombreCategoria, setNombreCategoria] = useState()
const [verCategoria, setVerCategoria] = useState([])
const [editarCat, setEditarCat] = useState("")


    const ver = () =>{
        axios.get ("http://localhost:3001/categoria").then((response)=>{
            setVerCategoria(response.data)
        })
    }

    const crear =()=>{
        axios.post('http://localhost:3001/categoria/post',
        {
            idCategoria: idCategoria,
            nombreCategoria: nombreCategoria
            
        }).then(()=>{
            ver()
            limpiarCampos()
        })
    }

    const editar=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3001/categoria/put/${idCategoria}`,
        {
            idCategoria: idCategoria,
            nombreCategoria: nombreCategoria,
            
        }).then(()=>{
            ver()
            limpiarCampos()
        })
    }

    const eliminar=(val)=>{
        axios.delete(`http://localhost:3001/categoria/delete/${val.idCategoria}`,{}).then(()=>{
            ver()
            limpiarCampos()
        })
    }

    const updateCategoria =(val)=>{
        setEditarCat(true)
        setIdCategoria(val.idCategoria)
        setNombreCategoria(val.nombreCategoria)
        
    }

    const limpiarCampos=()=>{
        setEditarCat(false)
        setNombreCategoria('')
        setIdCategoria('')
        
    }

    useEffect(() => {
      ver()  
    },[])
    

  return (
        <form action='' onSubmit={editar}>
            <br />
                <div className='text-center'>
                    <div className='card-header'>
                        <h1>GESTION DE CATEGORIA</h1>
                    </div>

                     <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>ID CATEGORIA</span>
                            <input type="num" className='form-control' value={idCategoria} onChange={(e)=>setIdCategoria(e.target.value)}/>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'>NOMBRE</span>
                            <input type="text" className='form-control' value={nombreCategoria} onChange={(e)=>setNombreCategoria(e.target.value)}/>
                        </div>
                    </div>

                    <div>
                        <div className='card-footer text-muted'>
                            {
                                editarCat ?
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
                            <th scope='col'>NOMBRE CATEGORIA</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            verCategoria.map((val)=>{
                                return <tr key={val.idCategoria}>
                                    <td>{val.idCategoria}</td>
                                    <td>{val.nombreCategoria}</td>
                                   
                                    <td>
                                    <div className='btn-group' role='group' aria-label="Basic example">
                                        <button type='button' className='btn btn-info m-2' onClick={()=>{updateCategoria(val)}}> EDITAR </button>
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



export default CrudCategorias

