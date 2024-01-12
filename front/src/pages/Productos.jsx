
import { useContext } from "react";
import '../App.css'
import { DataContext } from "../Context/DataContext";
import { CarritoContext } from "../Context/CarritoContext";
import {Card} from "../components/Card"


const Productos = () => {


  const {productos} = useContext(DataContext)

  const { agregarCompra,eliminarCompra } = useContext(CarritoContext)

  const handleAgregar = (compra) =>{
    agregarCompra(compra)
  }

 const handleQuitar = (idProducto) =>{
    eliminarCompra(idProducto)
   }

  return (
    <div>
    
      
    
      <>
        {productos.map((producto) => (
          <Card
              key={producto.idProducto}
              imagen={producto.imagen}
              titulo={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              handleAgregar={() => handleAgregar(producto)}
              handleQuitar={() => handleQuitar(producto.idProducto)}
              >

        </Card>
        
       
        ))}
        </>
     
     </div>


  );
};

export default Productos;
