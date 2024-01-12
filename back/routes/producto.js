const {Router}=require('express')
const router= Router()

const {ver,crear,editar,eliminar}=require('../controllers/productos')

router.get('/productos',ver)
router.post('/productos/post',crear)
router.put('/productos/put/:idProducto',editar)
router.delete('/productos/delete/:idProducto',eliminar)


module.exports= router