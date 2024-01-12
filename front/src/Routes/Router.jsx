import {Routes,Route} from 'react-router-dom'
import Productos from '../pages/Productos'
import Header from '../components/Header'
import CrudProductos from '../pages/CrudProductos'
import QuienesSomos from '../pages/QuienesSomos'
import {Carrito} from '../pages/Carrito'
import { Footer } from '../components/Footer'
import Main from '../pages/Main'
import CrudProveedores from '../pages/CrudProveedores'
import CrudCategorias from '../pages/CrudCategorias'
import Login from '../pages/Login'
import DataProvider from '../Context/DataProvider'
import {CarritoProvider} from "../Context/CarritoProvider"


const Router = () => {
  return (
    <>  
       <DataProvider>
        <CarritoProvider>
        <Header/>
        
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/productos' element={<Productos/>} />
            <Route path='/main' element={<Main/>} />
            <Route path='/stock' element={<CrudProductos/>} />
            <Route path='/proveedores' element={<CrudProveedores/>}/>
            <Route path='/categorias' element={<CrudCategorias/>}/>
            <Route path='/somos' element={<QuienesSomos/>} />
            <Route path='/carrito' element={<Carrito/>} />
        </Routes>        
        <Footer/>

        </CarritoProvider>
        </DataProvider> 
    </>
  )
}

export default Router