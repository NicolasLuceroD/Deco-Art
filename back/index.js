const express= require('express')
const cors = require('cors')

const {connection}=require('./database/config')

const productos=require('./routes/producto')
const categoria=require('./routes/categoria')
const login = require('./routes/login')
const usuario = require('./routes/usuarios')
const proveedores = require('./routes/Proveedores')

const app= express()
app.use(express.json())
app.use(cors())

app.use('/',productos)
app.use('/',categoria)
app.use('/',login)
app.use('/',usuario)
app.use('/',proveedores)


app.listen(3001)


connection.connect((error)=>{
    if(error)throw error
    console.log('bd conectada');
})
