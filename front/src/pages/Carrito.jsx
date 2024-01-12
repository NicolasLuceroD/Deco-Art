import { useContext } from "react"
import { CarritoContext } from "../Context/CarritoContext"


export const Carrito = () => {
  

    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.precio * item.cantidad, 0 ).toFixed(2)
    }

    const handleImpresion = () => {

        print()
    }

    return (
        <>
  <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCompras.map(producto => (
                            <tr key={producto.idProducto}>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td>
                                    <button 
                                    className="btn btn-ouline-primary" 
                                    onClick={ () => disminuirCantidad(producto.idProducto)}
                                    >-</button>
                                    <button className="btn btn-primary">{producto.cantidad}</button>
                                    <button 
                                    className="btn btn-ouline-primary" 
                                    onClick={ () => aumentarCantidad(producto.idProducto)}
                                    >+</button>
                                </td>
                                <td><button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={()=>eliminarCompra(producto.idProducto)}
                                >Eliminar
                                </button>
                                </td>
                            </tr>
                        ))
                    }

                    <th><b>TOTAL: </b></th>
                    <td></td>
                    <td></td>
                    <td>${calcularTotal()}</td>

                </tbody>

            </table>



            <div className="d-grid gap-2">
                <button 
                className="btn btn-primary"
                onClick={handleImpresion}
                disabled={listaCompras<1}

                >COMPRAR</button>
            </div>
        </>
    )
}
