import Carousel from 'react-bootstrap/Carousel';
import '../App.css'

import Card from 'react-bootstrap/Card';



const Main = () => {
  return (
    <>
    <Carousel data-bs-theme="dark"  >
      <Carousel.Item >
        <img
           className='carrousel'
          src="https://churum-meru.org/wp-content/uploads/2021/08/Artesania-1.jpg" 
          alt="First slide"
          
          
        />
        
      </Carousel.Item>
      <Carousel.Item className='carrousel'>
        <img
          className='carrousel'
          src="https://www.ofeliahomedecor.com/modules/ph_simpleblog/covers/136.jpg" 
          alt="Second slide"
          
          
        />
        
      </Carousel.Item>
      <Carousel.Item >
        <img
          className='carrousel'
          src="https://www.revistainteriores.es/uploads/s1/51/53/54/artesania-decoracion-raul-del-sol-platos.jpeg" 
          alt="Third slide"
          
        />
        
      </Carousel.Item>
    </Carousel>
    <br />
    <hr />
    
    <h3 className='text-center'> PRODUCTOS DESTACADOS</h3>
    <hr />
    <br />
    <div className='cartas text-center'>
      <div >
        <Card style={{ width: '18rem' }} className='card' border='success'>
        <Card.Img className='foto-prod' variant="top" src="image.png" />
        <Card.Body>
        <Card.Title>MACETA</Card.Title>
        <hr />
        <Card.Text>
        <strong> <p>Precio: $4500</p></strong>
        </Card.Text>
        {/* <Button variant="success">COMPRAR</Button> */}
      </Card.Body>
      </Card>
      </div>

      <div > 
        <Card style={{ width: '18rem' }} className='card' border='success'>
        <Card.Img className='foto-prod' variant="top" src="image1.png" />
        <Card.Body>
        <Card.Title>ESFERA</Card.Title>
        <hr />
        <Card.Text>
        <strong> <p>Precio: $6500</p></strong>
        </Card.Text>
        {/* <Button variant="success">COMPRAR</Button> */}
      </Card.Body>
      </Card>
      </div>

      <div>
        <Card style={{ width: '18rem'}}  className='card' border='success'>
        <Card.Img className='foto-prod' variant="top" src="image3.png" />
        <Card.Body>
        <Card.Title>PORTA SAHUMERIO</Card.Title>
        <hr />
        <Card.Text>
        <strong> <p>Precio: $1500</p></strong>                     
        </Card.Text>
        {/* <Button variant="success">COMPRAR</Button> */}
      </Card.Body>
      </Card>
      </div>
 
       <div>
        <Card style={{ width: '18rem' }}  className='card' border='success'>
        <Card.Img className='foto-prod' variant="top" src="image5.png" />
        <Card.Body>
        <Card.Title>HORNO CERAMICA</Card.Title>
        <hr />
        <Card.Text>
         <strong> <p>Precio: $2500</p></strong>
        </Card.Text>
        
      </Card.Body>
      </Card>
      </div>  *


    </div>
    
      
    

    </>
  )
}

export default Main