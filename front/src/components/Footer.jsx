
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import '../App.css'

export const Footer = () => {
  return (
    <>
      <div  style={{ backgroundColor: 'rgba(0, 0, 0, 0.09)' }}>

      <MDBFooter bgColor='gray' className='text-center text-lg-start text-muted' >

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                DECO ARTESANIAS
              </h6>
               <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p> 
            </MDBCol>
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                San Miguel de Tucuman
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                DecoArt@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 381-5932938
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.04)' }}>
        2023 Copyright:
        <a className='text-reset fw-bold' href='https://www.instagram.com/decoartesaniastuc/?theme=dark'> <br />
         DECO ARTESANIAS  
          
        </a>
      </div>
    </MDBFooter>
      </div>
    </>
  )
}
