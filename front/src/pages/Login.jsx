import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

const Login = () => {

  let navigate = useNavigate()
   
  const [nombre_usuario,setNombreUsuario] = useState("")
  const [clave_usuario,setClaveUsuario] = useState("")

 const handleSubmitN = (e)=>{
  setNombreUsuario(e.target.value)
 }
 const handleSubmitC = (e)=>{
  setClaveUsuario(e.target.value)
 }
 
 
const ValidarUsuario = () =>{
  if (nombre_usuario === 'Admin' && clave_usuario === '12345') {
    navigate('/main')
  }
  else
    alert("Contraseña incorrecta")

}
   


  
  return (
    <MDBContainer className="my-5">

    <MDBCard>
      <MDBRow className='g-0'>

        <MDBCol md='6'>
          <MDBCardImage src='deco.png' alt="login form" className='rounded-start w-100' />
        </MDBCol>

        <MDBCol md='6'>
          <MDBCardBody className='d-flex flex-column'>

            <div className='d-flex flex-row mt-2'>
              <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
              <span className="h1 fw-bold mb-0">BIENVENIDO</span>
            </div>

            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Iniciar sesión en su cuenta</h5>

              <MDBInput wrapperClass='mb-4'  label='Usuario' id='formControlLg' type='email' size="lg" onChange={handleSubmitN}/>
              <MDBInput wrapperClass='mb-4' label='Cotraseña' id='formControlLg' type='password' size="lg" onChange={handleSubmitC}/>

            <MDBBtn className="mb-4 px-5" color='dark' size='lg' type='submit' onClick={ValidarUsuario}>Login</MDBBtn>
            
           <br />
           <br />
           <br />
            <div className='d-flex flex-row justify-content-start'>
              <a href="#!" className="small text-muted me-1">Condiciones de uso.</a>
              <a href="#!" className="small text-muted">Política de privacidad</a>
            </div>
            <br />
           <br />   
          </MDBCardBody>
        </MDBCol>

      </MDBRow>
    </MDBCard>

  </MDBContainer>
  )
}

export default Login


