const {Router}=require('express')
const router= Router()

const {ver,crear,editar,eliminar}=require('../controllers/Proveedores')

router.get('/proveedores',ver)
router.post('/proveedores/post',crear)
router.put('/proveedores/put/:idProveedores',editar)
router.delete('/proveedores/delete/:idProveedores',eliminar)


module.exports= router