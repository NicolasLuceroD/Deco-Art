import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ShoppingCart } from "@mui/icons-material";
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CarritoContext } from '../Context/CarritoContext';
import { NavLink } from 'react-router-dom';



const Header = () => {
  const { listaCompras } = useContext(CarritoContext)
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-secondary">
      <Container>
        <Navbar.Brand href="/main">DECO ARTESANIAS</Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/productos">PRODUCTOS</Nav.Link>
            <Nav.Link href="/somos">QUIENES SOMOS</Nav.Link>

             <NavDropdown title="ADMINISTRACION" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/stock">Productos</NavDropdown.Item>
              <NavDropdown.Item href="/proveedores">
                Proveedores
              </NavDropdown.Item>
              <NavDropdown.Item href="/categorias">Categorias</NavDropdown.Item>
              
      
            </NavDropdown>
          </Nav>
         <Nav>
                    <NavLink to='/carrito'>
                            <Badge badgeContent={listaCompras.length} color="secondary">
                            <ShoppingCart color="action" />
                        </Badge>
                    </NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header



