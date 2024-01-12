 import { CarritoContext } from "./CarritoContext"
 import { useReducer } from 'react'

 const initialState = []


 export const CarritoProvider = ({children}) => {

    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CARRITO] Agregar Compra':
                return [...state, action.payload]
            case '[CARRITO] Aumentar Cantidad Compra': 
                return state.map(item => {
                    const cant = item.cantidad + 1
                    if(item.idProducto === action.payload) return {...item, cantidad: cant}
                    return item
                })
            case '[CARRITO] Disminuir Cantidad Compra': 
            return state.map(item => {
                const cant = item.cantidad -1
                if(item.idProducto === action.payload && item.cantidad > 1) return {...item, cantidad: cant}
                return item
            })
             
            case '[CARRITO] Eliminar Compra':
                return state.filter(compra => compra.idProducto !== action.payload)
            default:
                return state
        }
    }

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    const agregarCompra = (compra) => {
        compra.cantidad = 1
        const action = {
            type: '[CARRITO] Agregar Compra',
            payload: compra
        }
        dispatch(action)
    
    }
    const aumentarCantidad = (idProducto) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad Compra',
            payload: idProducto
        }
        dispatch(action)
    
    }
    const disminuirCantidad = (idProducto) => {
        const action = {
            type: '[CARRITO] Disminuir Cantidad Compra',
            payload: idProducto
        }
        dispatch(action)
    
    }
    const eliminarCompra = (idProducto) => {
        const action = {
            type: '[CARRITO] Eliminar Compra',
            payload: idProducto
        }
        dispatch(action)
    
    }
    
    

  return (
     <>
    
      <CarritoContext.Provider value={{listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
        {children}
      </CarritoContext.Provider>
    
    
    </>
   )
 }

